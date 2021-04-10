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

//createYourAndroidCharacter

var createCharacter = document.querySelector("#clique-create");

createCharacter.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
         'event' : 'eventoTeste',
         'eventCategory' : 'site-android:be-together-not-the-same',
         'eventAction' : 'clique:link',
         'eventLabel' :   'create-your-android-character'
      
        });

});


//botãoSetinhaBaixo

var setaAzul = document.querySelector("#seta-azul");

setaAzul.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
         'event' : 'eventoTeste',
         'eventCategory' : 'site-android:be-together-not-the-same',
         'eventAction' : 'clique:botão',
         'eventLabel' : 'botão-azul-seta-pra-baixo' 
      
        });

});


//androidWear

var androidWear = document.querySelector("#android-wear");

androidWear.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' :'site-android:powering-screens-of-all-sizes',
       'eventAction' : 'clique:botão:imagem',
       'eventLabel' : 'android-wear' 
      
      });

});

//phonesCard

var phonesCard = document.querySelector("#phones-card");

phonesCard.addEventListener("click",function(){

      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
         'event' : 'eventoTeste',
         'eventCategory' : 'site-android:powering-screens-of-all-sizes',
         'eventAction' :'clique:botão:imagem',
         'eventLabel' : 'phones'
      
        });

});


//tabletsCard

var tabletsCard = document.querySelector("#tablets-card");

tabletsCard.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:powering-screens-of-all-sizes',
       'eventAction' : 'clique:botão:imagem',
       'eventLabel' : 'tablets'
      
      });

});


//androidTv

var androidTv = document.querySelector("#android-tv");

androidTv.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:powering-screens-of-all-sizes',
       'eventAction' : 'clique:botão:imagem',
       'eventLabel' : 'android-tv'
      
      });
  
});


//comingSoonAndroidAuto

var androidAuto = document.querySelector("#android-auto");

androidAuto.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:powering-screens-of-all-sizes',
       'eventAction' : 'clique:botão:imagem',
       'eventLabel' : 'android-auto' 
      
      });


});


//seeWhatsNewInThePlayStore

var seePlayStore = document.querySelector("#see-play-store");

seePlayStore.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:the-best-of-google-built-in',
       'eventAction' : 'clique:link',
       'eventLabel' : 'see-whats-new-in-the-play-store' 
      
      });

});


//customiseYourPhone

var customisePhone = document.querySelector("#customise-phone");

customisePhone.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:customised-by-you-for-you',
       'eventAction' : 'clique:link',
       'eventLabel' : 'customise-your-phone'   
      
      });

});


//getGoingOnAndroid

var getGoingAndroid = document.querySelector("#make-switch");

getGoingAndroid.addEventListener("click",function(){

      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:more-from-android',
       'eventAction' : 'clique:card',
       'eventLabel' : 'get-going-on-android' 
      
        });

});

//createYourOwnAndroidCharacter

var androidIfy = document.querySelector("#android-ify");

androidIfy.addEventListener("click",function(){

  window.dataLayer = window.dataLayer || [];
     window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-andoird:more-from-android',
       'eventAction' : 'clique:card',
       'eventLabel' : 'create-your-own-android-character' 
        
     });

});

//getaCleanCustomisableHomeScreen

var donwloadNow = document.querySelector("#download-now");

donwloadNow.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:more-from-android',
       'eventAction' : 'clique:card',
       'eventLabel' : 'get-a-clean-customisable-home-screen' 
      
      });

});


//millionsToChooseFrom

var findApps = document.querySelector("#find-apps");

findApps.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:more-from-android',
       'eventAction' : 'clique:card',
       'eventLabel' : 'millions-to-choose-from' 
      
      });

});


//versions

var versions = document.querySelector("#versions");

versions.addEventListener("click",function(){

    window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:footer:link',
       'eventLabel' : 'versions' 
      
      });


});


//forDevelopers

var forDev = document.querySelector("#for-developers");

forDev.addEventListener("click",function(){

      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:footer:link',
       'eventLabel' : 'for-developers' 
      
        });
      

});


//blog

var blog = document.querySelector("#blog");

blog.addEventListener("click",function(){

      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:footer:link',
       'eventLabel' : 'blog' 
      
        });


});

//privacyPolicy

var privacy = document.querySelector("#privacy-policy");

privacy.addEventListener("click",function(){

      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:footer:link',
       'eventLabel' : 'privacy-policy' 
      
        });


});

//backToTop

var backTop = document.querySelector("#back-top");

backTop.addEventListener("click",function(){

      window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:footer:botao',
       'eventLabel' : 'back-to-top' 
      
      
      });

});


//viewSourcer

var sourcer = document.querySelector("#view-source");

sourcer.addEventListener("click",function(){

     window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
       'event' : 'eventoTeste',
       'eventCategory' : 'site-android:geral',
       'eventAction' : 'clique:botao',
       'eventLabel' : 'view-source' 
      
       });

});













        













        

 






















