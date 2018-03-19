module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alignments', [{
      name: 'Good',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Evil',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Neutral',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alignments', [{
      name: 'Good',
    }, {
      name: 'Evil',
    }, {
      name: 'Neutral',
    }]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
