const knex = require("./knexClient");

const getNotes = async (id) => {
  return await knex("notes").select().where({ user_id: id });
};

const getOneNote = async (id) => {
  return await knex("notes")
    .select()
    .where({ id })
    .then((results) => results[0]);
};

const addNote = async (data) => {
  return await knex("notes").select().insert(data).returning("id");
};

const changeNote = async (id, data) => {
  return await knex("notes").select().where({ id }).update(data);
};

const deleteNote = async (id) => {
  return await knex("notes").where({ id }).delete();
};

module.exports = {
  getNotes,
  getOneNote,
  addNote,
  changeNote,
  deleteNote,
};
