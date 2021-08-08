<template>
  <HomepageHeader />
  <div v-if="$store.state.eventLoading" class="text-center my-5">
    <div class="loadingio-spinner-ellipsis-zn4fhzwgb">
      <div class="loadingio-spinner-ellipsis-e2dlnyc4ytc">
        <div class="ldio-8xpx2o6sd04">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <section class="event-content"  v-if="!$store.state.eventLoading">
    <div class="container">
      <div class="header-text  mt-5 mt-md-0 mb-4 mb-sm-3 ps-1 ps-lg-3 px-xl-0 px-xxl-4 text-center text-lg-start">
        <router-link to="/event"><p class="fs-3 d-inline  mx-4 mx-xl-0  " >Activity</p></router-link>
        <p class="fs-3 d-inline mx-4 ps-1 text-decoration-none textheader" @click="$router.push('/news')">News</p>
      </div>

<div v-for="(news, index) in $store.state.news" :key="(news, index)"> 
  <div class="postloop ">
    <router-link :to="{ path: '/event/news/' + news._id }">
    <div class="card text-white  ">
      <span class="decorate-line"></span>
      <span class="decorate-line2"></span>
      <span class="badge time-badge "> {{createAt()}} </span>
      <span class="badge user-badge fw-light ">
        <img
          class=" profile-img  "
          v-bind:src="news.createdBy.profile_img.url"
          alt="profile.img"
        />

        <p class="firstname d-inline mx-0 ms-md-2">{{news.createdBy.firstname}}</p>
        <!-- <p class="lastname  d-inline ">{{news.createdBy.lastname}}</p> -->
      </span>
      <img :src="news.cover_img.url" class="card-img  " alt="..." />
      <div class="card-img-overlay mx-auto">
        <h3 class="card-title">{{news.name}}</h3>
        <p class="card-text">
          {{news.short_description}}
        </p>
      </div>
    </div>
</router-link>
  </div>
</div>

    </div>
  </section>
  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import axios from "axios";
import moment from "moment";


export default {
 
  props: {},
  components: {
    HomepageHeader,
    HPfooter,
  },
  data() {
    return {
      page: 0,
      pages: [],
      perPage: 5,
      displayedActivitys: [],
      profile: {
        img: [
          "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcBFvwWwx5kb2YQ3-hgYq_LuBMzL_mcm6Ww&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTj3K9YhP2F27Z6hMGZm6gKSuRNF-B07GQWg&usqp=CAU",
        ],
      },
      allNews:{},
      num : 0,
      pendingEvent:[],
      loading: true,

    };
  },
  async mounted()  {
    const result = await axios.get(`/news/`);
    console.log(result.data)
    this.$store.state.news = result.data;
    const res = await axios.get("/users/profile");
      this.$store.state.info = res.data;
      this.$store.state.profileimg = res.data.profile_img;
      this.$store.state.eventLoading = false;

  },
  methods: {
    createAt() {
      const thisMoment = moment(this.$store.state.news.createdAt).format("LL");
      return thisMoment;
    },
  },
};
</script>
<style type="text/css">
  @keyframes ldio-8xpx2o6sd04 {
    0% {
      transform: translate(5.699999999999999px, 44.459999999999994px) scale(0);
    }
    25% {
      transform: translate(5.699999999999999px, 44.459999999999994px) scale(0);
    }
    50% {
      transform: translate(5.699999999999999px, 44.459999999999994px) scale(1);
    }
    75% {
      transform: translate(44.459999999999994px, 44.459999999999994px) scale(1);
    }
    100% {
      transform: translate(83.22px, 44.459999999999994px) scale(1);
    }
  }
  @keyframes ldio-8xpx2o6sd04-r {
    0% {
      transform: translate(83.22px, 44.459999999999994px) scale(1);
    }
    100% {
      transform: translate(83.22px, 44.459999999999994px) scale(0);
    }
  }
  @keyframes ldio-8xpx2o6sd04-c {
    0% {
      background: #85a2b6;
    }
    25% {
      background: #fdfdfd;
    }
    50% {
      background: #dce4eb;
    }
    75% {
      background: #bbcedd;
    }
    100% {
      background: #85a2b6;
    }
  }
  .ldio-8xpx2o6sd04 div {
    position: absolute;
    width: 25.08px;
    height: 25.08px;
    border-radius: 50%;
    transform: translate(44.459999999999994px, 44.459999999999994px) scale(1);
    background: #85a2b6;
    animation: ldio-8xpx2o6sd04 5.5555555555555545s infinite cubic-bezier(0, 0.5, 0.5, 1);
  }
  .ldio-8xpx2o6sd04 div:nth-child(1) {
    background: #bbcedd;
    transform: translate(83.22px, 44.459999999999994px) scale(1);
    animation: ldio-8xpx2o6sd04-r 1.3888888888888886s infinite cubic-bezier(0, 0.5, 0.5, 1),
      ldio-8xpx2o6sd04-c 5.5555555555555545s infinite step-start;
  }
  .ldio-8xpx2o6sd04 div:nth-child(2) {
    animation-delay: -1.3888888888888886s;
    background: #85a2b6;
  }
  .ldio-8xpx2o6sd04 div:nth-child(3) {
    animation-delay: -2.7777777777777772s;
    background: #bbcedd;
  }
  .ldio-8xpx2o6sd04 div:nth-child(4) {
    animation-delay: -4.166666666666666s;
    background: #dce4eb;
  }
  .ldio-8xpx2o6sd04 div:nth-child(5) {
    animation-delay: -5.5555555555555545s;
    background: #fdfdfd;
  }
  .loadingio-spinner-ellipsis-e2dlnyc4ytc {
    width: 114px;
    height: 114px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-8xpx2o6sd04 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-8xpx2o6sd04 div {
    box-sizing: content-box;
  }
  /* generated by https://loading.io/ */
  </style>
<style scoped>
   .textheader{
    color: #e9a1a1;
  }
.header-text {
  font-family: "Srinakharinwirot";
}
.has-dropdown li{
  opacity: 0.2;
}
.is-open li{
  opacity: 1;
}
</style>
<style scoped>
.card {
  border-radius: 50px;
  border: 1px solid rgb(255, 255, 255);
  margin: 3rem auto;
}
.card-img {
  border-radius: 50px;
  max-height: 414px;
  object-position: center;
  object-fit: cover;
}
.card-img-overlay {
  z-index: 1;
  top: 51%;
  right: auto;
  left: 15%;
  padding: 0 6rem 0 22px;
  font-family: "Srinakharinwirot";
}

.card-img-overlay p {
  font-family: "THSaraban";
  font-size: 32px;
}

.card:after {
  z-index: 0;
  border-radius: 50px;
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 0%) 0%,
    rgb(255 255 255 / 3%) 3%,
    rgb(112 112 112 / 75%) 90%,
    rgb(112 112 112 / 75%) 100%
  );
}
.decorate-line {
  width: 4px;
  height: 86%;
  z-index: 2;
  right: 7%;
  position: absolute;
  background-color: #fffffffb;
  color: #636468;
}
.decorate-line2 {
  width: 93%;
  height: 4px;
  z-index: 2;
  right: -1px;
  top: 13%;
  position: absolute;
  background-color: #fffffffb;
  color: #636468;
}

