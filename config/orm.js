var connection = require("./connection.js");

var orm = {
    all: function(cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    add: function(addBurger,cb){
        var queryString = "INSERT INTO burgers VALUES ?";
        connection.query(queryString, [addBurger, false], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(burgerID,cb){
        var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
        connection.query(queryString, [burgerID], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;