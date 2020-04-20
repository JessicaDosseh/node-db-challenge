
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(
        [{
          "id": 1,
          "resource_name": "Mat Lam Tam",
          "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
        }, {
          "id": 2,
          "resource_name": "Wrapsafe",
          "description": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum."
        }, {
          "id": 3,
          "resource_name": "Trippledex",
          "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
          "id": 4,
          "resource_name": "Transcof",
          "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
          "id": 5,
          "resource_name": "Voyatouch",
          "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
        }, {
          "id": 6,
          "resource_name": "Bitwolf",
          "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
        }, {
          "id": 7,
          "resource_name": "Treeflex",
          "description": "Suspendisse potenti."
        }, {
          "id": 8,
          "resource_name": "Viva",
          "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti."
        }, {
          "id": 9,
          "resource_name": "Andalax",
          "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi."
        }, {
          "id": 10,
          "resource_name": "Tin",
          "description": "Duis consequat dui nec nisi volutpat eleifend."
        }]
      );
    });
};
