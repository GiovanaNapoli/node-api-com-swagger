const knex = require("../database/index");

module.exports = {
  index(request, response) {
    knex("user").then((results) => response.json(results));
  },
};
