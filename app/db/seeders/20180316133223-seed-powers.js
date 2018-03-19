module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Powers', [{
      name: 'Magic',
      PowerTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Super-strength',
      PowerTypeId: 2,
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
