const knex = require("../database/knex"); 
const DiskStorage = require('../providers/DiskStorage');

class PlatesController {
    async create(request, response) {
        const { title, description, ingredients, price, type } = request.body;

        const { filename: imgFilename } = request.file;

        const diskStorage = new DiskStorage();

        const filename = await diskStorage.saveFile(imgFilename);

        const plates_id = await knex("plates").insert({
            img: filename,
            title,
            description,
            price,
            type,
        });

        const ingredientsInsert  = ingredients.map(name => ({
            name,
            plates_id
        }));

        await knex('ingredients').insert(ingredientsInsert);

        return response.json();
    }
}

module.exports = PlatesController;