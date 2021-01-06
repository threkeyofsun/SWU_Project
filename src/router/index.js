import { createRouter, createWebHistory } from "vue-router";
import Contact from "../views/Home.vue";
import ContactInside from "../views/contact-inside.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import ToLogin from "../views/ToLogin.vue";
import homepage from "../views/homepage.vue";
import event from "../views/Event.vue";


import 'bootstrap/dist/css/bootstrap.css';


const routes = [
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/ContactInside",
    name: "ContactInside",
    component: ContactInside
  },
  {
    path: "/Event",
    name: "event",
    component: event
  },
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
  path: "/successful",
  name: "Tologin",
  component: ToLogin
},
{
  path: "/Homepage",
  name: "homepage",
  component: homepage
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
