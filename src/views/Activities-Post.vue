<template>
  <HomepageHeader />

  <div v-if="loading" class="text-center">
    <div class="loadingio-spinner-ellipsis-zn4fhzwgb">
      <div class="ldio-yjhkrbku5e">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="container" v-cloak>
      <p class="mb-4 anounce-title text-center text-md-start">{{ actDetail.name }}</p>
      <div class="posting">
        <div class="badge user-badge">
          <img class="profile-img" :src="creator.profile_img" alt="profile_img" />
          <p class="firstname d-inline px-2 ps-4">{{ creator.firstname }}</p>
          <p class="lastname d-inline px-1">{{ creator.lastname }}</p>
          <p class="time-badge">{{ createAt() }}</p>
        </div>
      </div>
      <hr />
      <!-- Detail -->

      <p>Applicant Qualification</p>
      <div class="detail my-2">
        <div class="qualification">
          <div class="d-sm-inline">
            <p class="qa d-inline">Applicant Number :</p>
            <p class="mx-3 d-inline">{{ actDetail.member_amount }}</p>
          </div>
          <div class="d-sm-inline">
            <p class="qa d-inline">Activity Type :</p>
            <p class="mx-3 d-inline">{{ actDetail.type }}</p>
          </div>
          <div class="">
            <p class="qa d-inline">At Place :</p>
            <p class="mx-3 d-inline">
              {{ actDetail.location }}
            </p>
          </div>
          <div class="d-inline">
            <p class="qa d-inline">Start Date :</p>
            <p class="mx-3 d-inline">
              {{ StartDate() }} <span class="fw-bolder mx-1">At</span> {{ StartTime() }}
            </p>
          </div>
          <div class="d-sm-inline d-block">
            <p class="qa d-inline">End Date :</p>
            <p class="mx-3 d-inline">
              {{ EndDate() }} <span class="fw-bolder mx-1">At</span> {{ EndTime() }}
            </p>
          </div>
          <div>
            <div class="d-sm-inline d-block">
              <p class="qa d-inline">Faculty :</p>
              <p class="mx-3 d-inline">
                {{ actDetail.faculty }}
              </p>
            </div>
            <div class="d-sm-inline d-block">
              <p class="qa d-inline">Department :</p>
              <p class="mx-3 d-inline">
                {{ actDetail.department }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p class="py-0 my-3">Activity Description</p>
      <p class="lorem">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ actDetail.description }}
      </p>
      <div v-for="(activity, index) in recruitList" :key="(activity, index)">
        <button
          type=""
          class="cust-btn"
          @click="toApply"
          v-if="actDetail._id == recruitList[index]._id"
        >
          <span v-show="(something = true)"></span>
        </button>
      </div>
      <!-- Upcoming List -->
      <div v-for="(act, index) in participated" :key="(act, index)">
        <div type="" class="cust-btn" v-if="actDetail._id == participated[index]">
          <span v-show="(somethingI = true)"></span>
        </div>
      </div>
      <!--  -->
      <div v-show="something">
        <div class="btn draw-border bg-secondary text-white" disabled>Recruiting</div>
      </div>

      <div v-show="somethingI">
        <div class="btn draw-border bg-secondary text-white" disabled>
          Already Applied
        </div>
      </div>

      <button
        v-show="!something && !somethingI"
        type=""
        class="cust-btn"
        @click="toApply()"
      >
        <div class="btn draw-border">Apply HERE</div>
      </button>

      <hr />

      <div class="row">
        <div v-for="(image, index) in actDetail.images" :key="index" class="mx-0 col-12 col-sm-6">
          <div class="row mb-3 justify-content-center">
            <img :src="actDetail.images[index].url" class="col-12 rounded-0 sample-img"   />
            </div>
        </div>
      </div>
    </div>

    <HPfooter />
  </div>
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
      message: "David",
    };
  },
  data() {
    return {
      actDetail: {},
      information: {},
      creator: {},
      re_act: null,

      recruitedList: [],
      item: null,
      integers: 0,
      prevent: false,
      something: false,
      winner: "",
      participated: [],
      recruitList: [],
      somethingI: false,
      test: "a lot of work to compute this string!",
      loading: true,
    };
  },
  computed: {
    // firstWinner (){
    // this.winner == this.recruitList.find(recruitList => recruitList._id === this.actDetail._id);
    //   console.log(this.winner);
    //   console.log(this.recruitList);
    //   console.log(this.winner);
    //   return this.winner
    // }
  },
 

  async mounted() {
    try {
      // Get user's recruitment
      const { data } = await axios.get("/users/history/activities/recruited");
      this.re_act = data;
      this.recruitList = this.re_act.history.activity.recruited;
      this.participated = this.re_act.history.activity.participated;
      // this.recruitedList = data{};
      console.log(this.participated);

      const result = await axios.get(`/activities/${this.$route.params.id}`);
      this.actDetail = result.data;
      console.log(result);
      this.creator = this.actDetail.createdBy;
      //
           this.loading = false;

      // console.log(this.creator);
      const res = await axios.get("/users/profile");
      this.$store.state.info = res.data;
      // console.log(result); 

    } catch (err) {
      alert(err.result.data.error_message);
    }
  },
  methods: {
    createAt() {
      const thisMoment = moment(this.actDetail.createdAt).format("LL");
      return thisMoment;
    },

    StartDate() {
      const thisMoment = moment(this.actDetail.start_date).format("LL");
      return thisMoment;
    },
    StartTime() {
      const thisMoment = moment(this.actDetail.start_date).format("LT");
      return thisMoment;
    },
    EndDate() {
      const thisMoment = moment(this.actDetail.end_date).format("LL");
      return thisMoment;
    },
    EndTime() {
      const thisMoment = moment(this.actDetail.end_date).format("LT");
      return thisMoment;
    },
    // Apply Activity
    async toApply() {
      const result = await axios.patch(`/activities/${this.$route.params.id}`);
      console.log(result.data);
      alert("You have successfully apply the activity!");
      setTimeout(() => {
        this.$router.push("/event");
      }, 1000);
    },
  },
};
</script>

