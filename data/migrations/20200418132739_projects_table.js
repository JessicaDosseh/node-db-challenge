
exports.up = function(knex) {
  return knex.schema
  
  // Manage Projects.
    .createTable('projects', tbl => {
      tbl.increments(); 
      tbl.string('project_name', 128)
         .notNullable()
      tbl.text('description')
      tbl.boolean('completed') // default value of false
         .notNullable(); 
    })

  // Manage Resources.
    .createTable('resources', tbl => {
      tbl.increments(); 
      tbl.string(' resource_name', 128)
         .notNullable()
      tbl.text('description');
    })

  // Manage Tasks that belong to only one project.
    .createTable('tasks', tbl => {
      tbl.increments(); 
      tbl.integer('project_id')
         .unsigned()
         .notNullable()
         .references('projects.id')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
      tbl.text('description')
         .notNullable()
      tbl.text('notes')
      tbl.boolean('completed') // default value of false
         .notNullable(); 
    })

  // Manage many to many connection between projects & resources.
    .createTable('project_resources', tbl => {
      tbl.increments(); 
      tbl.integer('project_id')
         .unsigned()
         .notNullable()
         .references('projects.id')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
      tbl.integer('resource_id')
         .unsigned()
         .notNullable()
         .references('resources.id')
         .onUpdate('CASCADE')
         .onDelete('CASCADE'); 
    })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
