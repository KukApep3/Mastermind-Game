function dropdownFunction(){
    var x = document.getElementById("drops");
    if (x.className.indexOf("w3-show") == -1){
        x.className += " w3-show";
      }
    else{
        x.className = x.className.replace(" w3-show", "");
      }
  }

function dropdown() {
  var x = document.getElementById("drop_content");
  if (x.className.indexOf("w3-show") == -1){
      x.className += " w3-show";
    }
  else{
      x.className = x.className.replace(" w3-show", "");
    }
}

function informationOpen() {
    document.getElementById("main").style.marginRight = "30%";
    document.getElementById("informations").style.width = "30%";
    document.getElementById("informations").style.display = "block";
}

function informationClose() {
    document.getElementById("main").style.marginRight = "0%";
    document.getElementById("informations").style.display = "none";
}
