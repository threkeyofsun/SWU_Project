<template>
  <HomepageHeader />

  <div class="row ">
    <Sidebar />
    <!--End of  Sidebar -->

    <div class="col-md-9 col-12">
      <div class="container">
        <p class="mt-5 mb-4 anounce-title">User Detail</p>
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
        <hr />

        <div class="detail my-4 ml-md-5">
          <h5>
            Name: &nbsp;&nbsp;&nbsp; {{ user.first_name }}&nbsp; &nbsp;
            {{ user.last_name }}
          </h5>
          <h5 class="d-sm-inline">
            Faculty:&nbsp;&nbsp;&nbsp; {{ user.faculty }}
          </h5>
          <span class="d-sm-inline d-none mx-4"></span>
          <h5 class="d-sm-inline">
            Major:&nbsp;&nbsp;&nbsp; {{ user.majors }}
          </h5>
          <h5>Email: &nbsp;&nbsp;&nbsp; {{ user.email }}</h5>
          <h5>Phone-Number:&nbsp;&nbsp;&nbsp;{{ user.phone_number }}</h5>
          <h5>Status:&nbsp;&nbsp;&nbsp;{{ user.s_type }}</h5>
          <h5>{{ user.s_type }}-Id: {{ user.s_id }}</h5>
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
              Upload
            </button>
          </form>

<p>


   {{dipimg.originalName}}

</p>



         
          
          
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
      obj:{
       'text-success':true,
      }
    };
  },
  async created() {
    const result = await axios.get(`/api/user/${this.$route.params.s_id}`);
    this.user = result.data;
    const result2 = await axios.get('/api/posts/files/Hi1615445287026.png');
    this.dipimg = result2;
  },
  methods: {},
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
