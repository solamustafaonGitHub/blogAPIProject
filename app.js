//importing express
const express = require('express');
//importing body-parser
const bodyParser = require('body-parser'); 
//importing the connectToMongoDB function from the db.js file
const {connectToMongoDB} = require('./dbconnection'); 

//importing the articleRoute from the article.js file
const articleRoute = require('./routes/articles.js'); 

//this will load all the environment variables from the .env file into the process.env object
require('dotenv').config(); 

// getting the PORT from the .env file
const PORT = process.env.PORT;

//creating an express app
const app = express(); 

//calling the connectToMongoDB function to connect to the MongoDB database
connectToMongoDB(); 

//setting the middlewares for the express app
app.use(express.static('public'));
app.use(bodyParser.json());

//this is a middleware that will parse all incoming requests to JSON
app.use(express.json());
//this is the middleware that will handle all the requests to the /articles route')
app.use('/articles', articleRoute); 

//setting the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//defining the HomePage Route
app.get('/', (req, res) => {
  res.render('index');
});


//starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});



