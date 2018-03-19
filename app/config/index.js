const port = process.env.PORT || 3001;
const secret = 'Gosho e pich';
const mongoDbConnectionString = process.env.NODE_ENV === 'production' ?
    'mongodb://admin:123456qw@ds119049.mlab.com:19049/superheroes-alpha-js-nov-2017' :
    'mongodb://localhost/superheroes-sessions';

module.exports = {
    port,
    secret,
    mongoDbConnectionString,
};