/* Time and User Badge */
.time-badge {
  padding: 10px 15px;
  border-radius: 0;
  left: 7%;
  top: 13%;
  position: absolute;
  background-color: #ffffff;
  color: #636468;
  font-family: "THSaraban";
  font-size: 36px;
}
.user-badge {
  font-size: 16px;
  z-index: 2;
  left: 0;
  bottom: 25%;
  position: absolute;
  background-color: #ffffffe0;
  color: #000000;
  border-radius: 0px;
  font-family: "THSaraban";
  padding: 7px 7px;
}
.profile-img {
  border-radius: 50%;
  width: 55px;
  height: 55px;
}

/* XXL */
@media screen and (max-width: 1400px) {
  .card-img {
    max-height: 348px;
  }
}
/* XL */
@media screen and (max-width: 1200px) {
  .card-img {
    max-height: 315px;
  }
}
@media only screen and (max-width: 992px) {
  .card-img-overlay {
    bottom: 1px;
    left: 17%;
    padding: 1rem 2rem;
  }
  .card-img-overlay p {
    font-size: 25px;
    line-height: normal;
  }
  .time-badge {
    font-size: 22px;
  }
  .card-img {
    max-height: 243px;
  }
}

@media only screen and (max-width: 768px) {
  .card-img {
    max-height: 174px;
  }
  .card-img-overlay {
    bottom: 0px;
    padding: 0rem 2rem 1% 10%;
    left: 15%;
    line-height: 1;
  }
  .card-img-overlay h3 {
    font-size: 24px;
    margin-bottom: 4px;
    margin-left: 15px
  }
  .card-img-overlay p {
    font-size: 16px;
    line-height: normal;
  }
  .user-badge {
    padding: 2px 5px;
    font-size: 15px;
  }
  .user-badge p {
    padding: 0px 2px;
  }
  .profile-img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
  .card {
    border-radius: 25px;
  }
  .card-img {
    border-radius: 25px;
  }
  .card:after {
    border-radius: 25px;
  }
}
/* Extraaaaaaaaaaaa */
@media only screen and (max-width: 525px) {
  .card-img {
     max-height: 157px;
  }
}

@media only screen and (max-width: 450px) {
  .card-img {
    max-height: 106px;
  }
  .card-img-overlay {
    bottom: 9%;
    left: 26%;
    padding: 0rem 9% 0rem 0rem;
    font-size: 12px;
  }
  .user-badge {
    padding: 2px 0px;
    font-size: 12px;
  }
  .user-badge p {
    padding: 0px 2px;
  }
  .profile-img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .time-badge {
    padding: 4px 7px;
    font-size: 16px;
  }
  .card-img-overlay h3 {
    font-size: 16px;
    margin-bottom: 0;
  }
  .card-img-overlay p {
    font-size: 12px;
    line-height: 0.9;
    margin-left: 16px;
  }
}
</style>
