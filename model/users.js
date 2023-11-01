const mongoose = require('mongoose');

//define a schema
const Schema = mongoose.Schema;

//define the user schema attributes
const userSchemaModel = new Schema({
    first_name: {
        type: String,
        required: true, 
    },

    last_name: {
        type: String,
        required: true, 
    },

    email: {
        type: String,
        required: true, 
        unique: [true, "Email already exists"],
    },

    password: {
        type: String,
        required: true, 
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now,
    },

}); 

//collection name is users. This is the name of the collection in the database.
module.exports = mongoose.model('users', userSchemaModel);