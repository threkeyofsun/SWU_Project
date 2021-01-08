<template>
  <HomepageHeader />

  <div class="container">
    <p class="mt-5 mb-4 anounce-title">Activity Title</p>
    <div class="posting">
      <div class="badge user-badge">
        <img
          class=" profile-img  "
          src="/img/Mask-Group-25.png"
          alt="profile.img"
        />
        <p class="firstname d-inline px-2 ">Firstname</p>
        <p class="lastname  d-inline px-1">L.</p>
        <p class="time-badge">Jan 7, 2021</p>
      </div>
    </div>
    <hr />
    <!-- Detail -->
    <div class="detail my-4">
        <h3 class="start-date text-danger">Start Date: <span class="text-dark">May 12, 2021</span> </h3>
        <h3 class="start-date text-danger">At Place: <span class="text-dark">Ongkharak Campus, Faculty of Engineering, 601 H-Building </span> </h3>
      <p>Activity Details</p>

      <button type="button" class="apply-btn">APPLY</button>
    </div>
    <hr />
  </div>

  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";

export default {
  setup() {
    return { HomepageHeader, HPfooter };
  },
};
</script>

<style scoped>
.container {
  max-width: 680px;
  width: 100%;
}
.profile-img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.user-badge {
  font-weight: 400;
  font-size: 21px;
  color: #000000;
  border-radius: 0px;
  font-family: "THSaraban";
  padding: 0px 0px;
}
.user-badge .p {
  margin-top: 2px;
}
.time-badge {
  color: #636468;
  margin-top: -8px;
  margin-left: 47px;
  line-height: 0;
}
.anounce-title {
  font-size: 26px;
}
.detail{
    font-family: "THSaraban";
    font-size: 24px;
}


.apply-btn{
        border: 0px;
    
background-color: #118ab2;
    background-image: linear-gradient(319deg, #118ab2 0%, #06d6a0 37%, #ffd166 100%);
    color: white;
    font-size: 28px;
    border-radius: 18px;
    padding: 4px 8px 0px 16px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 16px;
}

@media screen and (max-width: 551.98) {
  container {
    margin: 0 24px;
  }
}

@media screen and (max-width: 727.98px) and (min-width: 552px) {
  container {
    margin: 0 24px;
  }
}

@media screen and (max-width: 903.98px) and (min-width: 728px) {
  container {
    margin: 0 48px;
  }
}

@media screen and (max-width: 1079.98px) and (min-width: 904px) {
  container {
    margin: 0 64px;
  }
}
</style>
