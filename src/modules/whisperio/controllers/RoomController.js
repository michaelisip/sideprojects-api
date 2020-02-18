const Room = require('../models/Room');

class RoomController {
  async index(field = null) {
    const rooms = await Room.find({ ...field });
    return rooms;
  }

  async show(id) {
    const room = await Room.findById(id);
    return room;
  }

  async store(body) {
    const room = await Room.create({ ...body });
    return room;
  }

  async update(id, body) {
    const room = await Room.findByIdAndUpdate(id, { ...body });
    return room;
  }

  async delete(id) {
    const room = await Room.findByIdAndDelete(id);
    return room;
  }
}

module.exports = new RoomController();
