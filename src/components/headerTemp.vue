<template>
  <!-- Hamburger Responsive Tab -->

  <div class="ham d-md-none">
    <transition name="slide">
      <a @click="isHidden = !isHidden" v-if="isHidden"
        ><img class="ham " src="../image/ham.png"
      /></a>
    </transition>
  </div>

  <transition name="slide-fade">
    <div class="container-fluid responNav" v-if="!isHidden">
      <div class="language-respon d-block">
        <ul class="lan-area d-inline">
          <li>Thai</li>
          <p>|</p>
          <li><router-link to="/login">English</router-link></li>
        </ul>
        <a @click="isHidden = !isHidden"
          ><img class="ham2 d-inline" src="../image/ham-right.png"
        /></a>
      </div>
      <hr class="hr-head" />
      <div class="align-self-center mt-5 pt-5 text-center">
        <div>
          <p class="respon-menu ">
            <router-link to="/login">Homepage </router-link>
          </p>
        </div>
        <div>
          <p class="respon-menu mt-4">
            <router-link to="/Contact">Contact Us</router-link>
          </p>
        </div>
      </div>
    </div>
  </transition>

  <header class="header-area countainer-fluid mx-md-5">
    <div class="logo mx-auto mx-md-0">
      <img class="swu-logo" src="../assets/swulogo.png" />
    </div>
    <nav class="navbar-area d-none d-md-block mt-4">
      <div class="main-menu">
        <ul class="nav-area ">
          <li class="mx-4 mx-lg-5"><router-link to="/login">Home</router-link></li>
          <li class="mx-lg-3"><router-link to="/Contact">Contact Us</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="language-menu d-none d-md-block mt-4">
      <ul class="lan-area">
        <router-link to="/Contact"><li>TH</li></router-link>
        <p>|</p>
        <li><router-link to="/login">EN</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerTemp",
  components: {},
  el: "#example-1",
  data() {
    return {
      isHidden: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styles/login.css";

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
  background-image: url("~@/image/mb-bg.png");
  background-position: center;
  background-size: 462px 574px;
  color: #636468;
  z-index: 100;
  height: 574px;
}

.language-respon {
  font-family: "Srinakharinwirot";
  padding-top: 39px;
  font-size: 5vw;
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
  width: 70%;
  height: 3px;
  background-color: #629084;
}
.respon-menu {
  font-size: 7vw;
  font-family: "Srinakharinwirot";
}
</style>
