const User = require('../models/User');
const Room = require('../models/Room');

class UserController {
  async index(field = null) {
    const users = await User.find({ ...field })
      .populate('room');
    return users;
  }

  async show(id) {
    const user = await User.findById(id)
      .populate('room');
    return user;
  }

  async store(body, room) {
    const userRoom = new Room({ name: room });
    const user = new User({ ...body });
    userRoom.users.push(user);
    await userRoom.save();

    user.room = userRoom;
    await user.save();

    user.populate('room');
    return user;
  }

  async update(id, body) {
    const user = await User.findByIdAndUpdate(id, { ...body })
      .populate('room');
    return user;
  }

  async delete(id) {
    const user = await User.findByIdAndDelete(id)
      .populate('room');
    return user;
  }
}

module.exports = new UserController();
