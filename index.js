// implement your API here
const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./data/db');
server.use(cors());
server.use(express.json());

server.post('/api/users', addUser);
server.get('/api/users', getUsers);
server.get('/api/users/:id', getUserById);
server.delete('/api/users/:id', deleteById);
server.get('*', handleDefault);

function handleDefault(req, res){
  res.json('no path here');
}

function getUsers(req, res){
  db.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

function getUserById(req, res){
  db.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

function deleteById(req, res){
  db.remove(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

function addUser(req, res){
  const newGuy={
    name: req.body.name,
    bio: req.body.bio,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at
  }

  db.insert(newGuy)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    })
}

server.listen((process.env.PORT || 3400), () => {
  console.log('listening on '+(process.env.PORT || 3400));
});