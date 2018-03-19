const express = require('express');

const cookieParser = require('cookie-parser');
const session = require('express-session');

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

    passport.serializeUser((user, done) => {
        console.log(' --- Cookie created ---');
        done(null, user.username);
    });

    passport.deserializeUser(async (username, done) => {
        const user = await data.findByUsername(username);

        if (!user) {
            return done(new Error("invalid used"));
        }

        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: 'Purple Unicorn',
    }));

    app.use(passport.initialize());
    app.use(session());
};

module.exports = {
    init,
};