'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 *
 **/

const info = {
    'revision': 3,
    'name': 'noname',
    'created': '2018-03-19T11:58:41.742Z',
    'comment': '',
};

const migrationCommands = [{
    fn: 'createTable',
    params: [
        'Users',
        {
            'id': {
                'type': Sequelize.INTEGER,
                'autoIncrement': true,
                'primaryKey': true,
                'allowNull': false,
            },
            'username': {
                'type': Sequelize.STRING,
                'allowNull': false,
                'unique': true,
            },
            'password': {
                'type': Sequelize.STRING,
            },
            'createdAt': {
                'type': Sequelize.DATE,
                'allowNull': false,
            },
            'updatedAt': {
                'type': Sequelize.DATE,
                'allowNull': false,
            },
        },
        {},
    ],
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize) {
        let index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    const command = migrationCommands[index];
                    console.log('[#'+index+'] execute: ' + command.fn);
                    index++;
                    queryInterface[command.fn](...command.params).then(next, reject);
                } else {
resolve();
}
            }
            next();
        });
    },
    info: info,
};