<style scoped type="text/css">
    .sample-img{
    width: 100%;
    height: 345px;
    object-fit: cover;
    object-position: top;
  }
@keyframes ldio-yjhkrbku5e {
  0% {
    transform: translate(29.64px, 113.62px) scale(0);
  }
  25% {
    transform: translate(29.64px, 113.62px) scale(0);
  }
  50% {
    transform: translate(29.64px, 113.62px) scale(1);
  }
  75% {
    transform: translate(113.62px, 113.62px) scale(1);
  }
  100% {
    transform: translate(197.60000000000002px, 113.62px) scale(1);
  }
}
@keyframes ldio-yjhkrbku5e-r {
  0% {
    transform: translate(197.60000000000002px, 113.62px) scale(1);
  }
  100% {
    transform: translate(197.60000000000002px, 113.62px) scale(0);
  }
}
@keyframes ldio-yjhkrbku5e-c {
  0% {
    background: #ffffff;
  }
  25% {
    background: #ffdbdb;
  }
  50% {
    background: #ffe7e7;
  }
  75% {
    background: #fff5f5;
  }
  100% {
    background: #ffffff;
  }
}
.ldio-yjhkrbku5e div {
  position: absolute;
  width: 19.76px;
  height: 19.76px;
  border-radius: 50%;
  transform: translate(113.62px, 113.62px) scale(1);
  background: #ffffff;
  animation: ldio-yjhkrbku5e 5.5555555555555545s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-yjhkrbku5e div:nth-child(1) {
  background: #fff5f5;
  transform: translate(197.60000000000002px, 113.62px) scale(1);
  animation: ldio-yjhkrbku5e-r 1.3888888888888886s infinite cubic-bezier(0, 0.5, 0.5, 1),
    ldio-yjhkrbku5e-c 5.5555555555555545s infinite step-start;
}
.ldio-yjhkrbku5e div:nth-child(2) {
  animation-delay: -1.3888888888888886s;
  background: #ffffff;
}
.ldio-yjhkrbku5e div:nth-child(3) {
  animation-delay: -2.7777777777777772s;
  background: #fff5f5;
}
.ldio-yjhkrbku5e div:nth-child(4) {
  animation-delay: -4.166666666666666s;
  background: #ffe7e7;
}
.ldio-yjhkrbku5e div:nth-child(5) {
  animation-delay: -5.5555555555555545s;
  background: #ffdbdb;
}
.loadingio-spinner-ellipsis-zn4fhzwgb {
  width: 247px;
  height: 247px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-yjhkrbku5e {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-yjhkrbku5e div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
[v-cloak] {
  display: none;
}
</style>

<style scoped>
[v-cloak] {
  display: none;
}
/*  */
/* Start QA */
.btn.draw-border.bg-secondary.text-white {
  cursor: context-menu;
}
/*  */
.cust-btn {
  box-shadow: none;
  border: none;
  padding: 6px 12px;
  display: block;
  background: white;
  width: 100%;
}
button:focus {
  outline: 0;
}
.detail {
  font-family: "THSaraban";
}
.qualification .qa {
  font-family: "THSaraban";
  font-size: large;
}

/* End of QA */
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

<style lang="scss" scoped>
//=== Drawing effect

@mixin btn-border-drawing(
  $color: #ccc,
  $hover: black,
  $width: 2px,
  $vertical: top,
  $horizontal: left,
  $duration: 0.25s
) {
  box-shadow: inset 0 0 0 $width $color;
  color: $color;
  transition: color $duration $duration/3;
  position: relative;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;

    #{$vertical}: 0;
    #{$horizontal}: 0;
  }

  &::before {
    $h-side: if($horizontal == "left", "right", "left");

    border-#{$vertical}-width: $width;
    border-#{$h-side}-width: $width;
  }

  &::after {
    $v-side: if($vertical == "top", "bottom", "top");

    border-#{$v-side}-width: $width;
    border-#{$horizontal}-width: $width;
  }

  &:hover {
    color: $hover;

    &::before,
    &::after {
      border-color: $hover;
      transition: border-color 0s, width $duration, height $duration;
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, $duration;
    }

    &::after {
      transition-delay: 0s, $duration, 0s;
    }
  }
}
.draw-border {
  @include btn-border-drawing(#58afd1, #ffe593, 4px, bottom, right);
}
.draw-border {
  width: 100%;
}

//=== Button styling, semi-ignore
.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.3rem "THSaraban";
  padding: 0.3em 3%;
  letter-spacing: 0.05rem;

  &:focus {
  }
}

//=== Pen styling, ignore
body {
  background: #1f1a25;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
