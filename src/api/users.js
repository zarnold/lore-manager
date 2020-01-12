var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET users listing. */
router.get('/', async function (req, res, next) {

  const result = "OK"
res.json({result})

});


router.post('/:title', async function (req, res, next) {


  let albumInstance = new Album({
    title: req.param.title,

  });
  await tintin.save();
  res.json({ status: ok })
})
module.exports = router;
