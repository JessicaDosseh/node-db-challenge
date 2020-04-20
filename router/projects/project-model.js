const db = require('../../data/db-config.js'); 

module.exports = {
  getProjects,
  getProjectsById,
  addProjects,
  updateProjects,
  removeProjects,
};


// ----------------------------------------------

// CRUD operations for Projects: 

// GET /api/projects - get projects master list
function getProjects() {
  return db('projects'); 
}

// GET /api/projects/:id - get a specific project
function getProjectsById(id) {
  return db('projects')
        .where({id})
        .first(); 
} 

// POST /api/projects - add a new project
function addProjects(project) {
  return db('projects')
        .insert(project); 
}

// PUT /api/projects/:id - updates a project
function updateProjects(changes, id) {
  return db('projects')
        .where({id})
        .update(changes);
}

// DELETE /api/projects/:id - remove a given project
function removeProjects(id) {
  return db('projects')
        .where({id})
        .del();
}