var express = require("express");

var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', (req,res) => {
    burger.all((data) => {
        var burgerObject = {
            burgers: data
        };
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', (req,res)=>{
    burger.add(req.body.name, (result) => {
        res.json({id: result.burgerID});
    });
});

router.put('/api/burgers/:id', (req,res)=> {
    var devoured = req.params.id;
    console.log('devoured :', devoured);

    burger.update(devoured, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      })
});

module.exports = router;