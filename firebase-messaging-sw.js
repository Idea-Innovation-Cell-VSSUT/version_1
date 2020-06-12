importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js');
importScripts('firebase-messaging.js');

var config = {
apiKey: "AIzaSyCFXQqvJGGpcNeSittYro6zy5e03itmDLg",
  authDomain: "ideainnovationcell.firebaseapp.com",
  databaseURL: "https://ideainnovationcell.firebaseio.com",
  projectId: "ideainnovationcell",
  storageBucket: "ideainnovationcell.appspot.com",
  messagingSenderId: "368936158980",
  appId: "1:368936158980:web:14751bb19594425bfcb251",
  measurementId: "G-4E9R4VDDRL"
};
firebase.initializeApp(config);

const messaging= firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title='Idea Innovation Cell';
    const options={
      body: payload.data.message,
      icon: payload.data.icon,
      image:payload.data.image,
        data:{
      click_action: payload.data.click_action
        }
      
    };
    return self.registration.showNotification(title,options);
    
});
self.addEventListener('notificationclick', function(event){
    var action_click=event.notification.data.click_action;
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(action_click)
    );
    
});