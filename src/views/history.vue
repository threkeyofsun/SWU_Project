<template>
  <HomepageHeader />

  <div class="row ">
    <Sidebar />
    <!--End of  Sidebar -->

    <div class="col-md-9 col-12">
      <div class="container">
        <p class="mt-5 mb-4 anounce-title"> My Activities > History</p>
        <div class="posting">
          <div class="badge user-badge">
            <p class="firstname pt-4 ">
              <b>Upload Your Profile Picture Below</b>
            </p>

            <form
              @submit.prevent="sendFile"
              action="upload"
              method="post"
              enctype="multipar/form-data"
            >
              <label class="file-label profile-badge ">
                <input
                  type="file"
                  ref="file"
                  @change="profileImage"
                  class="file-input"
                />

                <span class="file-cta ">
                  <span class="file-label">
                    <div v-if="preview">
                      <img :src="preview" class="profile-img mb-3" />
                    </div>

                    <div v-else>
                      <img
                        class=" profile-img mb-3 "
                        src="/img/Mask-Group-25.png"
                        alt="profile.img"
                      />
                    </div>
                  </span>
                </span>
              </label>
              <div>
                <button
                  type="button"
                  class=" my-4 btn btn-light"
                  @click="onUpload"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
       
        
      </div>
    </div>
  </div>

  <HPfooter />
</template>

<script>
// import axios from "axios";
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import Sidebar from "../components/sliderbar";

export default {

  components: {
    HomepageHeader,
    HPfooter,
    Sidebar,
  },
  data() {
    return {

    };
  },
  async created() {
   
  },
  methods: {},

};
</script>

<style scoped>
/* Upload profile image */
input.file-input {
  display: none;
}
/*  */

.detail {
  font-family: "THSaraban";
}
.container {
  max-width: 680px;
  width: 100%;
  float: left;
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
.profile-badge {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.profile-badge:hover {
  cursor: pointer;
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
  font-size: 20px;
  color: rgb(184 46 46 / 70%);
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
