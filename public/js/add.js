$(document).ready(function() {
  console.log("does it work?")
  var url = window.location.search;
  var enemiesId;
   

  if (url.indexOf("?enemies_id=") !== -1) {
    enemisdId = url.split("=")[1];
    getEnemieData(enemiesId);
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
    console.log(newEnemies)
    submitEnemies(newEnemies)
  })
  
  function submitEnemies(Enemies) {
    $.post("/api/enemies/", Enemies, function() {
      window.location.href = "/";
    });
  }

  
  function getPostData(id) {
    $.get("/api/enemies/" + id, function(data) {
      if (data) {
       
        nameInput.val(data.name);
        originInput.val(data.origin);
        strategyInput.val(data.strategy);
        postDifficultySelect.val(data.difficulty);
        
      }
    });
  };

  
})

