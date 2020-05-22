// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
apiKey: "AIzaSyC3O9vkdL6fy7a0iESfiL16bPLipIZye08",
    authDomain: "databaset-fd4aa.firebaseapp.com",
    databaseURL: "https://databaset-fd4aa.firebaseio.com",
    projectId: "databaset-fd4aa",
    storageBucket: "databaset-fd4aa.appspot.com",
    messagingSenderId: "383891965750",
    appId: "1:383891965750:web:58997e8ad4eb433dd7d597",
    measurementId: "G-QDBL3R55YH"
};
firebase.initializeApp(config);

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
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}