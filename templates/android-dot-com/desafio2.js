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

})

/*
//phone
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event' : 'eventoTeste',
      'eventCategory' : 'site-android:geral',
      'eventAction' : 'clique:header:menu',
      'eventLabel' : 'phone'

       )}

//tablets
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
    'event' : 'eventoTeste',
    'eventCategory' : 'site-android:geral',
    'eventAction': 'clique:header:menu',
    'eventLabel' : 'tablets'
    
    )}

//wear
 window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
    'event' : 'eventoTeste',
    'eventCategory' : 'site-android:geral',
    'eventAction' : 'clique:header:menu',
    'eventLabel' : 'wear' 
    
    )}

//tv
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
     'event' : 'eventoTeste',
     'eventCategory' : 'site-android:geral',
     'eventAction' : 'clique:header:menu',
     'eventLabel' : 'tv' 
     
     )}
     
//auto
 window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'auto'
        
        )}

//one
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'one'
        
        )}
        
//play
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header:menu',
        'eventLabel' : 'play'
        
        )}       
        
//botãoDePesquisa
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header',
        'eventLabel' : 'botão-de-pesquisa' 
        
        )}
        
//menuTrêspontinhos       
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:header',
        'eventLabel' : 'menu-tres-pontinhos' 
        
        )}
        
//createYourAndroidCharacter
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:be-together-not-the-same',
        'eventAction' : 'clique:Link',
        'eventLabel' :   'create-your-android-character'
        
        )}
        
//botãoSetinhaBaixo
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:be-together-not-the-same',
        'eventAction' : 'clique:botão',
        'eventLabel' : 'botão-azul-seta-pra-baixo' 
        
        )}
        
//androidWear
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' :'site-android:powering-screens-of-all-sizes',
        'eventAction' : 'clique:botão:imagem',
        'eventLabel' : 'android-wear' 
        
        )}
        
//phones
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:powering-screens-of-all-sizes',
        'eventAction' :'clique:botão:imagem',
        'eventLabel' : 'phones'
        
        )}

//tablets
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:powering-screens-of-all-sizes',
        'eventAction' : 'clique:botão:imagem',
        'eventLabel' : 'tablets'
        
        )}        

//androidTv
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:powering-screens-of-all-sizes',
        'eventAction' : 'clique:botão:imagem',
        'eventLabel' : 'android-tv'
        
        )}
        
//comingSoonAndroidAuto
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:powering-screens-of-all-sizes',
        'eventAction' : 'clique:botão:imagem',
        'eventLabel' : 'andoid-tv' 
        
        )}

//seeWhatsNewInThePlayStore
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:the-best-of-google-built-in',
        'eventAction' : 'clique:link',
        'eventLabel' : 'see-whats-new-in-the-play-store' 
        
        )}
        
//customiseYourPhone
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:customised-by-you-for-you',
        'eventAction' : 'clique:link',
        'eventLabel' : 'customise-your-phone'   
        
        )}
    
//makeTheSwitch
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:more-from-android',
        'eventAction' : 'clique:card',
        'eventLabel' : 'make-the-switch' 
        
        )}
        
//androidIfCom
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-andoird:more-from-android',
        'eventAction' : 'clique:card',
        'eventLabel' : 'android-if-com' 
        
        )}

//downloadNow
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:more-from-android',
        'eventAction' : 'clique:card',
        'eventLabel' : 'download-now' 
        
        )}
        
//findApps
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:more-from-android',
        'eventAction' : 'clique:card',
        'eventLabel' : 'find-apps' 
        
        )}
        
//versions
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:footer:link',
        'eventLabel' : 'versions' 
        
        )}
        
//forDevelopers
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:footer:link',
        'eventLabel' : 'for-developers' 
        
        )}
        
//blog
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:footer:link',
        'eventLabel' : 'blog' 
        
        )}
        
//privacyPolicy
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:footer:link',
        'eventLabel' : 'privacy-policy' 
        
        )}
        
//backToTop
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:footer:botao',
        'eventLabel' : 'back-to-top' 
        
        )}
        
//viewSourcer
window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'eventoTeste',
        'eventCategory' : 'site-android:geral',
        'eventAction' : 'clique:botao',
        'eventLabel' : 'view-source' 
        
        )}
