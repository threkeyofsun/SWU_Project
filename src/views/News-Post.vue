<template>
  <HomepageHeader />

  <div class="container">
    <p class="mt-3 mb-4 anounce-title text-center text-md-start"> {{$store.state.newsData.title}} </p>
    <div class="posting">
      <div class="badge user-badge">
        <img class="profile-img" :src="crePro.url" alt="profile.img" />
        <p class="firstname d-inline px-2"> {{creator.firstname}} </p>
        <p class="lastname d-inline px-1">{{creator.lastname}}</p>
        <p class="time-badge"> {{createAt()}} </p>
      </div>
    </div>
    <hr />
    <div class="detail my-4">
      <p>News Details</p>
    </div>
    <p class="lorem">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$store.state.newsData.description}}
    </p>
    <hr />
    <div class="mb-5">
      <div class="row">
        <div v-for="(image, index) in $store.state.newsData.images" :key="index" class="mx-0 col-12 col-sm-6">
          <div class="row mb-3 justify-content-center">
            <img :src="$store.state.newsData.images[index].url" class="col-12 rounded-0 sample-img"   />
            </div>
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
import moment from "moment";

export default {
  setup() {
    return {
      HomepageHeader,
      HPfooter,
      creator: {},
      newsDetail:{},
      test:"",
      crePro:'',
    };
  },
  async mounted()  {
    const newsdata = await axios.get(`/news/${this.$route.params.id}`);
    this.$store.state.newsData = newsdata.data;
    this.creator = this.$store.state.newsData.createdBy;  
    this.crePro = this.creator.profile_img;
    console.log(this.creator )
    console.log(this.creator )
    console.log(newsdata);
    console.log(this.$store.state.newsData);
    const res = await axios.get("/users/profile");
      this.$store.state.info = res.data;
      this.$store.state.profileimg = res.data.profile_img;

  },
  methods: {
    createAt() {
      const thisMoment = moment(this.$store.state.newsData.createdAt).format("LL");
      return thisMoment;
    },
    async endActivity() {
      const result = await axios.put(`/events/announcements/${this.$route.params.id}`, this.anInfo);
      this.anInfo = result.data;
      alert("Updated");
      this.$router.push({ name: "adminpage" });
      console.log(this.anInfo);

    },
  },
};
</script>

<style scoped>
  .sample-img {
  width: 100%;
  height: 345px;
  object-fit: cover;
  object-position: top;
}
.img-act {
  width: 100%;
  object-fit: cover;
  padding: 2% 0%;
}
.lorem {
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
