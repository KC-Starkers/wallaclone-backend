'use strict';

const mongoose = require('mongoose');
const cote = require('cote');

const thumbnailRequester = new cote.Requester(
  {
    name: 'thumbnail creator client',
  },
  { log: false, statusLogsEnabled: false }
);

const fsPromises = require('fs').promises;
const fs = require('fs-extra');
const path = require('path');

const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


const messageSchema = Schema({
    user: {type: String},
    message: {type: String},
    //created_at: { type: Date, default: Date.now },
    chatId: {type: String}
});

const chatSchema = Schema({
    chatId: { type: String, unique: true, index: true },
    chatSeller: {type: String, required: true,},
    chatBuyer: {type: String, required: true,},
    chatMessage: {type: String},
    product: { type: String, required: true, },
})

messageSchema.set('timestamps', true);
chatSchema.set('timestamps', true);

const Chat = mongoose.model('Chat', chatSchema);
const Message = mongoose.model('Message', messageSchema);


module.exports = {Chat, Message}
