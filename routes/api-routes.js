var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/enemies", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Enemies.findAll({}).then(function(result){
      res.json(result);
    });   
  });

  // Get route for returning posts of a specific difficulty
  app.get("/api/enemies/difficulty/:difficulty", function(req, res) {
    // Add sequelize code to find all posts where the difficulty is equal to req.params.difficulty,
    // return the result to the user with res.json
    db.Enemies.findAll({
      where: {
        difficulty: req.params.difficulty
      }
    }).then(function(result){
      res.json(result)
    });

  });

  // Get route for retrieving a single post
  app.get("/api/enemies/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Enemies.findById(req.params.id).then(function(result){
      res.json(result)
    });

  });

  app.get("/api/enemies/:name", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Enemies.findById(req.params.name).then(function(result){
      res.json(result)
    });

  });

  app.get("/api/enemies/:origin", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Enemies.findById(req.params.origin).then(function(result){
      res.json(result)
    });

  });

  // POST route for saving a new post
  app.post("/api/enemies", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Enemies.create({
      name: req.body.name,
      origin: req.body.origin,
      strategy: req.body.strategy,
      difficulty: req.body.difficulty
    }).then(function(result){
      res.json(result)
    });
  });
};