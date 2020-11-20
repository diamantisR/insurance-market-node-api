import * as mongoose from 'mongoose';

const Monster = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  hp: Number,
  patk: Number,
  matk: Number,
  pdef: Number,
  mdef: Number,
  gold: Number,
  level: Number
});

export default mongoose.model('Monster', Monster);