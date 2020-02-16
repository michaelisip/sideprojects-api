const Message = require('../models/Message');

class MessageController {
  async index() {
    this.messages = await Message.find();
    return this.messages;
  }

  async show(id) {
    this.message = await Message.findById(id);
    return this.message;
  }

  async store(body, user) {
    this.message = await Message.create(body);

    user.messages.push(this.message);
    user.room.messages.push(this.message);
    await user.room.save();
    await user.save();

    user.room.populate('messages');
    return this.message;
  }

  async update(id, body) {
    this.message = await Message.findByIdAndUpdate(id, { ...body });
    return this.message;
  }

  async delete(id) {
    this.message = await Message.findByIdAndDelete(id);
    return this.message;
  }
}

module.exports = new MessageController();
