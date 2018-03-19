const config = require('../config');

const express = require('express');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const passport = require('passport');
const {
    Strategy,
} = require('passport-local');

const init = (app, data) => {
    passport.use(new Strategy(async (username, password, done) => {
        const user = await data.users.findByUsername(username);

        if (!user || user.password !== password) {
            return done(null, false, {
                message: 'Incorrect username or password.',
            });
        }
        // User with such username and password exists
        return done(null, user);
    }));

    // User to string
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    // string to User
    passport.deserializeUser(async (username, done) => {
        const user = await data.users.findByUsername(username);

        if (!user) {
            return done(new Error('invalid used'));
        }

        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: config.secret,
        store: new MongoStore({
            url: config.mongoDbConnectionString,
        }),
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};