<template>
  <HomepageHeader />

  <div class="container">
    <p class="mt-5 mb-4 anounce-title">News Title</p>
    <div class="posting">
      <div class="badge user-badge">
        <img
          class=" profile-img  "
          src="/img/Mask-Group-25.png"
          alt="profile.img"
        />
        <p class="firstname d-inline px-2 ">Firstname</p>
        <p class="lastname  d-inline px-1">L.</p>
        <p class="time-badge">Jan 7, 2020</p>
      </div>
    </div>
    <hr />
    <!-- Detail -->
    <div class="detail my-4">
      <p>News Details</p>
    </div>
      <p class="lorem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
  .lorem{
    font-family: "THSaraban";
  }
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
