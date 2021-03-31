<template>
  <headerTemp />

  <div class="about-content container-fluid">
    <div class="row">
      <div class="col d-none d-xl-block ">
        <div class="left-content">
          <img
            src="../image/activity-image.png"
            class="img-fluid leftimage"
            alt="Responsive image"
          />
        </div>
      </div>

      <!-- Login------------------------------------------------- -->
      <div class="rightR col align-self-center text-center ">
        <div class="option">
          <div class="tap-login">
            <h2><router-link to="/login">Login</router-link></h2>
            <hr class="hr-main" />
          </div>
          <div class="tap-register">
            <h2><router-link to="/register">Register</router-link></h2>
            <hr class="hr-main1" />
          </div>
        </div>
        <reg />
      </div>
    </div>
  </div>

  <foot />
</template>

<script>
import headerTemp from "../components/headerTemp";
import foot from "../components/footer";
import reg from "../components/reg";

export default {
  name: "About",
  components: {
    headerTemp,
    foot,
    reg,
  },
  data() {
    return {
     
    };
  },
};
</script>

<style scoped>
.tap-login h2 a {
  color: #6364686e;
}

.option .hr-main {
  background-color: #79b6a78a;
}
hr.hr-main1 {
  box-shadow: 6px 5px 6px 0px rgba(97, 75, 75, 0.49);
}

@media only screen and (max-width: 575.98px) {
  .tap-register h2 a {
    font-weight: bolder;
  }
}
</style>
