// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get route for retrieving a single user
  app.get("/api/posts/:username", function(req, res) {
    db.Login.findOne({
      where: {
        username: req.params.username
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new user
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Login.create({
      usernamen: req.body.username,
      password: req.body.password,
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
