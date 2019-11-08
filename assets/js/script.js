$(document).ready(function(){  

  let emails = [];

  $('#add').on('click', function() {
    let emailval = $('#email input').val();
    if (validateEmail(emailval)) {
      let email = {};
      let errordiv = $('#email span');
      errordiv.remove("span");

      if(emails.length != 0) {
        email.id = emails[emails.length - 1].id + 1;
      } else { email.id = 1; }

      email.add = $('#email input').val();
      emails.push(email);
      let add_div = "<div><input id=\""+email.id+"\" type=\"checkbox\" name=\"close\"><span class=\"email\">"+email.add+"</span><span id=\""+email.id+"\">X</span></div>";
      $("#addtodo").append(add_div);

    } else {
      $('#email span').remove("span");
      $('#email').append("<span>Please enter valid email</span>");
    }

  });

  $("#addtodo").on('click', 'span', function() {
    let id = $(this).attr('id');
    let remove = emails.filter(item => (item.id == id));
    emails.pop(remove);
    $(this).closest("div").remove();
  });

  $('#disable :checkbox').change(function() {  
      if (this.checked) {
          $("#addtodo div").each(function() {
            if($(this).find("input").is(":checked")) {
              $(this).hide();
            }
          })
      } else {
          $("#addtodo div").each(function() {
             if($(this).find("input").is(":checked")) {
               $(this).show();
             }
          })
      }
  });

  $("#search input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#addtodo .email").filter(function() {
      $(this).closest("div").toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
});