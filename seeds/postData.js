const { Post } = require('../models')

const postData = [
    {
        "title": "Google’s Fi wireless service gets a new, cheaper unlimited plan",
        "content": "Google’s Fi wireless service has always been a niche option that best served owners of Google Pixels, but today the search giant is adding a more affordable unlimited data plan in hopes of making Fi more palatable to the masses. ",
        "date_created": "04/22/2021",
        "user_id": 1
    },
    {
        "title": "Weather and news are coming to the Windows 10 taskbar",
        "content": "After testing it with Insiders, Microsoft is adding a new News and Interests feature to Windows 10. In short, the tool creates a shortcut on the taskbar that allows you to check the weather, as well as catch up on the latest news, sports scores and stock prices.",
        "date_created": "04/21/2021",
        "user_id": 2
    },
    {
        "title": "Facebook will ask users about ‘negative experiences’ in News Feed ?",
        "content": "ORM stands for object relational mapper. It uses models to organize and access data. As a code-first model, you can write a database by writing the structure, then the ORM will create the tables and keys for you. It also abstracts database queries so that you don't have to write your own queries in a specific database language. It can really simplify the way you create queries in SQL!",
        "date_created": "04/20/2021",
        "user_id": 3
    },
    
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;