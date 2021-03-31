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
import Profile_test from "../views/profile.vue";
import NewsForm from "../views/NewsForm-dbTest.vue";
import imageupload from "../views/image-upload.vue";
import history from "../views/history.vue";
import upcoming from "../views/upcoming.vue";
import createnews from "../views/createnews.vue";
import adminpage from "../views/admin_homepage.vue";
import createAn from "../views/admin_anounceCreate.vue";
import NotFound from "../views/NotFound.vue";



// imaport components
import Act from "../components/Activity.vue";
import news from "../components/News.vue";
import participate from "../components/participate.vue";

// import middleware(?)
import 'bootstrap/dist/css/bootstrap.css';
// import { Router } from "express";




 const routes = [
  // components
  {
    path: "/createAn",
    name: "createAn",
    component: createAn
  },
  {
    path: "/adminpage",
    name: "adminpage",
    component: adminpage
  },
  {
    path: "/News",
    name: "news",
    component: news
  },
  {
    path: "/Activity",
    name: "Act",
    component: Act
  },
  {
    path: "/participate",
    name: "participate",
    component: participate
  },

  // view page
  {
    path: "/createnews",
    name: "createnews",
    component: createnews
  },
  {
    path: "/upcoming",
    name: "upcoming",
    component: upcoming
  },
  {
    path: "/history",
    name: "history",
    component: history
  },
  {
    path: "/imageupload",
    name: "imageupload",
    component: imageupload
  },
  {
    path: "/Create_News",
    name: "NewsForm",
    component: NewsForm
  },
  {
    path: "/user/myProfile",
    name: "profile",
    component: Profile_test
  },

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
    path: "/login",
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
// Catch All 404
{
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component:NotFound
},
];

// const isLoggedIn = false;


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active',
});

router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
  if(to.push === '/Contact') {
    router.push('/asdsds');
  }
});



export default router;