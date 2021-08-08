<template>
  <!-- Hamburger Header Menu-->
  <div class="ham d-md-none">
    <transition name="slide">
      <a @click="isHidden = !isHidden" v-if="isHidden"
        ><img class="ham" src="../image/ham-white.png"
      /></a>
    </transition>
  </div>
  <transition name="slide-fade">
    <div class="container-fluid responNav" v-if="!isHidden">
      <div class="language-respon d-block">
        <ul class="lan-area d-inline">
          <li>Thai</li>
          <p>|</p>
          <li><router-link class="text-danger" to="/login">English</router-link></li>
        </ul>
        <a @click="isHidden = !isHidden"
          ><img class="ham2 d-inline" src="../image/ham-left.png"
        /></a>
      </div>
   
  <!--  -->
      <div class="badge user-badge fw-light">
        <img class="profile-img mx-1" :src="information.profile_img.url" alt="profile.img" />
        <p class="firstname d-inline px-1 align-bottom">{{ information.firstname }}</p>
        <p class="lastname d-inline px-1 align-bottom">{{ information.lastname }}</p>
      </div>

      <hr class="hr-head" />
      <div class="align-self-center">
        <div>
          <p class="respon-menu mt-2">
            <router-link class="homepage" to="/homepage"> Homepage </router-link>
          </p>
        </div>
        <div>
          <p class="respon-menu mt-2">
            <router-link class="event" to="/Event">Event</router-link>
          </p>
        </div>
        <div>
          <p class="respon-menu mt-2">
            <router-link class="contact" to="/ContactInside">Contact Us</router-link>
          </p>
        </div>
      </div>
      <hr class="hr-headLeft" />
      <router-link to="/user/myProfile"
        ><p class="profilepage profile-menu text-dark">My Profile</p></router-link
      >
      <router-link to="/history"
        ><p class="historypage profile-menu text-dark">History</p></router-link
      >
      <router-link to="/newsHistory"
        ><p class="upcomingpage profile-menu text-dark">News History</p></router-link
      >
      <router-link to="/Create_News"
        ><p class="recruite profile-menu text-dark">Activity Recruit</p></router-link
      >
      <router-link to="/createnews"
        ><p class="createnews profile-menu text-dark">Create News</p></router-link
      >
      <hr class="hr-right" />
      <div class="profile-menu float-end fw-bold">
        <p class="text-danger" @click="logout">Logout</p>
      </div>
    </div>
  </transition>
  <!-- End of hamburger -->

  <header class="header-area d-none d-md-block">
    <div class="container-fluid mx-0">
      <div class="row headerrow">
        <div class="col-5">
          <nav class="navigation">
            <div class="menu">
              <ul class="nav-area mt-md-5">
                <li class="px-lg-3 px-0">
                  <router-link to="/homepage">Homepage</router-link>
                </li>
                <li class=""><router-link to="/event">Event</router-link></li>
                <li class="px-lg-3 px-0">
                  <router-link to="/ContactInside">Contact</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <!-- ไม่ต้องยุ่งกับมัน This is LOGO, better don't mess with this one -->
        <div class="col-2">
          <div>
            <img class="swu-inside" src="../image/logo-inside.png" />
          </div>
        </div>
        <div class="col-5 col-lg-5 profile">
          <div class="profile-1 d-flex flex-wrap justify-content-center">
            <img
              class="img-fluid profile-img"
              :src="$store.state.profileimg.url"
              alt="profile.img"
            />
            <div class="username px-3">
              <!-- <p class="firstname d-inline me-2" v-if="information={}">{{$store.state.info}}</p> -->
              <p class="firstname d-inline me-2">{{ $store.state.info.firstname }}</p>
              <i
                class="arrow-down dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              ></i>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <router-link class="dropdown-item" to="/user/myProfile"
                    >My Profile</router-link
                  >
                </li>
                <router-link to="/history">
                  <li>
                    <a class="dropdown-item" href="#">History</a>
                  </li></router-link
                >
                <router-link to="/Create_News">
                  <li>
                    <a class="dropdown-item" href="#">Create a New Event </a>
                  </li></router-link
                >

                <div class="language-menu text-center">
                  <p class="mb-0">
                    <router-link to="/contact">TH</router-link> |
                    <router-link to="/login" class="eng">EN</router-link>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <hr class="hr-header" />
      </div>
    </div>
  </header>

  <div class="cover-img d-md-none">
    <img class="cover" src="/img/MaskGroup132x.png" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      isHidden: true,
      cover: {
        img:
          "https://gswuacth-my.sharepoint.com/personal/nattawade_inala_g_swu_ac_th/Documents/Adobe%20XD%20Design%20I/Object%20Ver.I/Mask%20Group%2013@2x.png",
      },

      profile: {
        img: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      },

      user: {},
      information: {},
      loading:true
    };
  },
  async created() {
    const result = await axios.get("/users/profile");
    this.information = result.data;
    this.$store.state.info = result.data;
    this.$store.state.profileimg = result.data.profile_img;
    this.loading = false;

  },

  methods: {
    async logout() {
      const result = await axios.delete("/users/logout");
      this.user = result.data;
      this.$router.push({ name: "login" });
      
    },
  },
};
</script>

