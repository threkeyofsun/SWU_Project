<template>
  <div v-if="$store.state.info.username == $store.state.admin" >
<AdminHeader />
</div>
<div v-else>
    <HomepageHeader /> 
</div>

  <section class="content">
    <div class="cover-img d-none d-md-block">
      <img class="cover" src="/img/MaskGroup132x.png" alt="Responsive image" />
    </div>
    <p class="text-center wellcome-text my-3" >Announcement</p>
    <hr class="hr-main" />
  </section>
<!-- v-for="(activity, index) in act" :key="(activity, index) -->
  <!-- Slider Section -->
  <section class="slider-part">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(activity, idx) in $store.state.anno" :key="activity" :class="{ active: idx == 0 }"
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
              <img :src="'/img/' + activity.cover_img" alt="" class="img-fluid col-12" />
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
      anny:{}
    };
  },
  async mounted() {
    const result = await axios.get("/users/profile");
    this.$store.state.info = result.data;
    this.$store.commit("setAuthentication", true);
    // Get Announcement
    const announce = await axios.get("/announcements/");
    this.$store.state.anno = announce.data;
    console.log(this.$store.state.anno);
   
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
