const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = (data, cf) => {};
const readPosts = (data, cf) => {};
const readPostById = (data, cf) => {};
const updatePostById = (data, cf) => {};
const deletePostById = (data, cf) => {};

module.exports = {
  createPost,
  readPosts,
  readPostById,
  updatePostById,
  deletePostById,
};
