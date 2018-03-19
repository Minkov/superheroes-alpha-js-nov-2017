const {
    Router,
} = require('express');

const SuperheroesController = require('./superheroes.controller');

// dependency injection
// duck typing
const init = (app, data) => {
    const router = new Router();
    const controller = new SuperheroesController(data);

    router
        .get('/', async (req, res) => {
            const superheroes = await controller.getAll();
            const context = {
                superheroes,
            };
            res.send(context);
        })
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const superhero = await controller.getById(+id);

            const context = {
                superhero,
            };

            res.send(context);
        })
        .post('/', async (req, res) => {
            const superheroModel = req.body;

            const superhero = await controller.create(superheroModel);
            res.status(201)
                .send(superhero);
        })
        .put('/:id', async (req, res) => {
            const superheroId = +req.params.id;
            const user = req.user;

            const superhero =
                await controller.updateFavoriteSuperhero(user, superheroId);
            return res.send(superhero);
        });

    // decorator design pattern
    app.use('/api/superheroes', router);
};

module.exports = {
    init,
};
