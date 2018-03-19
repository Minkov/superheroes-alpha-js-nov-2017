const {
    Alignment,
    Power,
    Faction,
} = require('../db/models');

const Data = require('./generic.data');
const SuperheroesData = require('./superheroes.data');
const UsersData = require('./users.data');

module.exports = {
    superheroes: new SuperheroesData(),
    alignments: new Data(Alignment),
    powers: new Data(Power),
    factions: new Data(Faction),
    users: new UsersData(),
};
