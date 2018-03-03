$(document).ready(function() {

  var url = window.location.search;


  var hunt = $('#hunt');
  var target = $('#target');
  var challenge = $('#challenge');
  var game = $('#game');

  $("#search").on("click", function handlesearch(event) {
      event.preventDefault();
      console.log("button")
    if (!target.val().trim() || !game.val().trim() || !challenge.val()) {
      return;
    }
    var Enemies = {
      name: target.val(),
      origin: game.val(),
      difficulty: challenge.val()
    };
    console.log("Enemies")
  // We return the Enemies back to the user in the form of a string
    
    }) 

function searchEnemies(Enemies) {
    $.post("/api/enemies/", Enemies, function() {
      window.location.href = "/result";
    });
  }
})