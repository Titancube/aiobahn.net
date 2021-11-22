import path from 'path'
import dotenv from 'dotenv'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

dotenv.config({ path: __dirname + '/.env' })

const firebaseConfig = {
  // apiKey: 'AIzaSyBzBsg7VpKZm8txRWI3ZgbYevMp5jQ4_To',
  // authDomain: 'aioweb-45ddb.firebaseapp.com',
  // databaseURL: 'https://aioweb-45ddb.firebaseio.com',
  // projectId: 'aioweb-45ddb',
  // storageBucket: 'aioweb-45ddb.appspot.com',
  // messagingSenderId: '71544283688',
  // appId: '1:71544283688:web:7a55b22e50dc8e47540b1d',

  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }
