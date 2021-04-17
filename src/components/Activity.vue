<template>
  <div class="row activity-card">

<div v-if="act.status === 'Approve'">
  {{act[0].name}}
</div>
    <div class="col mt-5">
      <div class="card">
        <span class="badge time-badge ">Time</span>
        <span class="badge user-badge fw-light fs-6">
          <p class="firstname d-inline ">Firstname</p>
          <p class="lastname  d-inline px-2">L.</p>
          <img
            class=" profile-img  "
            v-bind:src="profile.img"
            alt="profile.img"
          />
        </span>

        <img src="/img/Mask-Group-25.png" class="card-img-top" alt="..." />

        <div class="card-body">
          <div class="row">
            <div class="col-9">
              <p class="fs-6 fw-bold act-name">
                Activity Name....
              </p>
              <br />
              <p class="card-text float-start">Activity Description...…...</p>
            </div>
            <!-- right -->
            <div class="col-3 float-end mt-2">
              <i class="fas fa-user-check "></i>
              <br />
              <div class="applicants">
                <span>12</span><span>/</span><span>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col mt-5">
      <div class="card" >
        <span class="badge time-badge ">Time</span>
        <span class="badge user-badge fw-light fs-6">
          <p class="firstname d-inline ">Firstname</p>
          <p class="lastname  d-inline px-2">L.</p>
          <img
            class=" profile-img  "
            v-bind:src="profile.img"
            alt="profile.img"
          />
        </span>

        <img src="/img/Mask-Group-25.png" class="card-img-top" alt="..." />

        <div class="card-body">
          <p class="fs-6  fw-bold act-name">
            Activity Name....
          </p>
          <br />
          <p class="card-text float-start">Activity Description...…...</p>
        </div>
      </div>
    </div>
    <div class="col mt-5">
      <div class="card">
        <span class="badge time-badge ">Time</span>
        <span class="badge user-badge fw-light fs-6">
          <p class="firstname d-inline ">Firstname</p>
          <p class="lastname  d-inline px-2">L.</p>
          <img
            class=" profile-img  "
            v-bind:src="profile.img"
            alt="profile.img"
          />
        </span>

        <img src="/img/photo-1003-full.jpeg" class="card-img-top" alt="..." />

        <div class="card-body">
          <p class="fs-6 fw-bold act-name">
            Activity Name....
          </p>
          <br />
          <p class="card-text float-start">Activity Description...…...</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row activity-card">
    <div class="col mt-5">
      <div class="card">
        <span class="badge time-badge ">Time</span>
        <span class="badge user-badge fw-light fs-6">
          <p class="firstname d-inline ">Firstname</p>
          <p class="lastname  d-inline px-2">L.</p>
          <img
            class=" profile-img  "
            v-bind:src="profile.img"
            alt="profile.img"
          />
        </span>

        <img src="/img/Mask-Group-25.png" class="card-img-top" alt="..." />

        <div class="card-body">
          <div class="row">
            <div class="col-9">
              <p class="fs-6 fw-bold act-name">
                Activity Name....
              </p>
              <br />
              <p class="card-text float-start">Activity Description...…...</p>
            </div>
            <!-- right -->
            <div class="col-3 float-end mt-2">
              <i class="fas fa-user-check "></i>
              <br />
              <div class="applicants">
                <span>12</span><span>/</span><span>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col mt-5">
      <div class="card" >
        <span class="badge time-badge ">Time</span>
        <span class="badge user-badge fw-light fs-6">
          <p class="firstname d-inline ">Firstname</p>
          <p class="lastname  d-inline px-2">L.</p>
          <img
            class=" profile-img  "
            v-bind:src="profile.img"
            alt="profile.img"
          />
        </span>

        <img src="/img/Mask-Group-25.png" class="card-img-top" alt="..." />

        <div class="card-body">
          <p class="fs-6  fw-bold act-name">
            Activity Name....
          </p>
          <br />
          <p class="card-text float-start">Activity Description...…...</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";

export default {
  
  props: {},
  data() {
    return {
      page: 0,
      pages: [],
      perPage: 5,
      displayedActivitys: [],
      profile: {
        img:
          "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      },
      act:{},
    };
  },
  async created() {
    try {
      const result = await axios.get("/activities");
      this.act = result.data;
      console.log(this.act);
    } catch (err) {
      alert(err.result.data.error_message);
    }
  },
};
</script>

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
}
img.card-img-top {
  object-position: top;
  object-fit: cover;
  height: 265px;
  width: 360px;
  border-radius: 23px 0px 23px 23px;
}
.time-badge {
  margin: 22px 30px;
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
