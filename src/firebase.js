
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
aerolinia 
const firebaseConfig = {
  apiKey: "AIzaSyAarstFx6-gFbJfELuUNXU7xTxQHvsUAkc",
  authDomain: "app-test-77b2e.firebaseapp.com",
  projectId: "app-test-77b2e",
  storageBucket: "app-test-77b2e.appspot.com",
  messagingSenderId: "897842156306",
  appId: "1:897842156306:web:ea69ff6f3f9540a53e19cb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);