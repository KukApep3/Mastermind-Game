//"use strict";

var clicked = false;
var min = 0;
var sec = 0;
//var min = document.getElementById('timer').split(':')[0];
//var sec = document.getElementById('timer').split(':')[1];

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startClock() {
    if (clicked === false) {
        clock = setInterval("stopWatch()", 1000);
        clicked = true;
    }
    else if (clicked === true) {
    }
}

function stopWatch() {
    sec++;
    if (sec < 60){
        document.getElementById('timer').innerHTML = checkTime(min) + ":" + checkTime(sec);
    }
    else {
        min ++;
        sec = 0;
        document.getElementById('timer').innerHTML = checkTime(min) + ":" + checkTime(sec);
    }
    //sec ++;
}


function stopClock() {
    window.clearInterval(clock);
    document.getElementById('timer').innerHTML= checkTime(min) + ":" + checkTime(sec);
    clicked = false;
}

/*function repeatClock() {
  var confirmation = prompt("Repeat game? (y/n) \n If 'y', you'll lose all the score gain so far.");
  if (confirmation === 'y') {
    document.getElementById('timer').innerHTML = "00:00";
    clicked = false;
  }
}*/
