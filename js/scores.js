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

 $(function(){
   default_scores();

   $('#difficult tr:has(td)').each(function(i){
      var info = localStorage.getItem("difficult"+i+"_highscore");
        var t_info = info.split(",");
     $(this).find('td').each(function(k) {
       $(this).html(t_info[k]);
      });
   });

  $('#medium tr:has(td)').each(function(k) {
     var info2 = localStorage.getItem("medium" + k + "_highscore");
     var t_info2 = info2.split(",");
     $(this).find('td').each(function(j) {
       $(this).html(t_info2[j]);
     });
   });

   $('#easy tr:has(td)').each(function(r) {
      var info3 = localStorage.getItem("easy"+r+"_highscore");
      var t_info3 = info3.split(",");
     $(this).find('td').each (function(t) {
       $(this).html(t_info3[t]);
      });
   });
 });
