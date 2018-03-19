module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PowerTypes', [{
      name: 'Mystic',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Chemical',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Technology',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Intellect',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Celestial',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
