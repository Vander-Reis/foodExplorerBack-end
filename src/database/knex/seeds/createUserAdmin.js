const { hash } = require("bcryptjs");

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
      {
        name: 'admin',
        email: 'admin@email.com',
        password: await hash('102938', 8),
        is_admin: true,
      },
    ]);
  };