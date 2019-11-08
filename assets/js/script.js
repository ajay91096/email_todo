
//Check off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on('click', "span", function (e) {
  e.stopPropagation();
  $(this).closest("li").fadeOut(500,function() {
   $(this).remove();
  });
});

//Clear All
$(".removeall").on('click', function (e) {
    $("li").fadeOut(500, function() {
      $(this).remove();
    });
});

//Add new todos
$("input[type='email']").keypress(function(e) {
  if(e.which === 13) {
    //grab text
    var todoText = $(this).val();
    //append todotext to ul
    if( $(this).val() !== "") {
    $("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + todoText + "</li>");
      }
    //clear text
    $(this).val("");
  }
});

$(".add").click(function() {
  $("input[type='text']").fadeToggle(200);
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

$("#email").on("keyup", validate);