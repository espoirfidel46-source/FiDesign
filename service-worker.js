const CACHE_NAME = "fidesign-cache-v1";

const urlsToCache = [

"/",
"/index.html",
"/dashboard.html",
"/assistant.html",
"/course.html",
"/profile.html",
"/certificate.html"

];

self.addEventListener("install",(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then((cache)=>{

return cache.addAll(urlsToCache);

})

);

});

self.addEventListener("fetch",(event)=>{

event.respondWith(

caches.match(event.request)

.then((response)=>{

return response || fetch(event.request);

})

);

});
