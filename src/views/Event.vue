<template>
  <HomepageHeader />

  <section class="event-content">
    <div class="container">
      <div
        class="header-text mt-5 mt-md-0 mb-4 mb-sm-3 ps-1 ps-lg-3 px-xl-0 px-xxl-4 text-center text-lg-start"
      >
        <router-link to="/event"
          ><p class="fs-3 d-inline mx-4 mx-xl-0 textheader">Activity</p></router-link
        >
        <p class="fs-3 d-inline mx-4 text-decoration-none" @click="$router.push('/news')">
          News
        </p>
        <!-- Filter -->
        <input
          type="text"
          class="d-inline float-md-end mt-4 mt-md-0 float-none"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Search for an Activity names.."
          title="Type in a name"
        />
        <!-- Filter -->
      </div>
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
      <div class="row activity-card" v-else>
        <!-- one card -->
        <div
          class="card col-xl-4 col-md-6 my-4 mx-4"
          v-for="(activity, index) in $store.state.event"
          :key="(activity, index)"
        >
          <router-link :to="{ path: '/event/activities/' + activity._id }">
            <span class="badge time-badge">{{ createAt(activity.createdAt) }}</span>
            <span class="badge user-badge fw-light fs-6">
              <p class="firstname d-inline">{{ activity.createdBy.firstname }}</p>
              <p class="lastname d-inline px-2">{{ activity.createdBy.lastname }}</p>
              <img
                class="profile-img"
                v-bind:src="activity.createdBy.profile_img"
                alt="profile.img"
              />
            </span>
            <img :src="activity.cover_img.url" class="card-img-top" alt="..." />

            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <p class="fs-6 fw-bold act-name">{{ activity.title }}</p>
                  <br />
                  <p class="card-text float-start">Faculty: {{ activity.faculty }}</p>
                </div>
                <!-- right -->
                <div class="col-3 float-end mt-2">
                  <i class="fas fa-user-check"></i>
                  <br />
                  <div class="applicants">
                    <span>{{ activity.member_list.length }}</span
                    ><span>/</span><span>{{ activity.member_amount }}</span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!--  -->
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
  components: {
    HomepageHeader,
    HPfooter,
  },
  data() {
    return {
      profile: {
        img: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      },
      act: {},
      re_act: null,
      recruitment_act: null,
      recruitList: [],
      // recruited:[],
      cover_images:[],
      i:1,
      text:[]
    };
  },
  computed: {
    recruited() {
      return this.recruitList.some((item) => item.id === this.product.id);
    },
  },

  async mounted() {
    // User's Event
    // list
    const { data } = await axios.get("/users/history/activities/recruited");
    this.re_act = data;
    this.recruitment_act = this.re_act.history.activity.recruited;
    //
    // const { data: {history: {activity: {recruitment:recruitment}}} } = await axios.get('users/history/recruitment');
    // this.recruitList = recruitment;
    // console.log(recruitment);
    //

    // get Event
    const event = await axios.get("/activities/");
    this.$store.state.event = event.data;
    this.act = event.data;
    // this.cover_images = event.data.cover_image;
    // console.log(event.data[3].cover_img);
    // console.log(this.$store.state.event);


  // for (this.i = 0; this.i < event.data.length; this.i++) {
  // this.$store.state.cover_image += event.data[this.i].cover_img.url;
  // }

    this.$store.state.eventLoading = false;
    // User
    const resulted = await axios.get("/users/profile");
    this.$store.state.info = resulted.data;
    this.$store.commit("setAuthentication", true);
  },
  methods: {
    createAt(date) {
      const thisMoment = moment(date).format("LL");
      return thisMoment;
    },
  },
};
</script>

<style scoped>
#myInput {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg);
  background-position: 2px -2px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 12px 48px 12px 58px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  background-size: 17%;
  width: auto;
}

/* End of filter */
.header-text .fs-3 {
  cursor: pointer;
}
.textheader {
  color: #e9a1a1;
}
a.router-link-active.router-link-exact-active {
  padding: 0px;
}
a.linknews {
  text-decoration: none !important;
}
.header-text {
  font-family: "Srinakharinwirot";
}
.has-dropdown li {
  opacity: 0.2;
}
.is-open li {
  opacity: 1;
}
</style>

<style scoped>
/* Card Custom */
.card {
  border-radius: 23px 0px 23px 23px;
  box-shadow: 0px 0px 28px #c6b8b8, -20px -20px 28px #ffffff;
  border: none;
  width: 18rem;
}
.activity-card {
  text-align: -webkit-center;
  place-content: center;
}
img.card-img-top {
  object-position: top;
  object-fit: cover;
  height: 265px;
  width: 18rem;
  border-radius: 23px 0px 23px 23px;
  margin-left: -15px;
}
.time-badge {
  margin: 10px 0px;
  position: absolute;
  background-color: #ffffffba;
  color: #636468;
}
.user-badge {
  right: 0;
  top: 45px;
  position: absolute;
  background-color: #ffffff8c;
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

/* Card Text */
.act-name {
  float: left;
}
br + p {
  font-family: "THSaraban";
  clear: left;
  margin-left: 35px;
}
.applicants {
  font-family: "THSaraban";
}
.fa-user-check {
  margin-left: 10px;
}
/* Optional */
/* .card {
    filter: grayscale(80%);
    opacity: 0.5;
} */

/* Responsive MD to LG */
@media only screen and (max-width: 992px) {
  .activity-card {
    margin: 0 -45px;
  }
}
@media only screen and (max-width: 380px) {
  .card {
    width: 15rem;
  }
  img.card-img-top {
    width: 15rem;
    height: 11rem;
  }
}
</style>
