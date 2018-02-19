// Check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to delte todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if(event.which === 13){
    //gets new text to create todo
    var todotext = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
  }
});

//Toggle input
$('.fa-plus').click(function () {
  $("input[type='text']").fadeToggle();
})
