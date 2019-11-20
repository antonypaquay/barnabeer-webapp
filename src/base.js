import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJTBrf1WV5RsZvuvqezK0tqb0QL_ipagM",
  authDomain: "barnabeer-c058b.firebaseapp.com",
  databaseURL: "https://barnabeer-c058b.firebaseio.com",
  projectId: "barnabeer-c058b",
  storageBucket: "",
  messagingSenderId: "727983973851",
  appId: "1:727983973851:web:38dedf3b834c531f"
})
  
const base = Rebase.createClass(firebase.database());

export { firebaseApp }
export default base;