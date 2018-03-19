class SuperheroesController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const superheroes = this.data.superheroes.getAll();
        return superheroes;
    }

    async getById(id, user) {
        const superhero = await this.data.superheroes.getById(id);
        superhero.alignment = await superhero.getAlignment();
        superhero.powers = await superhero.getPowers();
        if (user) {
            const userSuperheroes = await user.getSuperheros();
            const superheroInUserIndex =
                userSuperheroes.findIndex((hero) => hero.id === id);
            superhero.isFavorite = superheroInUserIndex >= 0;
        }
        return superhero;
    }

    async create(superheroModel) {
        const powersIds = Array.isArray(superheroModel.powerIdOrName) ?
            superheroModel.powerIdOrName : [superheroModel.powerIdOrName];

        const powers = await Promise.all(
            powersIds.map((id) => {
                return this.data.powers.getById(+id);
            }));

        superheroModel.AlignmentId = +superheroModel.AlignmentId;

        const superhero = await this.data.superheroes.create(superheroModel);
        await superhero.setPowers(powers);
        return superhero;
    }

    async getCreateData() {
        const [alignments, powers] =
        await Promise.all([
            this.data.alignments.getAll(),
            this.data.powers.getAll(),
        ]);

        return {
            alignments,
            powers,
        };
    }
    async updateFavoriteSuperhero(user, superheroId) {
        const userSuperheroes = await user.getSuperheros();
        const superheroInUserIndex =
            userSuperheroes.findIndex(
                (superhero) => superhero.id === superheroId);
        if (superheroInUserIndex >= 0) {
            userSuperheroes.splice(superheroInUserIndex, 1);
        } else {
            const superhero = await this.data.superheroes.getById(superheroId);
            userSuperheroes.push(superhero);
        }

        await user.setSuperheros(userSuperheroes);

        return this.data.superheroes.getById(superheroId);
    }
}

module.exports = SuperheroesController;
