const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Filmmaker = new Schema({
    name: String,
    description: String,
    website: String,
    questions: String,
    comments: String,
    email: String,
    goal: String,
})

module.exports = mongoose.model('Filmmaker', Filmmaker)