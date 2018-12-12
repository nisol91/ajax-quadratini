//----------------------------------------------
//CHIAMATA AJAX ALL API (vedi anche il LIVECODING)

$(document).ready(function() {

//modo I METTO TUTTA LA GENERAZIONE DEI NUMERI
//DENTRO AL SUCCESS!

//devo sempre mettere tutto dentro a success perche
//cosi sono sicuro che tutte le operazioni me le fara
//solo una volta che la chiamata al server e' avvenuta.
//purtroppo basta un ritardo anche di solo 5ms che se
//il resto del codice js e' indipendente dalla chiamata,
//js non legge la chiamata perche e' in ritardo
//e quindi mi da undefined.

  //prima genero la mia griglia
  var righe = parseInt(prompt('Quante righe?'))
  var colonne = parseInt(prompt('Quante colonne?'))
  var clone = $('.templates .elem').clone();
  var numbers = []

  function grid_maker(x, y) {
    for (var i = 0; i < x; i++) {
      for (var j = 0; j < y; j++) {
        var copy = $(clone).clone();
        $('.griglia').append(copy)

      }
    }
    $('.elem').width(370/x)
    $('.elem').height(370/y)
  }
  var tabella = grid_maker(righe, colonne)

  //poi al click genero i numeri con la chiamata ajax
  //sempre meglio usare il document on quando genero elementi appendendo
  $(document).on('click', '.elem', function() {
    // alert('ok')
    var cpu_n
    var mioElem = $(this)
    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      type: 'GET',
      success: function(data) {
        console.log("success");
        cpu_n = data.response;
        console.log(cpu_n);
        mioElem.find('h1').text(cpu_n)
        if (cpu_n <= 5) {
          mioElem.css('background', 'yellow');
        } else if (cpu_n > 5) {
          mioElem.css('background', 'green');
        }
      },
      error: function() {
        console.log("error");
      }
    });
  });

  //modo II : togliendo async(sconsigliato)

  // function random_number() {
  //   var cpu_n
  //   $.ajax({
  //     url: 'https://www.boolean.careers/api/random/int',
  //     async: false,
  //     type: 'GET',
  //     success: function(data) {
  //       console.log("success");
  //       cpu_n = data.response;
  //     },
  //     error: function() {
  //       console.log("error");
  //     }
  //   });
  //   return cpu_n
  // }

});
