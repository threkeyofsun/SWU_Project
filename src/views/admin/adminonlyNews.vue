<template>
  <div class="container">
    <p class="mt-5 mb-4 anounce-title text-uppercase">
      {{ NewsDetail.title }}
    </p>
    <div class="posting">
      <div class="badge user-badge">
        <img class="profile-img" :src="creator.profile_img" alt="profile.img" />
        <p class="firstname d-inline px-2">{{ creator.firstname }}</p>
        <p class="lastname d-inline px-1">{{ creator.lastname }}</p>
        <p class="time-badge">{{createAt() }}</p>
      </div>
    </div>
    <hr />
    <!-- Detail -->
    <div class="detail my-4">
      <p>News Details</p>
      <p class="lorem">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
          NewsDetail.description
        }}
      </p>
    </div>
    <hr />
  </div>

  <HPfooter />
</template>

<script>
import HPfooter from "@/components/homepageFooter";
import axios from "axios";
import moment from "moment";

export default {
  setup() {
    return { HPfooter };
  },
  data() {
    return {
      NewsDetail:{},
      creator:{},
    };
  },
  async mounted() {
    const res = await axios.get(`/news/${this.$route.params.id}`);
    this.NewsDetail = res.data;
    console.log(res)
    this.creator = res.data.createdBy;
  },
  methods: {
    createAt() {
      const thisMoment = moment(this.NewsDetail.createdAt).format("LL");
      return thisMoment;
    },
  },
};
</script>

<style scoped>
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
  margin-left: 93px;
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
