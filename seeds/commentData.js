const { Comment } = require('../models')

const commentData = [
    {
        "content": "WOW! Didn't know about google FI!",
        "date_created": "04/22/2021",
        "user_id": 3,
        "post_id": 1
    },
    {
        "content": "Windows 10 is going to be amazing.",
        "date_created": "04/21/2021",
        "user_id": 2,
        "post_id": 2
    },
    {
        "content": "Oh, no, I'll move to twitter.",
        "date_created": "04/20/2021",
        "user_id": 1,
        "post_id": 3
    },

]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;