$(document).ready(function() {
  function updatePost(enemies) {
    $.ajax({
      method: "get",
      url: "/api/enemies" req.params.id,
      data: enemies
    })
    .then(function() {
      
  }