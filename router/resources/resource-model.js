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

// GET /api/resources - get resources master list
function getResources() {
  return db('resources'); 
}

// GET /api/resources/:id - get a specific resource
function getResourcesById(id) {
  return db('resources')
        .where({id})
        .first(); 
} 

// POST /api/resources - add a new resource
function addResources(resource) {
  return db('resources')
        .insert(resource); 
}

// PUT /api/resources/:id - updates a resource
function updateResources(changes, id) {
  return db('resources')
        .where({id})
        .update(changes);
}

// DELETE /api/resources/:id - remove a given resource
function removeResources(id) {
  return db('resources')
        .where({id})
        .del();
}