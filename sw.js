const cacheName='v2';
self.addEventListener('install',function(event){
    console.log('{service worker} installing it...',event);

});
self.addEventListener('activate',function(event){
    console.log('{service worker} activating it...',event);
    event.waitUntil(
    caches.keys().then(cacheNames =>{
        return Promise.all(
        cacheNames.map(cache=>{
            if(cache!==cacheName){
                console.log("deleting old one");
                return caches.delete(cache);
            }
        })
        );
    })
    
    
    );
    return self.clients.claim();

});
self.addEventListener('fetch',function(event) {
    console.log('{sw} fetching',event);
    event.respondWith(fetch(event.request)
                     .then(res=>{
            const resClone= res.clone();
        caches
        .open(cacheName)
        .then(cache =>{
          cache.put(event.request,resClone);
        });
        return res;
    }).catch(err=>caches.match(event.request).then(res=>res))
                      );
    

});