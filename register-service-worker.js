"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/Aarthiscans/expo-service-worker.js",{scope:"/Aarthiscans/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));