const AppError = require("../utils/ErroApp");

class UserController {

    create( request, response) {

        const { name, email, password } = request.body;

        if(!name) {
            throw new AppError("Favor inserir o seu nome")
        };

        response.status(201).json({
            name,
            email,
            password
        });

    }

}


module.exports = UserController;