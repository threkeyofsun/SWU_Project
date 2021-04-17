<template>
  <HomepageHeader />

  <div class="row topspace">
    <Sidebar />
    <!--End of  Sidebar -->

    <div class="col-md-9 col-12">
      <div class="container">
        <p class="mt-5 mb-4 anounce-title">User Detail</p>
        <!-- <h1>{{ user.lastname.slice(0, 1).toUpperCase()}}.</h1> -->
        <!-- <p>{{ getCookie }}</p> -->

        <div class="posting">
          <div class="badge user-badge">
            <p class="firstname pt-4">
              <b>Upload Your Profile Picture Below</b>
            </p>
            <!-- {{ $store.state.authenticated }} -->

            <form
              @submit.prevent="sendFile"
              action=""
              method="post"
              enctype="multipar/form-data"
            >
              <label class="file-label profile-badge">
                <input
                  name="file"
                  id="file"
                  type="file"
                  ref="file"
                  @change="selectFile"
                  class="file-input"
                  accept="image/*"
                />
                <span class="file-cta">
                  <span class="file-label">
                    <!--  -->
                    <div v-if="preview" class="previewImage">
                      <div>
                        <img :src="preview" class="profile-img" />
                      </div>
                    </div>
                    <div v-else>
                      <img
                        class="profile-img mb-3"
                        :src="user.profile_img"
                        alt="profile.img"
                      />
                    </div>
                  </span>
                </span>
                <!--  -->
              </label>
              <div
                v-if="message"
                :class="`message mt-2 ${error ? 'text-danger' : 'bg-success'} `"
              >
                <div class="message-body">{{ message }}</div>
              </div>

              <div :class="`${error ? '' : 'mt-4'} `">
                <button
                  type="button"
                  class="my-4 btn btn-light"
                  @click="onUpload"
                  :class="`message ${
                    selectedFile
                      ? ''
                      : 'disabled bg-secondary border-secondary text-white'
                  }`"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />

        <div class="detail my-4 ml-md-5">
          <h5>
            Name: &nbsp;&nbsp;&nbsp; {{ user.firstname }}&nbsp; &nbsp;
            {{ user.lastname }}
          </h5>
          <h5 class="d-sm-inline">Faculty:&nbsp;&nbsp;&nbsp; {{ user.faculty }}</h5>
          <span class=""></span>
          <h5 class=" ">Department:&nbsp;&nbsp;&nbsp; {{ user.department }}</h5>
          <h5>Email: &nbsp;&nbsp;&nbsp; {{ user.email }}</h5>
          <h5>Phone-Number:&nbsp;&nbsp;&nbsp;{{ user.tel_no }}</h5>
          <h5>Status:&nbsp;&nbsp;&nbsp;{{ user.status }}</h5>
          <h5>{{ user.status }}-Id: {{ user.status_id }}</h5>
        </div>
        <div class="text-center">
          <router-link
            :to="{ path: '/profile/edit/' + user._id }"
            class="btn btn-light mb-3 detail"
            >Edit Profile</router-link
          >
        </div>

        <hr />
        <div>
          <p class="anounce-title">Activities Category Subscribe</p>
          <p class="detail">**Select the box below for notification</p>

          <form
            @submit.prevent="sendFile"
            action=""
            method="post"
            enctype="multipar/form-data"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="volunteer"
                v-model="actType"
                id="volunteer"
              />

              <label class="form-check-label detail" for="volunteer">
                Volunteer Activities
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="regular"
                v-model="actType"
                id="regular"
              />
              <label class="form-check-label detail" for="regular">
                Regular Activities
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="actType"
                value="force"
                id="force"
              />
              <label class="form-check-label detail" for="force">
                Force Activities
              </label>
            </div>

            <button
              :disabled="isEmpty"
              class="btn btn-light my-3 detail"
              type="submit"
              value="submit"
              @click="onUpload"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <HPfooter />
</template>

<script>
import axios from "axios";
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import Sidebar from "../components/sliderbar";
import moment from "moment";

// import { VueCookieNext } from 'vue-cookie-next';

export default {
  components: {
    HomepageHeader,
    HPfooter,
    Sidebar,
  },
  data() {
    return {
      user: {},
      actType: [],
      checked: false,
      preview: "",
      image: "",
      alertMessage: "",
      selectedFile: "",
      dipimg: {},
      obj: {
        "text-success": true,
      },
      uploadFiles: [],
      files: [],
      message: " ",
      error: false,
      dropzonefile: "",
      uploading: false,
    };
  },

  async created() {
    // try {
    const result = await axios.get("/users/profile");
    this.user = result.data;
    //
    const resulted = await axios.get("/users/profile");

    this.$store.state.info = resulted.data;
    this.$store.commit("setAuthentication", true);
    // this.$store.commit("setAuthentication", true);
    // } catch (err) {
    //   this.$router.push({ name: "login" });
    // }
  },
  methods: {
    timeformat() {
      const thisMoment = moment(this.user.createdAt).format("LL");
      return thisMoment;
    },
    // single file upload
    selectFile() {
      //ชื่อเหมือน iput@change
      const selectFile = this.$refs.file.files[0];
      this.selectedFile = selectFile;

      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 200000;
      const tooLarge = selectFile.size > MAX_SIZE;

      if (allowedTypes.includes(selectFile.type) && !tooLarge) {
        this.error = false;
        this.message = "";
      } else {
        this.error = true;
        this.message = tooLarge
          ? `Too large. Max size is ${MAX_SIZE / 1000}Kb`
          : "Only images are allowed";
        this.selectedFile = "";
      }

      // Preview Image
      const input = this.$refs.file;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    // Uploadfile
    async sendFile() {
      const formdata = new FormData();
      formdata.append("selectedFile", this.selectedFile);

      try {
        await axios.post("/api/posts/upload", formdata);
        this.message = "File has been uploaded!";
        this.selectedFile = "";
        this.error = false;
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    },
  },
  computed: {
    isEmpty: ({ actType }) => actType.length === 0,
  },
};
</script>

<style scoped>
/* Upload profile image */
input.file-input {
  display: none;
}
/*  */
.topspace {
  margin-top: -6%;
}
.detail {
  font-family: "THSaraban";
}
.container {
  max-width: 1028px;
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
  font-size: 26px;
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
