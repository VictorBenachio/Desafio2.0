//logo

var logo = document.querySelector(".android-logo-image");

logo.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
          'event': 'eventoTeste',
          'eventCategory': 'site-android:geral',
          'eventAction': 'clique:header',
          'eventLabel': 'logo'
  });

});

//phone

var phone = document.querySelector("#botao-phone");

phone.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:header:menu',
       'eventLabel' : 'phone'

  });

});

//tablets

var tablets = document.querySelector("#tablets-botao");

tablets.addEventListener("click",function(){
 
  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction': 'clique:header:menu',
        'eventLabel' : 'tablets'
  
  });

});

//wear
      
var wear = document.querySelector("#wear");

wear.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'wear' 
  
  });

});

//tv

var tv = document.querySelector("#tv");

tv.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'tv' 
   
  });

});

//auto

var auto = document.querySelector("#auto");

auto.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'auto'
      
      });

});

//one

var one = document.querySelector("#one");

one.addEventListener("click",function(){

window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      'event' : 'eventoTeste',
      'eventCategory' : 'site-android:geral',
      'eventAction' : 'clique:header:menu',
      'eventLabel' : 'one'
      
    });

});

//play

var play = document.querySelector("#play");

play.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'play'
      
  }); 

});

//botãoDePesquisa

var lupa = document.querySelector("#lupa");

lupa.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header',
        'eventLabel' : 'botão-de-pesquisa' 
      
  });

});

//menuTrêspontinhos 

var pontinhos = document.querySelector("#tres-pontos");

pontinhos.addEventListener("click",function(){
  
  window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header',
        'eventLabel' : 'menu-tres-pontinhos' 
      
      });

});















