// Initialize Firebase (ADD YOUR OWN DATA)
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

const messaging = firebase.messaging();
messaging.requestPermission().then(function(){
    console.log("granted");
    
      getRegisterToken();
       
   
    
}).catch(function(err){
    console.log("user denied");
});
function getRegisterToken(){
    

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
      
      var cordiRef = firebase.database().ref('fcm');
    var data={
        fcmtoken:currentToken
        
    }
    cordiRef.push(data).then(function(){
      console.log(currentToken);
    sendTokenToServer(currentToken);
         
    });
  }else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    
    setTokenSentToServer(false);
  
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  
  setTokenSentToServer(false);
});
}
  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' +
          'unless it changes');
    }

  }
function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
  }


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}