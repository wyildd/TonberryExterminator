$(document).ready(function() {
  var url = window.location.search;
  var postId;

  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  var nameInput = $("#name");
  var originInput = $("#origin");
  var strategyInput = $("#strategy");
  var addForm = $("#add");
  var postDifficultySelect = $("#difficulty");
  postDifficultySelect.val("Adds");
  $(addForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    
    if (!nameInput.val().trim() || !strategyInput.val().trim() || !originInput.val().trim()) {
      return;
    }
    var newEnemies = {
      name: nameInput.val().trim(),
      origin: originInput.val().trim(),
      strategy: strategyInput.val().trim(),
      difficulty: postDifficultySelect.val()
    };
    submitEnemies(newEnemies);
    console.log(newEnemies)


  function submitEnemies(Enemies) {
    $.post("/api/enemies/", Enemies, function() {
      window.location.href = "/list";
    });
  }

  
  function getPostData(id) {
    $.get("/api/enemies/" + id, function(data) {
      if (data) {
       
        originInput.val(data.origin);
        strategyInput.val(data.strategy);
        postDifficultySelect.val(data.difficulty);
      }
    });
  }


