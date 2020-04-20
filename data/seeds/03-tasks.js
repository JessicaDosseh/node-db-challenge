
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(
        [{
          "id": 1,
          "project_id": 1,
          "description": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
          "notes": "In hac habitasse platea dictumst.",
          "completed": false
        }, {
          "id": 2,
          "project_id": 4,
          "description": "Nunc nisl.",
          "notes": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
          "completed": false
        }, {
          "id": 3,
          "project_id": 4,
          "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
          "notes": "Cras non velit nec nisi vulputate nonummy.",
          "completed": false
        }, {
          "id": 4,
          "project_id": 5,
          "description": "Nulla facilisi.",
          "notes": "Suspendisse potenti. Nullam porttitor lacus at turpis.",
          "completed": false
        }, {
          "id": 5,
          "project_id": 2,
          "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
          "notes": "Nulla suscipit ligula in lacus.",
          "completed": false
        }, {
          "id": 6,
          "project_id": 5,
          "description": "Duis bibendum.",
          "notes": "Morbi vel lectus in quam fringilla rhoncus.",
          "completed": false
        }, {
          "id": 7,
          "project_id": 1,
          "description": "Mauris sit amet eros.",
          "notes": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
          "completed": false
        }, {
          "id": 8,
          "project_id": 4,
          "description": "Duis ac nibh.",
          "notes": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
          "completed": false
        }, {
          "id": 9,
          "project_id": 1,
          "description": "Duis at velit eu est congue elementum.",
          "notes": "Donec semper sapien a libero. Nam dui.",
          "completed": false
        }, {
          "id": 10,
          "project_id": 3,
          "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          "notes": "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
          "completed": false
        }]
      );
    });
};
