$(document).ready(function() {

  var url = window.location.search;


  var hunt = $('#hunt');
  var target = $('#target');
  var challenge = $('#challenge');
  var game = $('#game');

  $(hunt).on("search", function handlesearch(event) {
      event.preventDefault();
      console.log("button")
    if (!target.val() || !game.val() || !challenge.val()) {
      return;
    }

      console.log(target.val())
      console.log(game.val())
      console.log(challenge.val())

    console.log(Enemies)
  // We return the Enemies back to the user in the form of a string
    
    }) 

function searchEnemies(Enemies) {
    $.post("/api/enemies/", Enemies, function() {
      window.location.href = "/result";
    });
  }
})