const express = require('express');

const ProjectRputer = require('../projects/project-router.js');

const server = express();

server.use(express.json()); 
server.use('/api/projects', ProjectRputer);

module.exports = server; 