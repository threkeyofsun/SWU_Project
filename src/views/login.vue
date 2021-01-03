<template>
  <headerTemp />

  <div class="about-content container-fluid">
    <div class="row">
      <div class="col d-none d-md-block ">
        <div class="left-content">
          <img
            src="../image/activity-image.png"
            class="img-fluid leftimage"
            alt="Responsive image"
          />
        </div>
      </div>

      <!-- Login------------------------------------------------- -->
      <div class="col align-self-center text-center mb-5">
        <div class="option">
          <div class="tap-login">
            <h2><router-link to="/">Login</router-link></h2>
            <hr class="hr-main" />
          </div>
          <div class="tap-register ">
            <h2><router-link to="/register">Register</router-link></h2>
            <hr class="hr-main1" />
          </div>
        </div>

        <!-- <button v-on:click="isHidden = true">Hide the text below</button>
  <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>
      <h1 v-if="!isHidden">Hide me on click event!</h1> -->
        <log />
      </div>
    </div>
  </div>

  <foot />
</template>

<script>
import headerTemp from "../components/headerTemp";
import foot from "../components/footer";
import log from "../components/log";

export default {
  components: {
    headerTemp,
    foot,
    log,
  },
  methods: {},
  data() {
    return {
      isHidden: true,
    };
  },
};
</script>

<style scoped>
.tap-register h2 a {
  color: #6364686e;
}
.option .hr-main1 {
  background-color: #79b6a78a;
}

hr.hr-main {
  box-shadow: 6px 5px 6px 0px rgba(97, 75, 75, 0.49);
}

@media only screen and (max-width: 575.98px) {
  .tap-login h2 a {
    font-weight: bolder;
  }
  .option .hr-main {
    width: 135px;
    height: 3px;
    margin: 0px;
    background-color: #629084;
  }
  .option .hr-main1 {
    width: 135px;
    height: 3px;
    margin: 0px;
    background-color: #79b6a78a;
  }
}
</style>

<style>
.hr-head + .align-self-center div:first-of-type {
  border-left: solid 7px #d26760;
  border-right: solid 7px #d26760;
  background-color: #a5a5a563;
}
.hr-head + .align-self-center div:first-of-type a {
  color: white;
}
</style>
