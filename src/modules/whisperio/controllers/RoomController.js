const Room = require('../models/Room');

class RoomController {
  async index(field = null) {
    this.rooms = await Room.find({ ...field });
    return this.rooms;
  }

  async show(id) {
    this.room = await Room.findById(id);
    return this.room;
  }

  async store(body) {
    this.room = await Room.create({ ...body });
    return this.room;
  }

  async update(id, body) {
    this.room = await Room.findByIdAndUpdate(id, { ...body });
    return this.room;
  }

  async delete(id) {
    this.room = await Room.findByIdAndDelete(id);
    return this.room;
  }
}

module.exports = new RoomController();
