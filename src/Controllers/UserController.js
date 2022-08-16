const { hash } = require("bcryptjs");
const AppError = require("../utils/ErroApp");
const Knex = require("../database/knex");

class UserController {

    async create( request, response) {

        const { name, email, password } = request.body;

        // verificar se o e-mail já existe
        const checkUserExists = await Knex("users").where({ email }).first();

        console.log(checkUserExists)

        if(checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashPassword = await hash(password, 8);

        await Knex("users").insert({ name, email, password: hashPassword});

        return response.status(201).json();

    }

}


module.exports = UserController;