const express = require('express');
const { readFile } = require('fs');
const bodyP = require('body-parser')
const cors = require('cors')
const routes = require('./config/routes')

const server = express();

server.use(express.json());
server.use(bodyP.urlencoded({extended: false}))
server.use(cors())
server.use(routes)


server.listen(3000, () =>{
    console.log('Express started at http://localhost:3000')
});