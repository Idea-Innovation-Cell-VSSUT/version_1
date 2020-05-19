self.addEventListener('install',function(event){
    console.log('{service worker} installing it...',event);

});
self.addEventListener('activate',function(event){
    console.log('{service worker} activating it...',event);
    return self.clients.claim();

});
self.addEventListener('fetch',function(event) {
    console.log('{sw} fetching',event);
    event.respondWith(fetch(event.request));

});