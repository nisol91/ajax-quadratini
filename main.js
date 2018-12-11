//----------------------------------------------
//CHIAMATA AJAX ALL API


//modo I : togliendo async(sconsigliato)

function random_number() {
  var cpu_n
  $.ajax({
    url: 'https://www.boolean.careers/api/random/int',
    async: false,
    type: 'GET',
    success: function(data) {
      console.log("success");
      cpu_n = data.response;
    },
    error: function() {
      console.log("error");
    }
  });
  return cpu_n
}

//modo II callback function
//
// function random_number(cpu_n) {
//   var cpu_n
//   $.ajax({
//     url: 'https://www.boolean.careers/api/random/int',
//     type: 'GET',
//     success: function (data) {
//       console.log("success");
//       cpu_n = data.response;
//       return cpu_n
//     },
//     error: function() {
//       console.log("error");
//     }
//   });
// }





//---------------------------
//CREAZIONE GRIGLIA nxn


var righe = parseInt(prompt('Quante righe?'))
var colonne = parseInt(prompt('Quante colonne?'))
var clone = $('.templates .elem').clone();
var numbers = []

function grid_maker(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      var copy = $(clone).clone();
      $('.griglia').append(copy)
      var number = random_number();
      $(copy).find('h1').text(number)
      console.log(number);
      if (number <= 5) {
        $(copy).css('background', 'yellow');
      } else if (number > 5) {
        $(copy).css('background', 'green');
      }
    }
  }
  $('.elem').width(370/x)
  $('.elem').height(370/y)
}


var tabella = grid_maker(righe, colonne)
