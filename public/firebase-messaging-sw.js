importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

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

firebase.messaging();