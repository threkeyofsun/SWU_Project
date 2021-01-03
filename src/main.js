import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 

const app = createApp(App)
 
app.use(VueSweetalert2);

import "animate.css/animate.css";
import "bootstrap";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
