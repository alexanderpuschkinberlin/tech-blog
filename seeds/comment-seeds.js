const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Earth which living set lesser Years male beast our that.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "Earth replenish sixth earth beast kind it yielding from. One.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "Said creepeth place to can't can't female were, appear green.",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
