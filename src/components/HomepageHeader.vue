<template>
  <!-- Hamburger Header Menu-->
  <div class="ham d-md-none">
    <transition name="slide">
      <a @click="isHidden = !isHidden" v-if="isHidden"
        ><img class="ham " src="../image/ham-white.png"
      /></a>
    </transition>
  </div>

  <transition name="slide-fade">
    <div class="container-fluid responNav" v-if="!isHidden">
      <div class="language-respon d-block">
        <ul class="lan-area d-inline">
          <li>Thai</li>
          <p>|</p>
          <li><router-link to="/">English</router-link></li>
        </ul>
        <a @click="isHidden = !isHidden"
          ><img class="ham2 d-inline" src="../image/ham-left.png"
        /></a>
      </div>
      <!-- profile -->
      <div class="badge user-badge fw-light ">
        <img
          class=" profile-img  mx-1"
          v-bind:src="profile.img"
          alt="profile.img"
        />
        <p class="firstname d-inline px-1 align-bottom">Firstname</p>
        <p class="lastname  d-inline px-1 align-bottom">L.</p>
      </div>

      <hr class="hr-head" />
      <div class="align-self-center ">
        <div>
          <p class="respon-menu mt-2">
            <router-link to="/Homepage">Homepage </router-link>
          </p>
        </div>
        <div>
          <p class="respon-menu mt-2">
            <router-link to="/Event">Event</router-link>
          </p>
        </div>
        <div>
          <p class="respon-menu mt-2">
            <router-link to="/ContactInside">Contact Us</router-link>
          </p>
        </div>
      </div>
      <hr class="hr-head" />
      <router-link to="/user/en60109010501"><p class="profile-menu text-dark">My Profile</p></router-link>
      <p class="profile-menu">History</p>
      <p class="profile-menu">Upcoming</p>
    </div>
  </transition>
  <!-- End of hamburger -->

  <header class="header-area d-none d-md-block">
    <div class="container-fluid mx-0">
      <div class="row headerrow">
        <div class="col-5">
          <nav class="navigation ">
            <div class="menu">
              <ul class="nav-area mt-lg-5">
                <li><router-link to="/homepage">Homepage</router-link></li>
                <li><router-link to="/event">Event</router-link></li>
                <li><router-link to="/ContactInside">Contact</router-link></li>
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
        <div class="col-3">
          <div class="profile d-flex flex-wrap justify-content-end ">
            <img
              class="img-fluid profile-img  "
              v-bind:src="profile.img"
              alt="profile.img"
            />
            <div class="username px-3 mt-3">
              <p class="firstname d-inline ">Firstname</p>
              <p class="lastname  d-inline px-3">L.</p>
              <i
                class="arrow-down dropdown-toggle "
                role="button"
                data-bs-toggle="dropdown"
              ></i>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li> <router-link class="dropdown-item" to="/user/en60109010501">My Profile</router-link> </li>
                <li><a class="dropdown-item" href="#">Upcoming Activity</a></li>
                <li>
                  <a class="dropdown-item" href="#">Create a New Event </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="language-menu mt-lg-5 text-center">
            <ul class="lan-area">
              <router-link to="/Home"><li>TH</li></router-link>
              <p>|</p>
              <li><router-link to="/" class="eng">EN</router-link></li>
            </ul>
          </div>
        </div>
        <hr class="hr-header" />
      </div>
    </div>
  </header>

  <div class="cover-img d-md-none">
    <img class="cover" src="/img/MaskGroup132x.png"/>
  </div>
</template>

<script>
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
        img:
          "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      },
    };
  },
};
</script>

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
  margin-top: 0px;
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
.profile {
  margin-top: 34px;
}

.profile-img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
}
.username {
  align-self: center;
  font-family: THSaraban;
  font-size: 22px;
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
  max-height: 690px;
}

.language-respon {
  font-family: "Srinakharinwirot";
  padding-top: 39px;
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
  width: 75%;
  height: 2px;
  background-color: #b0d4cb;
  opacity: 1;
}
.respon-menu {
  margin-left: 25%;
  font-size: 4vw;
  font-family: "Srinakharinwirot";
}

.hr-head + .align-self-center div:first-of-type {
  margin: auto 45% auto 12%;
  border-left: 0;
  border-right: 0;
  background-color: #769e94;
  border-radius: 0px 36px 36px 0px;
}
.hr-head + .align-self-center div:first-of-type a {
  color: white;
  margin-left: 5%;
}

/* Start Profile menu */
.profile-menu {
  font-family: "THSaraban";
  font-size: 5vw;
  margin-left: 25%;
  margin-top: 3%;
}

/* End Responsive Nav */
@media (max-width: 767px) {
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
