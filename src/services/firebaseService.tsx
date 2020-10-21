// import firebase from 'firebase';
import * as firebase from 'firebase/app'
import 'firebase/messaging'


const firebaseConfig = {
  apiKey: "AIzaSyCTgTY1t24W_DhN9Ztj2093MnghTqtWHeU",
  authDomain: "expense-tracker-259d1.firebaseapp.com",
  databaseURL: "https://expense-tracker-259d1.firebaseio.com",
  projectId: "expense-tracker-259d1",
  storageBucket: "expense-tracker-259d1.appspot.com",
  messagingSenderId: "795647113165",
  appId: "1:795647113165:web:be53a24dd308751493b684"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // [START_EXCLUDE]
  // Update the UI to include the received message.

  // [END_EXCLUDE]
});

function resetUI(){
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      console.log(currentToken)
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    
  });
}

function InitNotification(){
  
  console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // [START_EXCLUDE]
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        resetUI();
        // [END_EXCLUDE]
      } else {
        console.log('Unable to get permission to notify.');
      }
    });

}

export default InitNotification

