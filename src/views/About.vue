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
        <div class="rightR col align-self-center text-center ">
          <div class="option">
            <div class="tap-login">
              <h2><a>Login</a></h2>
              <hr class="hr-main" />
            </div>
            <div class="tap-register">
              <h2 @click="toggleCom = true">Register</h2>
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
    reg
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
