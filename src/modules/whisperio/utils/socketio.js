/* eslint-disable no-unused-vars */
const socketio = require('socket.io');

const UserController = require('../controllers/UserController');
const RoomController = require('../controllers/RoomController');
const MessageController = require('../controllers/MessageController');

class Socket {
  constructor(server) {
    this.io = socketio(server);
  }

  async connection() {
    this.io.on('connection', (socket) => {
      socket.on('join', ({ name, room }, callback) => {
        this.join(socket, { name, room }, callback);
        callback();
      });
      socket.on('send-message', (message, callback) => {
        this.sendMessage(socket, message);
        callback();
      });
      socket.on('disconnect', () => {
        this.disconnect(socket);
      });
    });
  }

  async join(socket, { name, room }, callback) {
    let user = await UserController.show(socket.id);

    if (!user) {
      user = await UserController.store({
        _id: socket.id,
        name,
      }, room);
    }

    const joinedMessage = await MessageController.store({
      text: `${user.name} has joined`,
      user,
      room: user.room,
    }, user);

    socket.emit('message', {
      user: 'admin', text: `${user.name}, welcome to the room ${user.room.name}`,
    });
    socket.broadcast.to(user.room.name).emit('message', {
      user: 'admin', text: joinedMessage.text,
    });

    socket.join(user.room.name);
    this.io.to(user.room.name).emit('room-data', {
      room: user.room.name, users: user.room.users,
    });
  }

  async sendMessage(socket, message) {
    const user = await UserController.show(socket.id);
    await MessageController.store({
      text: message,
      user,
      room: user.room,
    }, user);

    this.io.to(user.room.name).emit('message', {
      user: user.name, text: message,
    });
    this.io.to(user.room.name).emit('room-data', {
      room: user.room, users: user.room.users,
    });
  }

  async disconnect(socket) {
    const user = await UserController.delete(socket.id);
    if (user) {
      this.io.to(user.room.name).emit('message', {
        user: 'admin', text: `${user.name} has left.
            `,
      });
    }
  }
}

module.exports = Socket;
