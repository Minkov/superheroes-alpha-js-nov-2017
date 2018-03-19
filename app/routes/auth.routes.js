const passport = require('passport');

const init = (app, data) => {
    app.get('/login', (req, res) => {
        res.render('auth/login');
    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false,
        }));

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/register', (req, res) => {
        res.render('auth/register');
    });

    app.post('/register', (req, res) => {
        data.users.create(req.body);
        return res.redirect('/login');
    });
};

module.exports = {
    init,
};
