'use strict';

const db = require('../db');
const { BadRequestError } = require('../expressError');

class User {
  static async getUserAndPosts(id) {
    console.log('getUserAndPosts running');
    try {
      const user = await db.query(
        `
      SELECT * FROM users
      WHERE id = $1
    `,
        [id]
      );
      if (!user) {
        throw new BadRequestError(`User ${id} not found`);
      }

      const posts = await db.query(
        `SELECT post_data FROM posts WHERE user_id = $1`,
        [id]
      );
      return { user: user.rows, posts: posts.rows };
    } catch (err) {
      return err;
    }
  }
}

module.exports = User;
