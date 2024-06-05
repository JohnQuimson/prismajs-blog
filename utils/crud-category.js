const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCategory = (data, cf) => {
  prisma.category
    .create({ data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

module.exports = {
  createCategory,
};
