// import mongoose from 'mongoose';
let mongoose = require('mongoose');
// =======================  Defining the schema  ========================== */
const UserSchema = new mongoose.Schema({
// =======================  schema for user chat ========================== */ 
  chat_type: { type: String, required: true },
  room: { type: String, required: true },
  conversation: [{
    name: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, required: true }
  }]
}, { collection: 'groupchat', versionKey: false });

module.exports = mongoose.model('groupchat', UserSchema);
