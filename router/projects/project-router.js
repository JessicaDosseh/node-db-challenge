const express = require('express'); 

const Project = require('./project-model.js');

const router = express.Router(); 

// ---------------------------------------------

// CRUD operations for Projects: 

// Get project master list
router.get('/projects', (req, res) => {
  Project.getProjects()
        .then(projects => {
          if (projects) {
            res.status(200).json({ projectList: projects }); 
          } else {
            res.status(404).json({ message: 'Could not retrive project list.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get project list', error });
        });
});

// Get a specific project
router.get('/projects/:id', (req, res) => {
  const id = req.params.id; 

  Project.getProjectsById(id)
        .then(project => {
          if (project) {
            res.status(201).json(project); 
          } else {
            res.status(404).json({ message: 'Could not find project with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get project.', error });
        });
});

// Add a new project
router.post('/projects', (req, res) => {
  const projectData = req.body;

  Project.addProjects(projectData)
        .then(count => {
          if (count) {
            res.status(201).json({ added_project: count });
          } else {
            res.status(404).json({ message: 'Could not add project.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to create new project.', error });
        });
}); 

// Updates a project
router.put('/projects/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Project.getProjectsById(id)
        .then(project => {
          if (project) {
            Project.updateProjects(changes, id)
                  .then(updateProject => {
                    if (updateProject) {
                      res.status(201).json({ updated_project: id, status: updateProject });
                    } else {
                      res.status(404).json({ message: 'Could not update project.' });
                    }
                  })
                  .catch(error => {
                    res.status(500).json({ message: 'Failed to update project.', error });
                  })
          } else {
            res.status(404).json({ message: 'Could not find project with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to find project to update.', error });
        });
}); 

// Remove a given project
router.delete('/projects/:id', (req, res) => {
  const id = req.params.id;

  Project.removeProjects(id)
        .then(deleted => {
          if (deleted) {
            res.status(200).json({ deleted_projects: id, status: deleted })
          } else {
            res.status(404).json({ message: 'Could not find project with given id.' })
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to delete project.', error }); 
        }); 
}); 


// Stretch Problem part 1/2 tasks
// Get tasks based on project id
router.get('/projects/:id/tasks', (req, res) => {
  const id = req.params.id; 

  Project.getProjectsById(id)
        .then(project => {
          if (project) { 
            Project.getProjectTasks(id)
                  .then(task => {
                    if (task) {
                      res.status(201).json({project, tasks: task})
                    } else {
                      res.status(404).json({ message: 'Could not find task with given id.' });
                    }    
                  })
                  .catch(error => {
                      res.status(500).json({message: 'Failed to find task', error})
                  })
          } else {
            res.status(404).json({ message: 'Could not find project with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get project task.', error });
        });
});


module.exports = router; 