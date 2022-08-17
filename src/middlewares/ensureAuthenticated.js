const { verify } = require("jsonwebtoken");
const AppError = require("../utils/ErroApp");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Jwt Token não informado", 401);
    };

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, authConfig.jwt);

        request.user = {
            id: Number(user_id)
        };

        return next();
    } catch (error) {
        throw new AppError("Jwt Token inválido", 401);
    }
}

module.exports = ensureAuthenticated;