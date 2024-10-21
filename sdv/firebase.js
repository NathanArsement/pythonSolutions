
import 'firebase/database';
import * as firebase from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyBABdgC2fO6OLw_Q05ShQZwVLIDb2Dq0Ok",
authDomain: "pysolutions-9a28d.firebaseapp.com",
projectId: "pysolutions-9a28d",
storageBucket: "pysolutions-9a28d.appspot.com",
messagingSenderId: "996559606204",
appId: "1:996559606204:web:92503ee64ad7e90b371bb9"
};

app = firebase.initializeApp(firebaseConfig);

export const database = getDatabase(app);