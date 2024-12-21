const firebaseConfig = {
    apiKey: "AIzaSyAu8crSV8bzFUtn_ohKTAYANFGkXa8oVwc",
  authDomain: "yoppus-1312.firebaseapp.com",
  databaseURL: "https://yoppus-1312-default-rtdb.firebaseio.com",
  projectId: "yoppus-1312",
  storageBucket: "yoppus-1312.appspot.com",
  messagingSenderId: "486356497047",
  appId: "1:486356497047:web:bd01f9d985f96f77c62fd2",
  measurementId: "G-F3MYGRT02F"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();