const Data = require('./generic.data');
const {
    User,
} = require('../../db/models');
class UsersData extends Data {
    constructor() {
        super(User);
    }

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                username,
            },
        });
    }
}

module.exports = UsersData;
