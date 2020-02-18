const Message = require('../models/Message');

class MessageController {
  async index() {
    const messages = await Message.find();
    return messages;
  }

  async show(id) {
    const message = await Message.findById(id);
    return message;
  }

  async store(body, user) {
    const message = await Message.create(body);
    user.messages.push(message);
    user.room.messages.push(message);
    await user.room.save();
    await user.save();

    user.room.populate('messages');
    return message;
  }

  async update(id, body) {
    const message = await Message.findByIdAndUpdate(id, { ...body });
    return message;
  }

  async delete(id) {
    const message = await Message.findByIdAndDelete(id);
    return message;
  }
}

module.exports = new MessageController();
