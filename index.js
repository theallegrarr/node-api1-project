// implement your API here
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

server.get('*', handleDefault);


function handleDefault(req, res){
  res.json('no path here');
}

server.listen((process.env.PORT || 3400), () => {
  console.log('listening on '+(process.env.PORT || 3400));
});