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