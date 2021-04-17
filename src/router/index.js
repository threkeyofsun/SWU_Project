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
import newsHistory from "../views/newsHistory.vue";
import createnews from "../views/createnews.vue";
import adminpage from "../views/admin_homepage.vue";
import createAn from "../views/admin_anounceCreate.vue";
import NotFound from "../views/NotFound.vue";

// Edit
import editProfile from "../views/Edit/editProfile.vue";
import editAnnounce from "../views/Edit/editAnnounce.vue";

// Admin
import adminonly from "../views/admin/adminonly.vue";
import adminonlyAnnounce from "../views/admin/adminonlyAnnounce.vue";




// imaport components
import Act from "../components/Activity.vue";
import news from "../components/News.vue";
import participate from "../components/participate.vue";

// import (?)

import 'bootstrap/dist/css/bootstrap.css';
import store from '@/store';
// import { Router } from "express";




 const routes = [
// Admin
{
  path: "/admin/activity/:id",
  name: "adminonly",
  component: adminonly,
},
{
  path: "/admin/announce/:id",
  name: "adminonlyAnnounce",
  component: adminonlyAnnounce,
},
  // Edit
  {
    path: "/profile/edit/:id",
    name: "editProfile",
    component: editProfile,
  },
  {
    path: "/Announcement/edit/:id",
    name: "editAnnounce",
    component: editAnnounce,
  },
  // components
  {
    path: "/createAn",
    name: "createAn",
    component: createAn,
    beforeEnter: (to,from,next) => {
      if(to.name !== 'login' && !store.state.authenticatedAdmin) next('/')
      else next()
    }
  },
  {
    path: "/adminpage",
    name: "adminpage",
    component: adminpage,
    // beforeEnter: (to,from,next) => {
    //   if(to.name !== 'login' && !store.state.authenticatedAdmin) next('/')
    //   else next()
    // }
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
    path: "/newsHistory",
    name: "newsHistory",
    component: newsHistory
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
    component: Profile_test,

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
    component: login,
  
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
  component: homepage,
  // beforeEnter: (to,from,next) => {
  //   if(to.name !== 'login' && !store.state.authenticatedAdmin) next('/')
  //   else next()
  // }
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
},{
  path: '/',
  redirect:{
    name: "login"
  }
}
];

// const isLoggedIn = false;


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active',
});

// router.beforeEach((to, _1, next) => {
//   console.log('Global before each');
//   if(to.path === '/Contact') {
//     next();
//   } else {
//     next();
//   }
// });

// router.afterEach(( ) => {
//   console.log('Router after each');
// });

export default router;