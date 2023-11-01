const supertest = require('supertest'); // The first line imports supertest, which is a library that allows us to make HTTP requests to our Express server.
const app = require('../../app'); //The second line imports our Express app.
const mongoose = require('mongoose'); //The third line imports mongoose, which is the library that allows us to connect to our MongoDB database.
const userModel = require('../../model/users'); //The fourth line imports our user model.
const bcrypt = require('bcrypt'); //The fifth line imports bcrypt, which is a library that allows us to hash passwords.
const jwt = require('jsonwebtoken'); //The sixth line imports jsonwebtoken, which is a library that allows us to create and verify JSON web tokens.
const config = require('config'); //The seventh line imports the config library, which allows us to access our environment variables.
const request = supertest(app); //The eighth line imports supertest again, but this time it is used to make HTTP requests to our Express app.
const { MongoMemoryServer } = require('mongodb-memory-server'); //The ninth line imports the MongoMemoryServer, which is a library that allows us to create a MongoDB database in memory.
const mongod = new MongoMemoryServer(); //The tenth line creates a new instance of the MongoMemoryServer.
const { setupDB } = require('../test-setup'); //The eleventh line imports the setupDB function from test-setup.js.
setupDB('articles-route-test', true); //The twelfth line calls the setupDB function.