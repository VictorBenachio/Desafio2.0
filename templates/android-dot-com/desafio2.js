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



