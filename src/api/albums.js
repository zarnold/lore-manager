var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var { Album } = require('../models/albums/model')

/* GET users listing. */
router.get('/', async function (req, res, next) {

  const query = Album.find();
  const albumList = await query.lean().exec();

  res.json(albumList.map((item) => ({
    createdAt : item.createdAt,
    title:item.title,
  })))

});


router.post('/:title', async function (req, res, next) {


  let albumInstance = new Album({
    title: req.param.title,

  });
  await tintin.save();
  res.json({ status: ok })
})
module.exports = router;
