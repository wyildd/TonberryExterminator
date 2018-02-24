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


};