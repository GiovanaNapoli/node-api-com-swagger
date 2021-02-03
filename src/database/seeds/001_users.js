
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Giovana'},
        {name: 'Jhonatas'},
        {name: 'Rafael'},
        {name: 'Yficklis'},
      ]);
    });
};
