import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAj6co3KYZIngl-rEcqPpSfLT-ikqnE-i8",
  authDomain: "cart-app-auth.firebaseapp.com",
  projectId: "cart-app-auth",
  storageBucket: "cart-app-auth.appspot.com",
  messagingSenderId: "912217227745",
  appId: "1:912217227745:web:137395a6e786d390d612a0",
  measurementId: "G-9W9T3B26RS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

library.add(fas);
createApp(App)
  .component("fa-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
