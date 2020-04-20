const express = require('express'); 

const Resource = require('./resource-model.js');

const router = express.Router();

// ---------------------------------------------

// CRUD operations for Resources: 

// Get resource master list
router.get('/resources', (req, res) => {
  Resource.getResources()
        .then(resources => {
          if (resources) {
            res.status(200).json({ resourceList: resources }); 
          } else {
            res.status(404).json({ message: 'Could not retrive resource list.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get resource list', error });
        });
});

// Get a specific resource
router.get('/resources/:id', (req, res) => {
  const id = req.params.id; 

  Resource.getResourcesById(id)
        .then(resource => {
          if (resource) {
            res.status(201).json(resource); 
          } else {
            res.status(404).json({ message: 'Could not find resource with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get resource.', error });
        });
});

// Add a new resource
router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Resource.addResources(resourceData)
        .then(count => {
          if (count) {
            res.status(201).json({ added_resource: count });
          } else {
            res.status(404).json({ message: 'Could not add resource.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to create new resource.', error });
        });
}); 

// Updates a resource
router.put('/resources/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Resource.getResourcesById(id)
        .then(resource => {
          if (resource) {
            Resource.updateResources(changes, id)
                  .then(updateResource => {
                    if (updateResource) {
                      res.status(201).json({ updated_resource: id, status: updateResource });
                    } else {
                      res.status(404).json({ message: 'Could not update resource.' });
                    }
                  })
                  .catch(error => {
                    res.status(500).json({ message: 'Failed to update resource.', error });
                  })
          } else {
            res.status(404).json({ message: 'Could not find resource with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to find resource to update.', error });
        });
}); 

// Remove a given resource
router.delete('/resources/:id', (req, res) => {
  const id = req.params.id;

  Resource.removeResources(id)
        .then(deleted => {
          if (deleted) {
            res.status(200).json({ deleted_resources: id, status: deleted })
          } else {
            res.status(404).json({ message: 'Could not find resource with given id.' })
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to delete resource.', error }); 
        }); 
}); 


module.exports = router;