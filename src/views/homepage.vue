<template>
  <HomepageHeader />

  <section class="content">
    <div class="cover-img d-none d-md-block">
      <img class="cover" src="/img/MaskGroup132x.png" alt="Responsive image" />
    </div>
    <p class="text-center wellcome-text  my-3">Announcement</p>
    <hr class="hr-main" />
  </section>

  <!-- Slider Section -->
  <section class="slider-part">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item fixed-height"
          v-for="(banner, idx) in announcement.banners"
          :class="{ active: idx == 0 }"
          :key="banner"
        >
          <router-link :to="'/homepage/annoucement/' + announcement.id[idx]">
            <img :src="'/img/' + banner + '.jpeg'" alt="" class="img-fluid" />
          </router-link>
          <div class="carousel-caption d-none d-md-block">
            <p class="anTitle">{{ announcement.announce[idx] }}</p>
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
  <hr class="hr-main my-4 " />

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

  data() {
    return {
       existentialQuestion: 'Am I truly an alligator?',
      announcement: {
        banners: ["photo-989-full", "photo-1032-large", "photo-985-full"],
        announce: ["Announcement form Admin I ", "Announcement form Admin II", "Announcement form Admin III "],
        id: ["Uniform-Term", "Covid-19-situation", "5875sdwe"],
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
.carousel-indicators li{
  height: 10px;
}

@media (max-width: 767px) {
  img.cover {
    margin-top: -31px;
  }
}
</style>
