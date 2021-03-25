<template>
  <HomepageHeader />

  <section class="event-content">
    <div class="container">
      <div class="header-text mt-5 mt-md-0 mb-4 mb-sm-3 ps-1 ps-lg-3 px-xl-0 px-xxl-4 text-center text-lg-start">
        <router-link to="/event"
          ><p class="fs-3 d-inline mx-4 mx-xl-0  textheader">Activity</p></router-link
        >
        <p class="fs-3 d-inline mx-4 text-decoration-none" @click="$router.push('/news')">
          News
        </p>
      </div>

      <div class="row activity-card">
        <!-- one card -->

        <div class="col col-xl-4 col-md-6 my-4 m">
          <div class="card">
            <router-link to="/event/activities/:id">
              <span class="badge time-badge">Time</span>
              <span class="badge user-badge fw-light fs-6">
                <p class="firstname d-inline">Firstname</p>
                <p class="lastname d-inline px-2">L.</p>
                <img class="profile-img" v-bind:src="profile.img" alt="profile.img" />
              </span>

              <img src="/img/Mask-Group-25.png" class="card-img-top" alt="..." />

              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <p class="fs-6 fw-bold act-name">Activity Name....</p>
                    <br />
                    <p class="card-text float-start">Activity Description...…...</p>
                  </div>
                  <!-- right -->
                  <div class="col-3 float-end mt-2">
                    <i class="fas fa-user-check"></i>
                    <br />
                    <div class="applicants">
                      <span>12</span><span>/</span><span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="col col-xl-4 col-md-6 my-4 ">
          <div class="card">
            <router-link to="/event/activities/:id">
              <span class="badge time-badge">Time</span>
              <span class="badge user-badge fw-light fs-6">
                <p class="firstname d-inline">Firstname</p>
                <p class="lastname d-inline px-2">L.</p>
                <img class="profile-img" v-bind:src="profile.img" alt="profile.img" />
              </span>

              <img src="/img/photo-1003-full.jpeg" class="card-img-top" alt="..." />

              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <p class="fs-6 fw-bold act-name">Activity Name....</p>
                    <br />
                    <p class="card-text float-start">Activity Description...…...</p>
                  </div>
                  <!-- right -->
                  <div class="col-3 float-end mt-2">
                    <i class="fas fa-user-check"></i>
                    <br />
                    <div class="applicants">
                      <span>12</span><span>/</span><span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- /img/Group-61443.png -->
        <div class="col col-xl-4 col-md-6 my-4">
          <div class="card">
            <router-link to="/event/activities/:id">
              <span class="badge time-badge">Time</span>
              <span class="badge user-badge fw-light fs-6">
                <p class="firstname d-inline">Firstname</p>
                <p class="lastname d-inline px-2">L.</p>
                <img class="profile-img" v-bind:src="profile.img" alt="profile.img" />
              </span>

              <img src="/img/Group-61443.png " class="card-img-top" alt="..." />

              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <p class="fs-6 fw-bold act-name">Activity Name....</p>
                    <br />
                    <p class="card-text float-start">Activity Description...…...</p>
                  </div>
                  <!-- right -->
                  <div class="col-3 float-end mt-2">
                    <i class="fas fa-user-check"></i>
                    <br />
                    <div class="applicants">
                      <span>12</span><span>/</span><span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="col col-xl-4 col-md-6 my-4">
          <div class="card">
            <router-link to="/event/activities/:id">
              <span class="badge time-badge">Time</span>
              <span class="badge user-badge fw-light fs-6">
                <p class="firstname d-inline">Firstname</p>
                <p class="lastname d-inline px-2">L.</p>
                <img class="profile-img" v-bind:src="profile.img" alt="profile.img" />
              </span>

              <img src="/img/3505624.png " class="card-img-top" alt="..." />

              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <p class="fs-6 fw-bold act-name">Activity Name....</p>
                    <br />
                    <p class="card-text float-start">Activity Description...…...</p>
                  </div>
                  <!-- right -->
                  <div class="col-3 float-end mt-2">
                    <i class="fas fa-user-check"></i>
                    <br />
                    <div class="applicants">
                      <span>12</span><span>/</span><span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

         <div class="col col-xl-4 col-md-6 my-4">
          <div class="card">
            <router-link to="/event/activities/:id">
              <span class="badge time-badge">Time</span>
              <span class="badge user-badge fw-light fs-6">
                <p class="firstname d-inline">Firstname</p>
                <p class="lastname d-inline px-2">L.</p>
                <img class="profile-img" v-bind:src="profile.img" alt="profile.img" />
              </span>

              <img src="/img/whale.jpg" class="card-img-top" alt="..." />

              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <p class="fs-6 fw-bold act-name">Activity Name....</p>
                    <br />
                    <p class="card-text float-start">Activity Description...…...</p>
                  </div>
                  <!-- right -->
                  <div class="col-3 float-end mt-2">
                    <i class="fas fa-user-check"></i>
                    <br />
                    <div class="applicants">
                      <span>12</span><span>/</span><span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

         <div class="col col-xl-4 col-md-6 my-4">
          <div class="card">
            <router-link to="/event/activities/:id">
              <span class="badge time-badge">Time</span>
              <span class="badge user-badge fw-light fs-6">
                <p class="firstname d-inline">Firstname</p>
                <p class="lastname d-inline px-2">L.</p>
                <img class="profile-img" v-bind:src="profile.img" alt="profile.img" />
              </span>

              <img src="/img/Mask-Group-28.png" class="card-img-top" alt="..." />

              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <p class="fs-6 fw-bold act-name">Activity Name....</p>
                    <br />
                    <p class="card-text float-start">Activity Description...…...</p>
                  </div>
                  <!-- right -->
                  <div class="col-3 float-end mt-2">
                    <i class="fas fa-user-check"></i>
                    <br />
                    <div class="applicants">
                      <span>12</span><span>/</span><span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";

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
    };
  },
};
</script>

<style scoped>
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
