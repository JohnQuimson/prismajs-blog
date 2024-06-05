const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createTag = (data, cf) => {
  prisma.tag
    .create({ data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

module.exports = {
  createTag,
};
