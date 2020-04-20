const express = require('express');

const ProjectRouter = require('../router/projects/project-router.js');
const ResourceRouter = require('../router/resources/resource-router.js');

const server = express();

server.use(express.json()); 
// server.use('/api/projects', ProjectRouter);
server.use('/api', ProjectRouter, ResourceRouter);

module.exports = server; 