<style type="text/css">
  @keyframes ldio-8xpx2o6sd04 {
    0% {
      transform: translate(5.699999999999999px, 44.459999999999994px) scale(0);
    }
    25% {
      transform: translate(5.699999999999999px, 44.459999999999994px) scale(0);
    }
    50% {
      transform: translate(5.699999999999999px, 44.459999999999994px) scale(1);
    }
    75% {
      transform: translate(44.459999999999994px, 44.459999999999994px) scale(1);
    }
    100% {
      transform: translate(83.22px, 44.459999999999994px) scale(1);
    }
  }
  @keyframes ldio-8xpx2o6sd04-r {
    0% {
      transform: translate(83.22px, 44.459999999999994px) scale(1);
    }
    100% {
      transform: translate(83.22px, 44.459999999999994px) scale(0);
    }
  }
  @keyframes ldio-8xpx2o6sd04-c {
    0% {
      background: #85a2b6;
    }
    25% {
      background: #fdfdfd;
    }
    50% {
      background: #dce4eb;
    }
    75% {
      background: #bbcedd;
    }
    100% {
      background: #85a2b6;
    }
  }
  .ldio-8xpx2o6sd04 div {
    position: absolute;
    width: 25.08px;
    height: 25.08px;
    border-radius: 50%;
    transform: translate(44.459999999999994px, 44.459999999999994px) scale(1);
    background: #85a2b6;
    animation: ldio-8xpx2o6sd04 5.5555555555555545s infinite cubic-bezier(0, 0.5, 0.5, 1);
  }
  .ldio-8xpx2o6sd04 div:nth-child(1) {
    background: #bbcedd;
    transform: translate(83.22px, 44.459999999999994px) scale(1);
    animation: ldio-8xpx2o6sd04-r 1.3888888888888886s infinite cubic-bezier(0, 0.5, 0.5, 1),
      ldio-8xpx2o6sd04-c 5.5555555555555545s infinite step-start;
  }
  .ldio-8xpx2o6sd04 div:nth-child(2) {
    animation-delay: -1.3888888888888886s;
    background: #85a2b6;
  }
  .ldio-8xpx2o6sd04 div:nth-child(3) {
    animation-delay: -2.7777777777777772s;
    background: #bbcedd;
  }
  .ldio-8xpx2o6sd04 div:nth-child(4) {
    animation-delay: -4.166666666666666s;
    background: #dce4eb;
  }
  .ldio-8xpx2o6sd04 div:nth-child(5) {
    animation-delay: -5.5555555555555545s;
    background: #fdfdfd;
  }
  .loadingio-spinner-ellipsis-e2dlnyc4ytc {
    width: 114px;
    height: 114px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-8xpx2o6sd04 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-8xpx2o6sd04 div {
    box-sizing: content-box;
  }
  /* generated by https://loading.io/ */
  </style>

<style scoped>
img.cover {
  width: 100%;
  height: auto;
  margin-top: -129px;
  position: relative;
}

hr.hr-header {
  box-shadow: 0px 4px 9px 5px rgba(173, 173, 172, 1);
  opacity: 0.3;
  margin-top: -119px;
}

.eng {
  color: #a53b3b;
}

.navbar-area,
.language-menu {
  font-family: "Srinakharin";
  font-size: 1vw;
}

.nav-area li a {
  font-family: "Srinakharin";
}
ul.lan-area {
  padding: 0px;
}
img.swu-inside {
  z-index: 999;
  position: relative;
  padding-left: 0px;
  margin: -75px 0px 0px -100px;
}

/* profile --------------------------------------------------------*/
.dropdown-toggle::after {
  vertical-align: 0.05em;
}
.profile {
  margin-top: 3%;
}
.profile-img {
  border-radius: 50%;
  width: 6vh;
  height: 6vh;
}
.username {
  font-family: THSaraban;
  font-size: x-large;
  align-self: center;
}
.arrow {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.down:hover {
  border-width: 1px;
}

/* Start Responsive nav */

.hr-head + .align-self-center div:first-of-type {
  border-left: none;
  border-right: none;
  background-color: white;
}
.hr-head + .align-self-center div:first-of-type a {
  color: #636468;
}

a.active.homepage {
  padding: 0% 22% 1% 11%;
  margin: 0% 0% 0% -9%;
  background-color: #769e94;
  border-radius: 0px 36px 36px 0px;
  color: white !important;
  border: none;
}

a.active.event {
  padding: 0% 33% 1% 9%;
  margin: 0% 0% 0% -9%;
  background-color: #769e94;
  border-radius: 0px 36px 36px 0px;
  color: white;
  border: none;
}

a.active.router-link-exact-active.contact {
  padding: 0% 33% 1% 9%;
  margin: 0% 0% 0% -9%;
  background-color: #769e94;
  border-radius: 0px 36px 36px 0px;
  color: white !important;
  border: none;
}

a.active .profilepage {
  padding: 0% 9% 0% 13%;
  margin: 2% 36% 0% 12%;
  border-radius: 0px 36px 36px 0px;
  background-color: #b37d83;
  color: rgb(255, 255, 255) !important;
}
a.active .historypage {
  padding: 0% 9% 0% 13%;
  margin: -3% 36% 0% 12%;
  border-radius: 0px 36px 36px 0px;
  background-color: #b37d83;
  color: rgb(255, 255, 255) !important;
}
a.active .upcomingpage {
  padding: 0% 9% 0% 13%;
  margin: -3% 36% 0% 12%;
  border-radius: 0px 36px 36px 0px;
  background-color: #b37d83;
  color: rgb(255, 255, 255) !important;
}
a.active .recruite {
  padding: 0% 9% 0% 13%;
  margin: -3% 36% 0% 12%;
  border-radius: 0px 36px 36px 0px;
  background-color: #b37d83;
  color: rgb(255, 255, 255) !important;
}
a.active .createnews {
  padding: 0% 9% 0% 13%;
  margin: -3% 36% 5% 12%;
  border-radius: 0px 36px 36px 0px;
  background-color: #b37d83;
  color: rgb(255, 255, 255) !important;
}

/* Profile */
.user-badge {
  color: #000000;
  font-family: "THSaraban";
  padding: 35px 7px;
  font-size: 25px;
  display: block;
}
/* End of profile */
.ham {
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
  left: 5%;
  z-index: 100;
  width: 51px;
  height: 31px;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.responNav {
  position: fixed;
  margin: -31px 0px;
  background-color: white;
  background-position: center;
  background-size: 462px 574px;
  color: #636468;
  z-index: 9999;
  max-height: 100%;
}

.language-respon {
  font-family: "Srinakharinwirot";
  padding-top: 4%;
  font-size: 3vw;
}

img.ham {
  top: auto;
  float: right;
}
img.ham2 {
  margin-right: 10%;
  top: auto;
  float: right;
  width: 51px;
  height: 31px;
}

.hr-head {
  margin: auto auto 10px auto;
  width: 63%;
  height: 2px;
  background-color: #b0d4cb;
  opacity: 1;
}
.hr-headLeft {
  margin: auto 46px;
  width: 65%;
  height: 3px;
  background-color: #b0d4cb;
  opacity: 1;
}
.hr-right {
  margin: -4px 0px 0px 31%;
  width: 63%;
  height: 3px;
  background-color: #b0d4cb;
  opacity: 1;
}

.respon-menu {
  margin-left: 25%;
  font-size: 4vw;
  font-family: "Srinakharinwirot";
}
a {
  text-decoration: none;
}

/* Start Profile menu */
.profile-menu {
  font-family: "THSaraban";
  font-size: 5vw;
  margin-left: 25%;
  margin-top: 3%;
}
@media only screen and (min-width: 1401px) {
  .profile {
    margin-top: 2.8rem;
  }
}

@media only screen and (max-width: 1400px) and (min-width: 766px) {
  .username {
    font-size: medium;
  }
}

/* End Responsive Nav */
@media only screen and (max-width: 767px) and (min-width: 320px) {
  img.cover {
    margin-top: -31px;
  }
  .profile-img {
    border-radius: 50%;
    width: 55px;
    height: 55px;
  }
}
</style>
