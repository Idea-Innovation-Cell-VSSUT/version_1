importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-messaging.js');

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
    const title='Hello World';
    const options={
      body:payload.data.status,
      icon:'/icl3.png'
    };
    return self.registration.showNotification(title,options);
    
});