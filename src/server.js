require("express-async-errors");
const express = require("express");
const AppError = require("./utils/ErroApp");
const routes = require("./Routes");


const app = express();

app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError ) {
        return response.status(error.statusCode).json({
            status: "error", 
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status : "error",
        message: " internal server error"
    });
});

const port = 5000;

app.listen(port, () =>  {
    console.log(`Servidor rodando na porta ${port}`);
})