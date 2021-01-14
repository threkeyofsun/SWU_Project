<template>
  <HomepageHeader />
<section class="sidebar">
<router-link to="">profile</router-link>
</section>
  <div class="container">
    <p class="mt-5 mb-4 anounce-title">User Detail</p>
    <div class="posting">
      <div class="badge user-badge">
        <img
          class=" profile-img  "
          src="/img/Mask-Group-25.png"
          alt="profile.img"
        />
        <p class="firstname pt-4 "><b> Upload your image here</b></p>
        <button type="button" class="btn btn-light">Upload</button>
      </div>
    </div>
    <hr />
    <!-- Detail -->
    
    <div class="detail my-4 ml-md-5">
      <h5 >Name: &nbsp;&nbsp;&nbsp; {{ user.first_name }}&nbsp; &nbsp;  {{ user.last_name }}</h5>
      <h5 class="d-sm-inline">Faculty:&nbsp;&nbsp;&nbsp; {{ user.faculty }} </h5>
      <span class="d-sm-inline d-none mx-4"></span>
      <h5 class="d-sm-inline"> Major:&nbsp;&nbsp;&nbsp; {{ user.majors }}</h5>
      <h5>Email: &nbsp;&nbsp;&nbsp; {{ user.email }}</h5>
      <h5>Phone-Number:&nbsp;&nbsp;&nbsp;{{ user.phone_number }}</h5>
      <h5>Status:&nbsp;&nbsp;&nbsp;{{ user.s_type }}</h5>
      <h5>{{ user.s_type }}-Id: {{ user.s_id }}</h5>
    </div>
    <hr />
  </div>

  <HPfooter />
</template>

<script>
import axios from "axios";
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
export default {
    name: 'ProductDetailPage',
    components: {  
      HomepageHeader,
      HPfooter,
    },
    data() {
      return {
        user: {}
      };
    },
    async created() {
      const result = await axios.get(`/api/user/${this.$route.params.s_id}`);
      this.user = result.data;
    }
};
</script>

<style scoped>
.sidebar{
  position: fixed;
  background-color: #f8ca00;
  height: 100%;
  
}
.detail{
  font-family: "THSaraban";
}
.container {
  max-width: 680px;
  width: 100%;
}
.posting {
  text-align-last: center;
}
.profile-img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
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
