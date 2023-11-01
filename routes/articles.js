//importing express
const express = require('express'); 
//importing the article model
const articleModel = require('../model/articles'); 

//creating an express router
const articleRoute = express.Router(); 

//CRUD Routes Operations ====> Create, Read, Update, Delete
//1. Read All Articles
articleRoute.get('/', (req, res) => {
    articleModel.find ({})
    .then((articles) => {
        res.send(articles);
    }) 
    .catch((err) => {
        console.log(err);
        res.send(err.message);
    }); 
});

//Read one article by Id || Find and return one article by ID
articleRoute.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    // Find and return one article by ID
    articleModel.findById(id)
      .then((article) => {
        res.status(200).send(article);
      }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal server error: ' + err.message); // Include the error message in the response
      });
  });
  
  

//2. Create One Article
articleRoute.post('/', (req, res) => {
    const article = req.body;
    console.log(article);

    articleModel.create(article)
    .then((article) => {
        res.status(201).send({
            message: 'Article Created Successfully',
            data: article
        });
    })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);  
    })
});

//3. Update One Article
articleRoute.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedArticle = req.body;
    // Perform the update operation on the article collection in the database
    articleModel.findByIdAndUpdate(id, updatedArticle, { new: true })
      .then((article) => {
                res.status(200).send(article);
            }).catch((err) => {
                console.log(err)
                res.status(500).send(err)
                    });
            });

//4. Delete One Article
articleRoute.delete('/:id', (req, res) => {
    const id = req.params.id;
//Perform delete operation to article collection in the database
    articleModel.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({
            message: 'Article Deleted Successfully',
            data: ""
        });
        
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
            });
    });


//exporting the router
module.exports = articleRoute;