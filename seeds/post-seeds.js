const { Post } = require("../models");

const postData = [
  {
    title: "First Post",
    content:
      "Own midst divided itself image sea cattle over behold set Land likeness said beginning darkness beast air isnt give him.",
    user_id: 1,
  },
  {
    title: "Second Post",
    content:
      "Upon sea. To form moved is image, which. Moveth image over moved male above multiply have moved dominion created behold.",
    user_id: 2,
  },
  {
    title: "Third Post",
    content:
      "Isnt male subdue. A a given i, kind waters the spirit earth let gathered gathering, place fruitful given land. Spirit.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
