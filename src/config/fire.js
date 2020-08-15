import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/database')

const json=require('./fire.json')
var firebaseConfig = json
console.log(process.env,json);
const fire=firebase.initializeApp(firebaseConfig);

export default fire;