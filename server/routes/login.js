const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const dotenv=require('dotenv')
dotenv.config({path:'../config.env'})
const app = express.Router();

// Configure cookie-parser and cookie-session middleware
app.use(cookieParser());
app.use(
  cookieSession({
    name: 'session',
    keys: ['your-secret-key'], // Replace with your own secret key(s)
    maxAge: 24 * 60 * 60 * 1000, // Session lasts for 24 hours
  })
);

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/google/callback",
        passReqToCallback   : true
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user information in session or database as needed
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Initiate Google OAuth authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/',
  })
);

// Protected route for authenticated users
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}!`);
  } else {
    res.redirect('/');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports=app;