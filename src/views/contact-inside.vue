<template>
  <HomepageHeader />

  <div class="about-content">
    <headerTemp />

    <div class="container text-center contact-content py-5 mt-3">
      <div class="text-uppercase align-middle mt-5 pb-5">
        <h3 class="fw-bold main-text">
          If you have any inconvenience from using the website please, feel free to
          contact us
        </h3>
      </div>
      <div class="row mb-4 mt-5">
        <div class="col-xl-4">
          <!-- <h3>Mr.Jittipat Thepta</h3>
          <h3>Developer</h3>
          <p>jittipat.thepta@g.swu.ac.th</p> -->
        </div>
        <div class="col-xl-4">
          <h3>Mr.Wongsathorn Pornpirunroch</h3>
          <h3>Developer</h3>
          <p>wongsatorn.mos@g.swu.ac.th</p>
        </div>
        <div class="col-xl-4">
          <h3>Miss.Nattawadee Inala</h3>
          <h3>Developer</h3>
          <p>nattawadee.Inala@g.swu.ac.th</p>
        </div>
      </div>
    </div>
  </div>

  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import axios from "axios";
// @ isio an alias to /src

export default {
  components: {
    HomepageHeader,
    HPfooter,
  },

  methods: {},
  async created() {
    const result = await axios.get("/users/profile");
    this.$store.state.info = result.data;
    this.$store.commit("setAuthentication", true);
  },
};
</script>

<style scoped>
@import "../assets/styles/login.css";

.about-content {
  font-family: "THSaraban";
}
.footer {
  background-image: linear-gradient(#d4cdcd, #ffffff);
}

@media screen and (max-width: 674px) {
  .main-text {
    font-size: 25px;
    margin: 75px 50px;
  }
  .footer {
    background-image: linear-gradient(#99a4b3, #ffffff);
  }
}
</style>
