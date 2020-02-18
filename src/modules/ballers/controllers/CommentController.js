const Comment = require('../models/Comment');

class CommentController {
  async index(req, res, next) {
    try {
      const comments = await Comment.findAll();
      res.json({
        data: comments,
      });
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const comment = await Comment.findByPk(id);
      res.json({
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const comment = await Comment.create(req.body);
      res.json({
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await (await Comment.findByPk(id)).update(req.body);
      res.json({
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await (await Comment.findByPk(id)).destroy();
      res.json({
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CommentController();
