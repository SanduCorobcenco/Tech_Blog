const { User } = require('../models');

const userData = [
    {
        "name": "Khabib Nurmagomedov",
        "email": "khabib@gmail.com",
        "password": "password1234"
    },
    {
        "name": "Connor Mcgregor",
        "email": "CMcgregor@fakemail.com",
        "password": "password1234"
    },
    {
        "name": "Justin Gaethje",
        "email": "JGaethje@fakemail.com",
        "password": "password1234"
    },
    
];

const seedData = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedData;