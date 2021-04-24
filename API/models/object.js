const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  title : {
    type : String ,
    required : [true]
  },
  description : {
    type : String ,
    required : [false]
  },
  completed : {
    type : Boolean ,
    default : [false]
  },
  imgurl : {
    type : String ,
    required : [false]
  },
  score :{
    type : Number ,
    required : [true]
  },
  malurl:{
    type : String,
    unique : true,
    required : [true]
  },
  episodes :{
    type : Number
  }
});

const Anime = mongoose.model('anime' , AnimeSchema);
module.exports = Anime;
