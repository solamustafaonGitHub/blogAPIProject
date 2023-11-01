//importing express
const express = require('express');
//importing the user model
const userModel = require('../model/users');

//creating an express router
const userRoute = express.Router();

//CRUD Routes Operations ====> Create, Read, Update, Delete
//1. Read All Users
userRoute.get('/', (req, res) => {
    userModel.find({})
    .then((users) => {
        res.send(users);
    }) 
    .catch((err) => {
        console.log(err);
        res.send(err.message);
    }); 
});

//Read one user by Id || Find and return one user by ID
userRoute.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    //Find and return one user by ID
    userModel.findById(id)
    .then((user) => {
     res.status(200).send(user);
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error" + err.message);
    });
});


//2. Create One User
userRoute.post('/', (req, res) => {
    const user = req.body;
    console.log(user);

    userModel.create(user)
    .then((user) => {
        res.status(201).send({
            message: 'User Created Successfully',
            data: user
        });
})
.catch((err) => {
    console.log(err);
    res.status(500).send(err);
})
});


//3. Update One User
userRoute.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    //perform the update operation on the database
    userModel.findByIdAndUpdate(id, updatedUser, {new: true})
    .then(user => {
        res.status(200).send(user);
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
        })      
    
    });


//4. Delete One User
userRoute.delete('/:id', (req, res) => {
    const id = req.params.id;
    //Perform delete operation to user collection in the database
    userModel.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({
            message: 'User Deleted Successfully'
        });
    }) .catch((err) => {
        console.log(err);
        res.status(500).send(err);
    })
});

//exporting the userRoute
module.exports = userRoute;