import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import ToLogin from "../views/ToLogin.vue";
import homepage from "../views/homepage.vue";

import 'bootstrap/dist/css/bootstrap.css';


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
