var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers";
        connnection.query(queryString, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(addBurger,cb){
        var queryString = "INSERT INTO burgers VALUES ?";
        connection.query(queryString, [addBurger, false], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(burgerID,cb){
        var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
        connection.query(queryString, [burgerID], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;