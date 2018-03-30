$(document).ready(function() {
    
  function getEnemies(difficulty) {
    var difficultyString = difficulty || "";
    if (difficultyString) {
      difficultyString = "/difficulty/" + difficultyString;
    }
    $.get("/api/enemies" + difficultyString, function(data) {
      console.log("Enemies", data);
      enemies = data;
      if (!enemies || !enemies.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }
 

  var mobCage = $(".mobcage");
  $(document).on("click", "button.view", handleEnemiesView);
  var enemies;
 
  // Getting the initial list of enemies
  getEnemies();
  // InitializeRows handles appending all of our constructed enemies HTML inside
  // mobCage
  function initializeRows() {
    mobCage.empty();
    var enemiesToAdd = [];
    for (var i = 0; i < enemies.length; i++) {
      enemiesToAdd.push(createNewRow(enemies[i]));
    }
    mobCage.append(enemiesToAdd);
  }

  // This function constructs a enemies's HTML
  function createNewRow(enemies) {
    var newEnemiesPanel = $("<div>");
    newEnemiesPanel.addClass("panel panel-default");
    var newEnemiesPanelHeading = $("<div>");
    newEnemiesPanelHeading.addClass("panel-heading");
    var viewBtn = $("<button>");
    viewBtn.text("VIEW");
    viewBtn.addClass("view buttonn button-default");
    var newEnemiesName = $("<h3>");
    var newEnemiesOrigin = $("<h3>");
    var newEnemiesDifficulty = $("<p>");
    newEnemiesDifficulty.text(enemies.difficulty);
    newEnemiesDifficulty.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var newEnemiesPanelBody = $("<div>");
    newEnemiesPanelBody.addClass("panel-body");
    var newEnemiesBody = $("<p>");
    newEnemiesName.text("Name: " + enemies.name + " | Game of Origin: " + enemies.origin + " | Difficulty: " + enemies.difficulty);
    newEnemiesName.css({
      float: "center",
    });
    newEnemiesPanelHeading.append(newEnemiesName);
    newEnemiesPanelHeading.append(newEnemiesOrigin);
    newEnemiesPanelBody.append(newEnemiesBody);
    newEnemiesPanelHeading.append(viewBtn);
    newEnemiesPanel.append(newEnemiesPanelHeading);
    newEnemiesPanel.append(newEnemiesPanelBody);
    newEnemiesPanel.data("enemies", enemies);
    return newEnemiesPanel;
  }

  function handleEnemiesView() {
    var currentEnemies = $(this)
      .parent()
      .parent()
      .data("enemies")
    window.location.href = "/specific?enemies_id=" + currentEnemies.id
  }
});
