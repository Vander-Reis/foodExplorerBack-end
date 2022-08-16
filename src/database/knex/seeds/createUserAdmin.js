const { hash } = require("bcryptjs");

exports.seed = async function (knex) {
    // Delete se o user já existir
    await knex('users').del();
    await knex('users').insert([
      {
        name: 'admin',
        email: 'admin@teste.com',
        password: await hash('123456789', 8),
        is_admin: true,
      },
    ]);
  };