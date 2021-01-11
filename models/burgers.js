var orm = require('../config/orm.js');

var burger = {
    select: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    add: (addBurger, cb) => {
        orm.insertOne(addBurger, (res) => {
            cb(res);
        });
    },
    update: (burgerID, cb) => {
        orm.updateOne(burgerID, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;