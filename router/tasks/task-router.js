const express = require('express'); 

const Task = require('./task-model.js');

const router = express.Router(); 

// ---------------------------------------------

// CRUD operations for Tasks: 

// Get task master list
router.get('/tasks', (req, res) => {
  Task.getTasks()
        .then(tasks => {
          if (tasks) {
            res.status(200).json({ taskList: tasks }); 
          } else {
            res.status(404).json({ message: 'Could not retrive task list.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get task list', error });
        });
});

// Get a specific task
router.get('/tasks/:id', (req, res) => {
  const id = req.params.id; 

  Task.getTasksById(id)
        .then(task => {
          if (task) {
            res.status(201).json(task); 
          } else {
            res.status(404).json({ message: 'Could not find task with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get task.', error });
        });
});

// Add a new task
router.post('/tasks', (req, res) => {
  const taskData = req.body;

  Task.addTasks(taskData)
        .then(count => {
          if (count) {
            res.status(201).json({ added_task: count });
          } else {
            res.status(404).json({ message: 'Could not add task.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to create new task.', error });
        });
}); 

// Updates a task
router.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Task.getTasksById(id)
        .then(task => {
          if (task) {
            Task.updateTasks(changes, id)
                  .then(updateTask => {
                    if (updateTask) {
                      res.status(201).json({ updated_task: id, status: updateTask });
                    } else {
                      res.status(404).json({ message: 'Could not update task.' });
                    }
                  })
                  .catch(error => {
                    res.status(500).json({ message: 'Failed to update task.', error });
                  })
          } else {
            res.status(404).json({ message: 'Could not find task with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to find task to update.', error });
        });
}); 

// Remove a given task
router.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;

  Task.removeTasks(id)
        .then(deleted => {
          if (deleted) {
            res.status(200).json({ deleted_tasks: id, status: deleted })
          } else {
            res.status(404).json({ message: 'Could not find task with given id.' })
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to delete task.', error }); 
        }); 
}); 


module.exports = router; 