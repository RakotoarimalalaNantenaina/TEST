const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: {type:Number},
  titre: { type: String},
  description: { type: String},
  date: { type: Date},
  horaire: {type: String},
  duree: {type: Number},
  place_dispo: {type: Number},
  place_reserver: {type: Number},
  prix: { type: Number},
  photo_produit:String,

});

module.exports = mongoose.model("atelier", UserSchema);
