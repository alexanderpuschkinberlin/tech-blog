const { User } = require("../models");

const userData = [
  {
    username: "jimmy",
    password: "jimmy",
  },
  {
    username: "peter",
    password: "peter",
  },
  {
    username: "tim",
    password: "tim",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
