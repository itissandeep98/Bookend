import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/database')

const json=require('./fire.json')
var firebaseConfig = json

const fire=firebase.initializeApp(firebaseConfig);

export default fire;