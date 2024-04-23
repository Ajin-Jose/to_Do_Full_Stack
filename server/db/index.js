const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path: + './env'});

mongoose.connect(process.env.DB_URL);

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo,
}