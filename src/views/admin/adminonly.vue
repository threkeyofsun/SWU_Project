<template>
  <div class="container mt-5 pt-3">
    <p class="mb-4 anounce-title text-center mt-5 text-md-start">{{ actDetail.name }}</p>
    <div class="posting">
      <div class="badge user-badge">
        <img
          class="profile-img"
          :src="actDetail.createdBy.profile_img"
          alt="profile.img"
        />
        <p class="firstname d-inline px-2 ps-4">{{ actDetail.createdBy.firstname }}</p>
        <p class="lastname d-inline px-1">{{ actDetail.createdBy.lastname }}</p>
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
    <p class="py-0 my-3">Attivity Description</p>
    <p class="lorem">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ actDetail.description }}
    </p>
    <button type="" class="cust-btn">
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
</template>

<script>
import HPfooter from "@/components/homepageFooter";
import axios from "axios";
import moment from "moment";

export default {
  setup() {
    return {
      HPfooter,
    };
  },
  data() {
    return {
      actDetail: {},
      information: {},
    };
  },
  // async created1() {
  //   const result = await axios.get("/users/profile");
  //   this.information = result.data;
  // },
  async created() {
    try {
      const result = await await axios.get(`/activities/${this.$route.params.id}`);
      this.actDetail = result.data;
      const res = await axios.get("/users/profile");
      this.$store.state.info = res.data;
      console.log(result);
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
  },
};
</script>

<style scoped>
    .sample-img{
    width: 100%;
    height: 345px;
    object-fit: cover;
    object-position: top;
  }
/* Start QA */
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
