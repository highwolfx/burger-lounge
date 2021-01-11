var express = require("express");

var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', (req,res) {
    burger.select((data){
        var burgerObject = {
            burger_name: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/cats', (req,res)=>{
    burger.add(req.body.burger_name, (result) => {
        res.json({id: result.insertID});
    });
});

router.put('/api/cats/:id', (req,res)=> {
    var devoured = "id = " + req.params.id;
    console.log('devoured', devoured);

    burger.update(devoured, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      })
});

module.exports = router;