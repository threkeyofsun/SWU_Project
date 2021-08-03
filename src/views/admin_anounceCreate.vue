<template>
  <AdminHeader />
  <div class="row topspace">
    <div class="container">
      <div class="headline mt-3 mt-md-none">
        <p>&nbsp; &nbsp;&nbsp; Select your cover image</p>
      </div>
      <form id="submitAnnounce"
        action=""
        @submit.prevent="submitAnnounce"
        method="post"
        enctype="multipar/form-data"
        class="ac-req-form">
        <div class="coverpost">
          <div class="row radiocollection">
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label> 
                <!-- radio image -->
                <input type="radio" name="test" :value="coverimg[0]" v-model="value" checked />
                <img class="radioim" :src="'/img/' + picked[7]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[1]" v-model="value"  />
                <img class="radioim" :src="'/img/' + picked[8]" />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[2]" v-model="value" />
                <img class="radioim" :src="'/img/' + picked[9]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[3]" v-model="value" />
                <img class="radioim" :src="'/img/' + picked[10]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[4]" v-model="value" />
                <img class="radioim" :src="'/img/' + picked[11]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[5]" v-model="value" />
                <img class="radioim" :src="'/img/' + picked[12]" />
              </label>
            </div>
          </div>
        </div>

        <div class="headline mt-4">
          <p class="firstname border-bottom-0">
            &nbsp; &nbsp;&nbsp;Select your Cover Image
          </p>
        </div>
        <div class="posting">
          <span class="file-cta">
            <span class="file-label">
              <div v-if="preview">
                <img :src="preview" class="profile-img mt-3 my-4" />
              </div>

              <div v-else>
                <img
                  class="profile-img mt-5 my-4"
                  :src="'/img/' + picked[value]"
                  alt="coverimg"
                />
              </div>
            </span>
          </span>

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
              <label for="title" class="form-label"> Announcement Title</label>
            </div>
            <div class="col-9">
              <input
                type="input"
                class="form-control form-control-sm"
                id="title"
                placeholder=""
                v-model="title"
                required
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
                v-model="description"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <!-- <div class="mb-3">
          <label for="formFileSm" class="form-label">Insert Image</label>
          <input class="form-control form-control-sm" id="formFileSm" type="file" /></div> 
-->
          <button
            class="btn btn btn-secondary mb-2 mt-4"
            type="submit"
            value="submit"
          >
            Create
          </button>
        
        <div class="row">
          <div class="image-preview col-6"></div>

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
import AdminHeader from "../components/admin_header";
import HPfooter from "../components/homepageFooter";
import axios from "axios";

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
          "photo-989-full.jpeg",
          "photo-1032-large.jpeg",
          "photo-985-full.jpeg",
          "photo-11471-full.jpeg",
          "swu3.jpg",
          "swu4.jpg",
          "swu2.jpg",
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
    };
  },
  methods: {
    async submitAnnounce() {
      try {
        const formdata = new FormData();
        formdata.append("cover_img", this.value);
        formdata.append("title", this.title);
        formdata.append("description", this.description);

        const response = await axios.post("/admin/announcements",formdata);
        console.log(response.config);
        alert("Activity has been created!");
          this.$router.push({ name: "adminpage" });
      } catch (err) {
        alert(err);
        // console.log(err.response.data.error_message);
      }
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
