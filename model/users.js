//imports mongoose
const moogoose = require('mongoose');
//imports passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');

//creates a new schema for the user
const userSchemaModel = new moogoose.Schema({
    username: String,
    password: String
})

// Automatically handles hashing and salting of passwords
// and adds the following properties to the user object:
//   - password
//   - salt
//   - hash
userModel.plugin(passportLocalMongoose)

//collection name is users. This is the name of the collection in the database.
module.exports = moogoose.model('users', userSchemaModel);