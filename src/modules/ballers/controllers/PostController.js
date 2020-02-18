const Post = require('../models/Post');

class PostController {
  async index(req, res, next) {
    try {
      const posts = await Post.findAll();
      res.json({
        data: posts,
      });
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const post = await Post.findByPk(id);
      res.json({
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const post = await Post.create(req.body);
      res.json({
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const post = await (await Post.findByPk(id)).update(req.body);
      res.json({
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const post = await (await Post.findByPk(id)).destroy();
      res.json({
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
