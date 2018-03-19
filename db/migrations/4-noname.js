'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users_superheroes", deps: [Users, Superheros]
 *
 **/

var info = {
    "revision": 4,
    "name": "noname",
    "created": "2018-03-19T14:34:28.609Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users_superheroes",
        {
            "createdAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            },
            "UserId": {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Users",
                    "key": "id"
                },
                "primaryKey": true
            },
            "SuperheroId": {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Superheros",
                    "key": "id"
                },
                "primaryKey": true
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
