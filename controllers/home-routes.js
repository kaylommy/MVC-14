const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const { Sequelize } = require('sequelize');
const withAuth = require("../utils/auth");

//homepage
router.get('/', (req, res) => {
    res.render('homepage')
});

//login
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login")
  });

  router.get('/register', (req, res) => {
    res.render('register');
  });

// posts

// post comments