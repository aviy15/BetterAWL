const express = require('express');
const router = express.Router();
const Anime = require('../models/object');

router.get('/anime/:id' , function(req , res){
  console.log(req.params.id);
  Anime.findOne({_id : req.params.id}).then(function(anime){
    res.send(anime);
  }).catch(e => console.log(`Error occured ${e}`));
})

router.get('/anime/' , function(req , res){
  console.log(req.params);
  Anime.find({}).then(function(anime){
    res.send(anime);
  }).catch(e => console.log(`Error occured ${e}`));
})

router.post('/anime' , function(req , res){
  Anime.create(req.body).then(function(anime){
    res.send(anime);
  }).catch(e => res.send(e));
})

router.put('/anime/:id' , function(req , res){
  Anime.findByIdAndUpdate(
    req.params.id , {completed : true})
    .then(function(){
        Anime.findOne({_id: req.params.id}).then(function(weeb){
            res.send(weeb);
        });
    }).catch(e => console.log(`Error occured ${e}`));
})

router.delete('/anime/:id' , function(req , res){
  Anime.findByIdAndDelete(req.params.id).then(function(anime){
        res.send(anime);
    }).catch(e => console.log(`Error occured ${e}`));
})

module.exports = router;
