//Desafio 2.0

//CAPTURANDO O ELEMENTO HTML USANDO UM ATRIBUTO AO INVÉS DA CLASSE PARA PRATICAR O USO DO DATA ATTRIBUTE:
var viewSource = document.querySelector("[teste]");

//ADICIONANDO UM ESCUTADOR NO ELEMENTO DO BOTÃO VIEW SOURCE, QUE AO SER CLICADO IRÁ COLOCAR A VARIÁVEL E O EVENTO NO DATALAYER:
logo.elemento.addEventListener('click', function(){

     window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
          'event': 'seuEvento',
          'eventCategory': 'suaCategoria',
          'eventAction': 'suaAção',
          'eventLabel': 'seuLabel'
  });

})
