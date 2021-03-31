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
      <div class="col align-self-center text-center ">
        <h3 class="success">
          Your registration has been successful! <br />Click
          <router-link to="/login"><span class="underline"> HERE</span></router-link>
          to Sign-in
        </h3>
      </div>
    </div>
  </div>

  <foot />
</template>

<script>
import headerTemp from "../components/headerTemp";
import foot from "../components/footer";

export default {
  name: "login",
  components: {
    headerTemp,
    foot,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.success {
  font-size: 3vw;
  font-family: "THSaraban";
}
.success span {
  color: #a53b3b;
  font-family: "THSarabanBold";
}
.underline {
  border-bottom: 2px solid currentColor;
  display: inline-block;
  line-height: 0.85;
}
h3.success {
  margin: 70px 0px;
}
</style>
