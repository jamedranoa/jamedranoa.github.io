$(document).ready(function () {

  $(".slides-roof").backstretch([
     "images/roof1.png",
     "images/roof2.png",
     "images/roof3.png",
     "images/roof4.png"
    ],{duration:3000,fade:750});

  $(".slides-asteroids").backstretch([
      "images/asteroids1.png",
      "images/asteroids3.png",
      "images/asteroids4.png"
    ],{duration:3000,fade:750});
    
  $(".slides-cars").backstretch([
      "images/cars1.png"
    ],{duration:3000,fade:750});
    
  $(".slides-sudoku").backstretch([
      "images/sudoku.png"
    ],{duration:3000,fade:750});

  $(".slides-checkers").backstretch([
      "images/checkers1.png",
      "images/checkers3.png",
      "images/checkers4.png",
      "images/checkers5.png"
    ],{duration:3000,fade:750});

    $(".for-home").on("click", function(event){
      $(".for-show").addClass("hidden");
      $(".selectable").removeClass("in-action")
      $("#home").removeClass("hidden")
    })

  $("#for-resume").on("click", function (event) {
    $(".for-show").addClass("hidden");
    $(".selectable").removeClass("in-action")
    $("#for-resume").addClass("in-action")
    $("#resume").removeClass("hidden");
  });

  $("#for-projects").on("click", function (event) {
    $("#for-projects").toggleClass("in-action")
    $(".projects").toggleClass("hidden");
    $(".side-bar").animate({scrollTop: 500},1000)
  });

  $("#for-roof").on("click", function (event) {
    $(".for-show").addClass("hidden");
    $(".selectable").removeClass("in-action")
    $("#for-roof").addClass("in-action")
    $("#roof").removeClass("hidden");
  });

  $("#for-checkers").on("click", function (event) {
    $(".for-show").addClass("hidden")
    $(".selectable").removeClass("in-action")
    $("#for-checkers").addClass("in-action")
    $("#checkers").removeClass("hidden");
  });

  $("#for-asteroids").on("click", function (event) {
    $(".for-show").addClass("hidden")
    $(".selectable").removeClass("in-action")
    $("#for-asteroids").addClass("in-action")
    $("#asteroids").removeClass("hidden");
  });
  
  $("#for-cars").on("click", function (event) {
    $(".for-show").addClass("hidden")
    $(".selectable").removeClass("in-action")
    $("#for-cars").addClass("in-action")
    $("#cars").removeClass("hidden");
  });
  
  $("#for-sudoku").on("click", function (event) {
    $(".for-show").addClass("hidden")
    $(".selectable").removeClass("in-action")
    $("#for-sudoku").addClass("in-action")
    $("#sudoku").removeClass("hidden");
  });
  
})