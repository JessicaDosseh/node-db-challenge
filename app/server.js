const express = require('express');

const ProjectRouter = require('../router/projects/project-router.js');
const ResourceRouter = require('../router/resources/resource-router.js');
const TaskRouter = require('../router/tasks/task-router.js');

const server = express();

server.use(express.json()); 
server.use('/api', ProjectRouter, ResourceRouter, TaskRouter);

module.exports = server; 