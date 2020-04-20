
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(
        [{
          "id": 1,
          "project_name": "Opela",
          "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
          "completed": false
        }, {
          "id": 2,
          "project_name": "Treeflex",
          "description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
          "completed": false
        }, {
          "id": 3,
          "project_name": "Tampflex",
          "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
          "completed": false
        }, {
          "id": 4,
          "project_name": "Opela",
          "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
          "completed": false
        }, {
          "id": 5,
          "project_name": "Cardguard",
          "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
          "completed": false
        }, {
          "id": 6,
          "project_name": "Cardguard",
          "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
          "completed": false
        }, {
          "id": 7,
          "project_name": "Domainer",
          "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          "completed": false
        }, {
          "id": 8,
          "project_name": "Redhold",
          "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          "completed": false
        }, {
          "id": 9,
          "project_name": "Matsoft",
          "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
          "completed": false
        }, {
          "id": 10,
          "project_name": "Sonsing",
          "description": "Morbi non quam nec dui luctus rutrum.",
          "completed": false
        }]
      );
    });
};
