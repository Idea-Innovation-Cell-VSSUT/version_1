var defferedPrompt;
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(function(){
console.log("sw registered");
    });
}
window.addEventListener('beforeinstallprompt',function(event){
console.log('beforeinstallprompt fired');
event.preventDefault();
defferedPrompt=event;
    document.querySelector('#installapp').style.display = 'flex';
    document.querySelector('#text').style.display = 'flex';
return false;
});
