<template>
  <div v-if="$store.state.info.username == $store.state.admin">
    <AdminHeader />
  </div>
  <div v-else>
    <HomepageHeader />
  </div>

  <section class="content">
    <div class="cover-img d-none d-md-block">
      <img class="cover" src="/img/MaskGroup132x.png" alt="Responsive image" />
    </div>
    <p class="text-center wellcome-text my-3">Announcement</p>
    <hr class="hr-main" />
  </section>

  <!-- v-for="(activity, index) in act" :key="(activity, index) -->
  <!-- Slider Section -->\
  <div v-if="$store.state.annLoading" class="text-center">
    <div class="loadingio-spinner-ellipsis-zn4fhzwgb">
      <div class="ldio-yjhkrbku5e">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <!--  -->

  <section class="slider-part">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="(activity, idx) in $store.state.anno"
          :key="activity"
          :class="{ active: idx == 0 }"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item fixed-height"
          v-for="(activity, idx) in $store.state.anno"
          :class="{ active: idx == 0 }"
          :key="activity"
        >
          <div class="row">
            <router-link :to="'/homepage/annoucement/' + activity._id">
              <img :src="activity.cover_img.url" alt="" class="img-fluid col-12" />
            </router-link>
          </div>
          <div class="carousel-caption">
            <p class="anTitle">{{ activity.title }}</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </section>
  <hr class="hr-main my-4" />

  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import AdminHeader from "../components/admin_header";
import HPfooter from "../components/homepageFooter";
import axios from "axios";

export default {
  components: {
    AdminHeader,
    HomepageHeader,
    HPfooter,
  },

  data() {
    return {
      cover: {
        img:
          "https://gswuacth-my.sharepoint.com/personal/nattawade_inala_g_swu_ac_th/Documents/Adobe%20XD%20Design%20I/Object%20Ver.I/Mask%20Group%2013@2x.png",
      },
      anny: {},
      loading: true,
      load: true,
    };
  },
  async mounted() {
    const result = await axios.get("/users/profile");
    this.$store.state.info = result.data;
    this.$store.state.profileimg = result.data.profile_img;
    console.log(this.$store.state.profileimg);
    this.load = false;

    this.$store.commit("setAuthentication", true);
    // Get Announcement
    const announce = await axios.get("/announcements/");
    this.$store.state.anno = announce.data;
    console.log(this.$store.state.anno);
    this.$store.state.annLoading = false;
  },
};
</script>

<style scoped type="text/css">
.sample-img {
  width: 100%;
  height: 345px;
  object-fit: cover;
  object-position: top;
}
@keyframes ldio-yjhkrbku5e {
  0% {
    transform: translate(29.64px, 113.62px) scale(0);
  }
  25% {
    transform: translate(29.64px, 113.62px) scale(0);
  }
  50% {
    transform: translate(29.64px, 113.62px) scale(1);
  }
  75% {
    transform: translate(113.62px, 113.62px) scale(1);
  }
  100% {
    transform: translate(197.60000000000002px, 113.62px) scale(1);
  }
}
@keyframes ldio-yjhkrbku5e-r {
  0% {
    transform: translate(197.60000000000002px, 113.62px) scale(1);
  }
  100% {
    transform: translate(197.60000000000002px, 113.62px) scale(0);
  }
}
@keyframes ldio-yjhkrbku5e-c {
  0% {
    background: #ffffff;
  }
  25% {
    background: #ffdbdb;
  }
  50% {
    background: #ffe7e7;
  }
  75% {
    background: #fff5f5;
  }
  100% {
    background: #ffffff;
  }
}
.ldio-yjhkrbku5e div {
  position: absolute;
  width: 19.76px;
  height: 19.76px;
  border-radius: 50%;
  transform: translate(113.62px, 113.62px) scale(1);
  background: #ffffff;
  animation: ldio-yjhkrbku5e 5.5555555555555545s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-yjhkrbku5e div:nth-child(1) {
  background: #fff5f5;
  transform: translate(197.60000000000002px, 113.62px) scale(1);
  animation: ldio-yjhkrbku5e-r 1.3888888888888886s infinite cubic-bezier(0, 0.5, 0.5, 1),
    ldio-yjhkrbku5e-c 5.5555555555555545s infinite step-start;
}
.ldio-yjhkrbku5e div:nth-child(2) {
  animation-delay: -1.3888888888888886s;
  background: #ffffff;
}
.ldio-yjhkrbku5e div:nth-child(3) {
  animation-delay: -2.7777777777777772s;
  background: #fff5f5;
}
.ldio-yjhkrbku5e div:nth-child(4) {
  animation-delay: -4.166666666666666s;
  background: #ffe7e7;
}
.ldio-yjhkrbku5e div:nth-child(5) {
  animation-delay: -5.5555555555555545s;
  background: #ffdbdb;
}
.loadingio-spinner-ellipsis-zn4fhzwgb {
  width: 247px;
  height: 247px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-yjhkrbku5e {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-yjhkrbku5e div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
[v-cloak] {
  display: none;
}
</style>

<style>
@import "../assets/styles/login.css";
</style>

<style scoped>
.hr-main {
  width: 65%;
  height: 3px !important;
  margin: 25px auto;
  border: 0px;
  opacity: 0.75;
  color: #a53b3b;
}
.hp-underline {
  border-bottom: solid 2px cornflowerblue;
}
.carousel-caption {
  font-size: xx-large;
  background: #c0757591;
  top: 0;
  bottom: auto;
  width: 100%;
  right: 0%;
  left: 0%;
}
img.cover {
  width: 100%;
  height: auto;
  margin-top: -129px;
  position: relative;
}
.wellcome-text {
  font-size: 3vw;
  font-family: Srinakharinwirot;
  color: #636468;
  margin: 50px 0px;
}
.fixed-height {
  max-height: 800px;
}
.carousel-indicators li {
  height: 10px;
  border-bottom: 0;
}
@media (max-width: 1200px) {
  .carousel-caption {
    font-size: x-large;
  }
  .fixed-height {
    max-height: 500px;
  }
}

@media (max-width: 767px) {
  img.cover {
    margin-top: -31px;
  }
  .carousel-caption {
    font-size: unset;
    padding: 3%;
  }
  p.anTitle {
    margin: 0;
  }
  .fixed-height {
    max-height: 370px;
  }
}
@media (max-width: 560px) {
  .fixed-height {
    max-height: 220px;
  }
}
</style>
