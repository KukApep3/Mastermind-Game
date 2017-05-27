//preenche highscores
function default_scores() {
  if (!localStorage.getItem('difficult0_highscore') || localStorage.getItem('difficult0_highscore') == undefined) {
    localStorage.setItem('difficult0_highscore', "Test_user,99995,99:9,9");
  }
  if (!localStorage.getItem('difficult1_highscore') || localStorage.getItem('difficult1_highscore') == undefined) {
    localStorage.setItem('difficult1_highscore', "Test_user1,99996,99:99,9");
  }
  if (!localStorage.getItem('difficult2_highscore') || localStorage.getItem('difficult2_highscore') == undefined) {
    localStorage.setItem('difficult2_highscore', "Test_user2,99997,99:99,9");
  }
  if (!localStorage.getItem('difficult3_highscore') || localStorage.getItem('difficult3_highscore') == undefined) {
    localStorage.setItem('difficult3_highscore', "Test_user3,99998,99:99,9");
  }
  if (!localStorage.getItem('difficult4_highscore') || localStorage.getItem('difficult4_highscore') == undefined) {
    localStorage.setItem('difficult4_highscore', "Test_user4,99999,99:99,9");
  }
  if (!localStorage.getItem('medium0_highscore') || localStorage.getItem('medium0_highscore') == undefined) {
    localStorage.setItem('medium0_highscore', "Test_user,99995,99:9,9");
  }
  if (!localStorage.getItem('medium1_highscore') || localStorage.getItem('medium1_highscore') == undefined) {
    localStorage.setItem('medium1_highscore', "Test_user1,99996,99:99,9");
  }
  if (!localStorage.getItem('medium2_highscore') || localStorage.getItem('medium2_highscore') == undefined) {
    localStorage.setItem('medium2_highscore', "Test_user2,99997,99:99,9");
  }
  if (!localStorage.getItem('medium3_highscore') || localStorage.getItem('medium3_highscore') == undefined) {
    localStorage.setItem('medium3_highscore', "Test_user3,99998,99:99,9");
  }
  if (!localStorage.getItem('medium4_highscore') || localStorage.getItem('medium4_highscore') == undefined) {
    localStorage.setItem('medium4_highscore', "Test_user4,99999,99:99,9");
  }
  if (!localStorage.getItem('easy0_highscore') || localStorage.getItem('easy0_highscore') == undefined) {
    localStorage.setItem('easy0_highscore', "Test_user,99995,99:9,9");
  }
  if (!localStorage.getItem('easy1_highscore') || localStorage.getItem('easy1_highscore') == undefined) {
    localStorage.setItem('easy1_highscore', "Test_user1,99996,99:99,9");
  }
  if (!localStorage.getItem('easy2_highscore') || localStorage.getItem('easy2_highscore') == undefined) {
    localStorage.setItem('easy2_highscore', "Test_user2,99997,99:99,9");
  }
  if (!localStorage.getItem('easy3_highscore') || localStorage.getItem('easy3_highscore') == undefined) {
    localStorage.setItem('easy3_highscore', "Test_user3,99998,99:99,9");
  }
  if (!localStorage.getItem('easy4_highscore') || localStorage.getItem('easy4_highscore') == undefined) {
    localStorage.setItem('easy4_highscore', "Test_user4,99999,99:99,9");
  }
}

//recebe dados do jogo actual e compara com o que esta em localStorage
//se for melhor do que se encontra guardado, substitui e empurra restantes resultados para baixo
function compareScore(score, data, mode) {
  if (mode == 'difficult') {
    for (var i = 0; i < 5; i++) {
      var item = localStorage.getItem('difficult' + i + '_highscore');
      var scores = item.split(',');
      if (score < scores[1]) {
        var temp = localStorage.getItem('difficult' + i + '_highscore');
        localStorage.setItem('difficult' + i + '_highscore', data);
        var temp2 = temp.split(",");
        score = temp2[1];
        data = temp;
      }
    }
  }
  if (mode == 'medium') {
    for (var i = 0; i < 5; i++) {
      var scores = localStorage.getItem('medium' + i + '_highscore').split(',');
      if (score < scores[1]) {
        var temp = localStorage.getItem('medium' + i + '_highscore');
        localStorage.setItem('medium' + i + '_highscore', data);
        var temp2 = temp.split(",");
        score = temp2[1];
        data = temp;
      }
    }
  }
  if (mode == 'easy') {
    for (var i = 0; i < 5; i++) {
      var scores = localStorage.getItem('easy' + i + '_highscore').split(',');
      if (score < scores[1]) {
        var temp = localStorage.getItem('easy' + i + '_highscore');
        localStorage.setItem('easy' + i + '_highscore', data);
        var temp2 = temp.split(",");
        score = temp2[1];
        data = temp;
      }
    }
  }
}

