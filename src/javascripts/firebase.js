

import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyA93oS0rw50Y0sZaHQvfxEJ8LogZDhIr4Y",
    authDomain: "realtime-todo-app.firebaseapp.com",
    databaseURL: "https://realtime-todo-app.firebaseio.com",
    storageBucket: "realtime-todo-app.appspot.com",
    messagingSenderId: "1002386360499"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}