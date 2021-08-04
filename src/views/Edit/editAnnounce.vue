<template>
  <AdminHeader />
  <div class="row topspace">
    <div class="container">
      <div class="headline mt-3 mt-md-none">
        <p>&nbsp; &nbsp;&nbsp; Select your cover image</p>
      </div>
      <form class="ac-req-form"
        action=""
        @submit.prevent=""
        method="post"
        enctype="multipar/form-data"
        >
        <div class="coverpost">
          <div class="row radiocollection">
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label> 
                <!-- radio image -->
                <input type="radio" name="test" :value="coverimg[0]" v-model="value" checked />
                <img class="radioim" :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001517/S-E-a-N/default/cover_img/cover_7_jilzbh.jpg'" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[1]" v-model="value"  />
                <img class="radioim" :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001510/S-E-a-N/default/cover_img/cover_8_zfrxyv.jpg'" />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[2]" v-model="value" />
                <img class="radioim" :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001515/S-E-a-N/default/cover_img/cover_9_zvqj5d.jpg'" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[3]" v-model="value" />
                <img class="radioim" :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1628002248/S-E-a-N/default/cover_img/cover_10_ywvguz.jpg'" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[4]" v-model="value" />
                <img class="radioim" :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001510/S-E-a-N/default/cover_img/cover_11_ctucru.jpg'" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[5]" v-model="value" />
                <img class="radioim" :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001510/S-E-a-N/default/cover_img/cover_12_wtv56f.jpg'" />
              </label>
            </div>
          </div>
        </div>

        <div class="headline mt-3">
          <p class="firstname border-bottom-0">
          </p>
        </div>

        <div class="posting">


          <span class="file-cta">
            <span class="file-label">

                <div v-if="profile.url">
                  <img
                  class="profile-img mt-5 my-4"
                  :src="profile.url"
                  alt="coverimg"
                />
                </div>
                <div v-if="!profile.url">
                  <img
                  class="profile-img mt-5 my-4"
                  :src="picked[value]"
                  alt="coverimg"
                />
                </div>
            
            </span>
          </span>
          <div class="cancelbtn mt-2 text-center">
          <button class="btn btn-dark" @click="Empyty">Cancel</button>
        </div>
          <!-- <div class="user-badge">
              <img
                class="profile-img mt-5 my-4"
                src="/img/Mask-Group-28.png"
                alt="profile.
                img"
              />
            </div> -->
        </div>

        <div class="headline mt-3">
          <p class="firstname">&nbsp; &nbsp;&nbsp; Announcement details</p>
        </div>

        <div class="ATinput">
          <div class="row my-4">
            <div class="col-3">
              <span class="text-danger">*</span>
              <label for="name" class="form-label"> Announcement Title</label>
            </div>
            <div class="col-9">
              <input
                type="input"
                class="form-control form-control-sm"
                id="name"
                placeholder=""
                v-model="anInfo.title"
              />
            </div>
          </div>

          <div class="row my-4">
            <div class="col-12">
              <span class="text-danger">*</span
              ><label for="title" class="form-label">Detials</label>
            </div>
            <div class="col-12">
              <textarea
                class="form-control"
                placeholder="Leave a short description here"
                id="floatingTextarea2"
                style="height: 300px"
                v-model="anInfo.description"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mb-3">
     
          <button
            :disabled="isEmpty"
            class="btn btn btn-secondary mb-2 mt-4"
            type="submit"
            value="submit"
            @click="editForm"
          >
            Update
          </button>
        </div>
        <div class="row">
          <div class="image-preview col-6"></div>


        </div>
      </form>
      <hr />
      <!-- Detail -->
    </div>
  </div>

  <HPfooter />
</template>

<script>
import axios from "axios";


