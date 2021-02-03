const knex = require("../database/index");

module.exports = {
  async index(request, response) {
    const results = await knex("user");
    return response.json(results);
  },
  async create(request, response, next) {
    try {
      const { name } = request.body;
      await knex("user").insert({ name });
      return response
        .status(201)
        .json({ message: `Usuário ${name} Cadastrado` });
    } catch (error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { name } = request.body;
      const { id } = request.params;

      await knex("user").update({ name }).where({ id });

      return response.json({ message: `Usuário ${name} Alterado` });
      
    } catch (error) {
      next(error);
    }
  },
  async delete(request, response) {},
};
