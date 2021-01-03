<template>
  <HomepageHeader />

  <section class="content">
    <div class="cover-img">
      <img class="cover" v-bind:src="cover.img" alt="Responsive image" />
    </div>
    <p class="text-center wellcome-text ">Announcement</p>
    <hr class="hr-foot" />
  </section>
  <button @click="showAlert">Hello world</button>
 
  


  <!-- Slider Section -->
  <section class="slider-part">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div
          class="carousel-item fixed-height"
          v-for="(banner, idx) in announcement.banners"
          :class="{ active: idx == 0 }"
          :key="banner"
        >
          <router-link :to="announcement.announce[idx]">
            <img :src="'/img/' + banner + '.jpeg'" alt="" class="img-fluid" />
          </router-link>
          <div class="carousel-caption d-none d-md-block">
            <p>{{ announcement.announce[idx] }}</p>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>

  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";

export default {
  components: {
    HomepageHeader,
    HPfooter,
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
  },
  data() {
    return {
      announcement: {
        banners: ["photo-989-full", "photo-1032-large", "photo-985-full"],
        announce: ["register", "/", "about"],
      },
      cover: {
        img:
          "https://gswuacth-my.sharepoint.com/personal/nattawade_inala_g_swu_ac_th/Documents/Adobe%20XD%20Design%20I/Object%20Ver.I/Mask%20Group%2013@2x.png",
      },
    };
  },
};
</script>

<style>
@import "../assets/styles/login.css";
</style>

<style scoped>
img.cover {
  width: 100%;
  height: auto;
  margin-top: -129px;
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

@media (max-width: 767px) {
  img.cover {
    margin-top: -31px;
  }
}
</style>
