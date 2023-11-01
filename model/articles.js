const mongoose = require('mongoose');

//define a schema
const Schema = mongoose.Schema;

//define the article schema attributes
const articleShemaModel = new Schema({
    title: {
        type: String,
        required: true, 
        unique: [true, "Blog Title already exists"],
    },

    description: {
        type: String,
    },

    
    tags:{
    type: [Array],
    },

    author: {
        type: String,
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now,
    },

    state: {
        type: String,
        default: 'draft'
    },

    read_count: {
        type: Number,
        default: 0
    },

    reading_time: {
        type: Date,
        default: Date.now,
    },
    
    body: {
        type: String,
    }

})



//collection name is articles. This is the name of the collection in the database.
module.exports = mongoose.model('articles', articleShemaModel); 