import AdminHeader from "@/components/admin_header";
import HPfooter from "@/components/homepageFooter";
export default {
  name: "ProductDetailPage",
  components: {
    AdminHeader,
    HPfooter,
  },
  data() {
    return {
      quantity: 10,
      mquantity: 50,
      value: 7,
      picked: ['','','','','','','',
      'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001517/S-E-a-N/default/cover_img/cover_7_jilzbh.jpg',
        'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001510/S-E-a-N/default/cover_img/cover_8_zfrxyv.jpg',
        'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001515/S-E-a-N/default/cover_img/cover_9_zvqj5d.jpg',
        'https://res.cloudinary.com/dgizzny4y/image/upload/v1628002248/S-E-a-N/default/cover_img/cover_10_ywvguz.jpg',
        'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001510/S-E-a-N/default/cover_img/cover_11_ctucru.jpg',
        'https://res.cloudinary.com/dgizzny4y/image/upload/v1628001510/S-E-a-N/default/cover_img/cover_12_wtv56f.jpg'
        ],
      coverimg: [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
      ],
      anInfo:{},
      profile:{},
    };
  },
  async mounted() {
    // Get News History
    const res = await axios.get(`/announcements/${this.$route.params.id}`);
    this.anInfo = res.data;
    this.profile = res.data.cover_img;
  },
  methods: {
    Empyty() {
      this.profile = '';
      this.value = '7';
    },
    async editForm() {
      const formdata = new FormData();
      if(this.coverPreview == "") {
          formdata.append("cover_img", this.value);
          }
        formdata.append("title", this.anInfo.title);
        formdata.append("description", this.anInfo.description);

        const response = await axios.put(`/admin/announcements/${this.$route.params.id}`,formdata);
        console.log(response.config);
        alert("Activity has been updated!");
        this.$router.push({ name: "adminpage" });

    },
  },
};
</script>

<style scoped>
.radiocollection {
  text-align-last: center;
}
img.profile-img {
  width: 85%;
  /* height: 160px; */
  object-fit: cover;
}

img.cover {
  width: 100%;
  margin-left: 0%;
  padding: 2px;
}

.image-preview.col-6 {
  margin: unset;
  padding: 0;
}
.col-3.d-none.d-md-block {
  margin-left: -45px;
}
.headline {
  font-family: "THSarabanBold";
  background: linear-gradient(
    90deg,
    rgb(255 255 255) 0%,
    rgba(241, 187, 187, 1) 22%,
    rgb(255 150 150 / 48%) 90%,
    rgb(255 219 219 / 55%) 100%
  );
}
.headline p {
  font-size: larger;
  border-bottom: solid 1px #6850524a;
}

.form-control-sm {
  min-height: calc(1em + 0.5rem + 1px);
  padding: 0.15rem 0.25rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.selecfaculty {
  box-shadow: none;
  padding: 0rem 0.55rem;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-input {
  padding: 0rem 0.55rem;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.ac-req-form {
  font-family: "THSaraban";
}
.radioim {
  opacity: 0.3;
  object-fit: cover;
  height: 150px;
  width: 150px;
  border-radius: 0px;
}

/* HIDE RADIO */
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type="radio"]:checked + img {
  opacity: 1;
}
/* Radio */

.sidebar {
  position: fixed;
  background-color: #f8ca00;
  height: 100%;
}

.container {
  max-width: 69%;
  width: 100%;
}
.posting {
  text-align-last: center;
}
.profile-img {
  margin-top: 1%;
  -o-object-fit: cover;
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

@media screen and (max-width: 1320px) and (min-width: 768px) {
  .container[data-v-e3c53f88] {
    max-width: 643px;
    width: 100%;
    font-size: 16px;
  }
  section.sidebar.ml-5 {
    font-size: 17px;
  }
  h5 {
    font-size: 18px;
  }
}
@media only screen and (max-width: 766px) {
  .container {
    max-width: 92%;
  }
  .headline p[data-v-047933e9] {
    font-size: inherit;
  }
  img.profile-img {
    margin-left: -8px;
  }
  .col-3 {
    flex: 0 0 auto;
    width: 25%;
    display: inherit;
  }
}
</style>
