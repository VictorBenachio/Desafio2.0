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

var phone = document.querySelector("")

//phone
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event' : 'eventoTeste',
      'eventCategory' : 'site-android:geral',
      'eventAction' : 'clique:header:menu',
      'eventLabel' : 'phone'

    })