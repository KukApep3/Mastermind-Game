var clicked = false;
var min = 0;
var sec = 0;

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
}


function stopClock() {
    window.clearInterval(clock);
    document.getElementById('timer').innerHTML= checkTime(min) + ":" + checkTime(sec);
    clicked = false;
}