$(function() {

  default_scores();

  //Criar botao com id cheat para mostrar combinacao
  $("#cheat").click(function() {
    alert(JSON.stringify(pattern));
  });

  var mode = location.search.split('mode=')[1];

  var colorsHex = {red: '#f44336', orange: '#ff9800', yellow: '#ffeb3b', green: '#4CAF50', blue: '#00bcd4', purple: '#9c27b0', pink: '#e91e63'};
  var colornames = [];
  var pattern = [];
  var round = 0;
  var picked_color = 'red';

  if (mode == 'easy') {
    colornames = ['red', 'blue', 'yellow', 'green'];

    for (var i = 0; i < 4; i++) {
      var rand = Math.floor(Math.random() * 4)
      pattern[i] = colornames[rand];
      $(".color_picker [value=orange]").hide();
      $(".color_picker [value=pink]").hide();
      $(".color_picker [value=purple]").hide();
    }
  }

  if (mode == 'medium') {
    colornames = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    for (var i = 0; i < 4; i++) {
      var rand = Math.floor(Math.random() * 6)
      pattern[i] = colornames[rand];
      $(".color_picker [value=pink]").hide();
    }
  }

  if (mode == 'hard') {
    colornames = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

    for (var i = 0; i < 4; i++) {
      var rand = Math.floor(Math.random() * 7)
      pattern[i] = colornames[rand];
    }
  }

  $(".color_picker tr").click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    var value = $(this).find('td:first').attr("value");
    picked_color = value;
  });

  $('.go').click(function() {
    var guess_row = $('table.game tr:last td.guess');
    var full = 0;
    guess_row.each(function() {
      if ($(this).css('background-color') == 'transparent') {
        full = 1;
      }
    });
    if (full == 1) {
      alert("Please fill the guess row");
      return false;
    } else {
      $(this).text('Enter');
      startClock();
    }
  });

  $('table.game').delegate('tr:last td.guess', 'click', function() {
    $(this).attr('color', picked_color);
    $(this).css('background-color', colorsHex[picked_color]);
  });

  $('table.game').delegate('tr:last button.go', 'click', function() {
    var temp_pattern = pattern.slice(0);
    var row = $(this).closest('tr');
    var answers = row.children('td.answer');
    var guesses = row.children('td.guess');
    var clone = row.clone();
    round++;

    guesses.each(function(index, value) {
      if (temp_pattern[index] == $(value).attr('color')) {
        answers.first().css('background-color', 'black');
        answers = answers.slice(1);
        temp_pattern[index] = null;
      }
    });

    var missed = answers.length;
    guesses.each(function(index, value) {
      var color = $(value).attr('color');
      for (var i = 0; i < temp_pattern.length; i++) {
        if (temp_pattern[i] == color) {
          answers.first().css('background-color', 'white');
          answers = answers.slice(1);
          temp_pattern[i] = null;
          break;
        }
      }
    });

    if (missed == 0) {
      var time = $('#timer').html();
      $(this).attr('disabled', 'disabled');
      $(this).closest('table').append('<tr><td colspan="9"><center><h3>You win! With a time of: ' + time + " Using: " + round + ' attempts</h3></center></td></tr>');
      stopClock();
      var a = time.split(':');
      var score = (a[0] * 60 + a[1] + round);
      var data = localStorage.getItem('current_user') + ',' + score + ',' + time + ',' + round;
      compareScore(score, data, mode);

      $('.go').text('Retry');
      $('.go').click(function() {
        window.location.reload();
      });
    } else {
      $(this).hide();
      $(this).closest('table').append(clone);
      if (round == 8) {
        $('#attempts').html('current attempt: ' + (round + 1));
        $('#attempts').addClass('last_attempt');
      } else {
        $('#attempts').html('current attempt: ' + (round + 1));
      }
    }

    if (round == 9) {
      $(this).closest('table').append('<tr><td colspan="9"><center><h3>You lose! The correct guess was: ' + JSON.stringify(pattern) + '</h3></center></td></tr>');
      stopClock();

      $('.go').text('Retry');
      $('.go').click(function() {
        window.location.reload();
      });
    }

  });
});
