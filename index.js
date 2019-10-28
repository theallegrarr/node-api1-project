// implement your API here
const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./data/db');
server.use(cors());
server.use(express.json());

server.get('*', handleDefault);
server.post('/api/users', addUser);


function handleDefault(req, res){
  res.json('no path here');
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