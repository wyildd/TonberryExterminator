var path = require("path");

module.exports = function(app) {

  // index to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Route to the add page
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/mission", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mission.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page2.html"));
  });

  app.get("/specific", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page3.html"));
  });

};