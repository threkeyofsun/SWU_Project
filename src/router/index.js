import { createRouter, createWebHistory } from "vue-router";
import Contact from "../views/Home.vue";
import ContactInside from "../views/contact-inside.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import ToLogin from "../views/ToLogin.vue";
import homepage from "../views/homepage.vue";
import event from "../views/Event.vue";
import AnnoucePage from "../views/Annouce-Post.vue";
import NewsPage from "../views/News-Post.vue";
import ActPost from "../views/Activities-Post.vue";
// Eample cart
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';

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
{
  path: "/homepage/annoucement/:id",
  name: "AnnouceDetailPage",
  component: AnnoucePage
},
{
  path: "/event/news/:id",
  name: "NewsDetailPage",
  component: NewsPage
},{
  path: "/event/activities/:id",
  name: "ActDetailPage",
  component: ActPost
},
// Cart
{
  path: '/products',
  name: 'Products',
  component: ProductsPage,
}, {
  path: '/products/:id',
  name: 'ProductDetail',
  component: ProductDetailPage,
}, {
  path: '/cart',
  name: 'Cart',
  component: CartPage,
}, {
  path: '/',
  redirect: '/products',
}, 



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
