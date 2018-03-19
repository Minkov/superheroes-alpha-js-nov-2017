'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {});

  User.associate = (models) => {
    const {
      Superhero,
    } = models;

    User.belongsToMany(Superhero, {
      through: 'users_superheroes',
    });

    Superhero.belongsToMany(User, {
      through: 'users_superheroes',
    });
  };

  return User;
};
