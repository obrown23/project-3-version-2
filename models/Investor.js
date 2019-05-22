const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Investor = new Schema({
    name: String,
    occupation: String,
    website: String,
    questions: String,
    email: String,
    goal: String,
})

let InvestorCollection = mongoose.model('Investor', Investor);
module.exports = InvestorCollection




