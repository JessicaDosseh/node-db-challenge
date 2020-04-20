const db = require('../../data/db-config.js'); 

module.exports = {
  getTasks,
  getTasksById,
  addTasks,
  updateTasks,
  removeTasks,
};


// ----------------------------------------------

// CRUD operations for Tasks: 

// GET /api/tasks - get tasks master list
function getTasks() {
  return db('tasks'); 
}

// GET /api/tasks/:id - get a specific task
function getTasksById(id) {
  return db('tasks')
        .where({id})
        .first(); 
} 

// POST /api/tasks - add a new task
function addTasks(task) {
  return db('tasks')
        .insert(task); 
}

// PUT /api/tasks/:id - updates a task
function updateTasks(changes, id) {
  return db('tasks')
        .where({id})
        .update(changes);
}

// DELETE /api/tasks/:id - remove a given task
function removeTasks(id) {
  return db('tasks')
        .where({id})
        .del();
}