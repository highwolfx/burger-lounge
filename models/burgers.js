var orm = require('../config/orm.js');

var burger = {
    all: (cb) => {
        orm.all((res) => {
            cb(res);
        });
    },
    add: (addBurger, cb) => {
        orm.add(addBurger, (res) => {
            cb(res);
        });
    },
    update: (burgerID, cb) => {
        orm.update(burgerID, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;