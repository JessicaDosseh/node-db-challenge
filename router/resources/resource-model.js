const db = require('../../data/db-config.js'); 

module.exports = {
  getResources,
  getResourcesById,
  addResources,
  updateResources,
  removeResources,
};


// ----------------------------------------------

// CRUD operations for Resources: 

// GET /api/projects/resources - get resources master list
function getResources() {
  return db('resources'); 
}

// GET /api/projects/:id/resources - get a specific resource
function getResourcesById(id) {
  return db('resources')
        .where({id})
        .first(); 
} 

// POST /api/projects/resources - add a new resource
function addResources(resource) {
  return db('resources')
        .insert(resource); 
}

// PUT /api/projects/:id/resources - updates a resource
function updateResources(changes, id) {
  return db('resources')
        .where({id})
        .update(changes);
}

// DELETE /api/projects/:id/resources - remove a given resource
function removeResources(id) {
  return db('resources')
        .where({id})
        .del();
}