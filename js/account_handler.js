var avatar;

function register(username, data) {
  localStorage.setItem(username, data);
}

function check_login() {
  if (localStorage.getItem("current_user") && localStorage.getItem("current_user") != undefined) {
    $("#logged").show();
    $("#unlogged").hide();
    if (!localStorage.getItem("current_avatar") || localStorage.getItem("current_avatar") == undefined || localStorage.getItem("current_avatar") == null) {
        localStorage.setItem("current_avatar", "css/images/default_avatar.png");
    }

  } else {
    $("#unlogged").show();
    $("#logged").hide();
  }
}

function logout() {
  localStorage.removeItem('current_user');
  localStorage.removeItem('current_avatar');
}

function check_username_taken(input) {
  var temp;
  var upper_temp;
  for (var i = 0; i < localStorage.length; i++) {
    temp = localStorage.key(i);
    upper_temp = temp.toUpperCase();
    if (input.localeCompare(upper_temp) == 0) {
      return true;
    } else {
      return false;
    }
  }
}

function check_email_taken(input1) {
  var temp2;
  var upper_temp2;

  for (var i = 0; i < localStorage.length; i++) {
    temp2 = localStorage.key(i);
    temp3 = localStorage.getItem(temp);
    var values = temp3.split(",$,");
    upper_temp2 = values[2].toUpperCase();
    if (input1.localeCompare(upper_temp2) == 0) {
      return true;
    } else {
      return false;
    }
  }
}
function validate_registry() {
  var username = document.forms["register"]["username"].value;
  var email = document.forms["register"]["email"].value;
  var password = document.forms["register"]["password"].value;
  var cpassword = document.forms["register"]["confirm_password"].value;

  var data = password + ",$," + avatar + ",$," + email;

  var upper_username = username.toUpperCase();
  var upper_email = email.toUpperCase();

  var nameRegex = /^[a-zA-Z\-]+$/;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  if (check_username_taken(upper_username)) {
    document.getElementById('username_taken').style.display = "inline";
    return false;
  } /*else if (check_email_taken(upper_email)) {
    document.getElementById('email_taken').style.display = "inline";
    return false;
  }*/ else if (username.match(nameRegex) == null || username.length > 16) {
    document.getElementById('username_error').style.display = "inline";
    return false;
  } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById('email_error').style.display = "inline";
    return false;
  } else if (password.length < 6) {
    document.getElementById('password_error').style.display = "inline";
    return false;
  } else if (password != cpassword) {
    document.getElementById('cpassword_error').style.display = "inline";
    return false;
  } else {
    register(username, data);
    return true;
  }
}
function validate_login() {
  var lusername = document.forms["login"]["lusername"].value;
  var lpassword = document.forms["login"]["lpassword"].value;
  var key = localStorage.getItem(lusername);

  if (!key || key == null) {
    document.getElementById('login_error').style.display = "inline";
    return false;
  }

  var value = key.split(",$,");

  if (value[0] != lpassword) {
    document.getElementById('login_error').style.display = "inline";
    return false;
  } else {
    localStorage.setItem("current_user", lusername);
    localStorage.setItem("current_avatar", value[1]);
    return true;
  }
}

function previewFile() {
  var preview = document.getElementById('avatar'); //selects the query named img
  var file = document.getElementById('img_select').files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
    avatar = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "";
  }
}
