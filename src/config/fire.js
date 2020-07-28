import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/database')

var firebaseConfig = {
	apiKey: "AIzaSyBUyX7qW4GP6G9imuLAaUQAj4Ax0U6t_wE", 
	authDomain: "bookend-35b35.firebaseapp.com", 
	databaseURL: "https://bookend-35b35.firebaseio.com", 
	projectId: "bookend-35b35", 
	storageBucket: "bookend-35b35.appspot.com", 
	messagingSenderId: "494667459632", 
	appId: "1:494667459632:web:0c1066fbe356d81e6011f5", 
	measurementId: "G-WEN2EVKDTD"
};

const fire=firebase.initializeApp(firebaseConfig);

export default fire;