<template>
  <HomepageHeader />
  <div class="row topspace">
    <div class="container">
      <div class="headline mt-3 mt-md-none">
        <p>&nbsp; &nbsp;&nbsp; Select your cover image</p>
      </div>
      <form id="submitAct"
        action=""
        @submit.prevent="sendFile"
        method="post"
        enctype="multipar/form-data"
        class="ac-req-form">

        <div class="coverpost">
          <div class="row radiocollection">
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <!-- radio image -->
                <input
                  type="radio"
                  name="test"
                  :value="coverimg[0]"
                  v-model="value"
                  checked
                />
                <img
                  class="radioim"
                  :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_1_woz6x4.jpg'"
                />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[1]" v-model="value" />
                <img
                  class="radioim"
                  :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_2_asy8rz.jpg'"
                />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[2]" v-model="value" />
                <img
                  class="radioim"
                  :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1627311776/S-E-a-N/default/cover_img/cover_3_o1odod.jpg'"
                />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
            <label>
                <input type="radio" name="test" :value="coverimg[3]" v-model="value" />
                <img
                  class="radioim"
                  :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_4_rfrtux.jpg'"
                />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[4]" v-model="value" />
                <img
                  class="radioim"
                  :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1627311778/S-E-a-N/default/cover_img/cover_5_oebcbe.jpg'"
                />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[5]" v-model="value" />
                <img
                  class="radioim"
                  :src="'https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_6_rubhbx.jpg'"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="headline mt-3">
          <p class="firstname border-bottom-0">
            &nbsp; &nbsp;&nbsp; **Or upload your cover image here**
          </p>
        </div>

        <div class="posting">
          <label class="file-label profile-badge">
            <input
              name="file"
              type="file"
              ref="file"
              @change="selectFile"
              accept="image/*"
              class="form-control-file btn btn-light mt-2 file-input"
              id="file"
            />

            <div v-if="!coverPreview">
              <div v-if="!preview">
                <img :src="picked[value]" class="profile-img cover-img mt-5 my-4" />
              </div>
              <div class="text-danger firstname"></div>
            </div>
            <div v-if="preview">
              <div>
                <img :src="preview" class="profile-img cover-img mt-5 my-4" />
              </div>
              <div class="text-danger firstname"></div>
            </div>
            <div v-else>
              <div v-if="coverPreview" class="user-badge">
                <img
                  class="profile-img cover-img mt-5 my-4"
                  :src="coverPreview.url"
                  alt="profile.img"
                />
              </div>
            </div>
          </label>
        </div>
        <div v-if="message && preview" class="text-danger firstname text-center">
          {{ message }}
        </div>
        <div class="cancelbtn mt-2 text-center">
          <div class="btn btn-dark" @click="Empyty">Cancel</div>
        </div>

        <div class="headline mt-3">
          <p class="firstname">&nbsp; &nbsp;&nbsp; News details</p>
        </div>

        <div class="ATinput">
          <div class="row my-4">
            <div class="col-3">
              <span class="text-danger">*</span>
              <label for="title" class="form-label"> News Title</label>
            </div>
            <div class="col-9">
              <input
                type="input"
                class="form-control form-control-sm"
                id="title"
                placeholder=""
                required
                v-model="anInfo.title"
              />
            </div>
          </div>

          <div class="row my-4">
            <div class="col-sm-3">
              <span class="text-danger">*</span
              ><label for="shDes" class="form-label">Short Description</label>
            </div>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                placeholder="Leave a short description here"
                id="shDes"
                style="height: 100px"
                required
                v-model="anInfo.short_description"
                maxlength="121"
              ></textarea>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-12">
              <span class="text-danger">*</span
              ><label for="detail" class="form-label">Detials</label>
            </div>
            <div class="col-12">
              <textarea
                class="form-control"
                placeholder="Leave a short description here"
                id="detail"
                style="height: 300px"
                required
                v-model="anInfo.description"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <!--  -->
          <label for="imagesfile" class="form-label">Insert Image</label>

          <input v-if="imagePreview.length < 2"
            multiple
            class="form-control form-control-sm"
            name="imagesfile"
            id="imagefile"
            type="file"
            ref="selectedimages"
            @change="imagesfile"
            accept="image/*"
          />

          <div v-if="imagePreview">
            <div v-for="(image, key) in imagePreview" :key="key" >
              <div class="row mt-2">
                <div class="col-7 col mx-3">
                  {{ image.filename }}
                </div>
                <div
                  @click="
                    imagePreview.splice(index, 1);
                  "
                  class="col-3 col btn-close mt-1 bg-light rounded-circle"
                ></div>
              </div>
            </div>
          </div>
          <!-- Preview File Name  -->
          <div v-if="imagesI">
            <div
              v-for="(file, index) in selectedimages"
              :key="index"
              :class="`${file.invalidMessage && 'text-danger'}`"
            >
              <div class="row mt-2">
                <div class="col-7 col mx-3">
                  {{ file.name }}
                  <span v-if="file.invalidMessage">
                    &nbsp;- {{ file.invalidMessage }}</span
                  >
                  <span v-if="!file.invalidMessage"
                    >&nbsp;{{ (error_warning = "") }}</span
                  >
                </div>
                <!-- <div
                  @click="
                    selectedimages.splice(index, 1);
                    uploadImages.splice(index, 1);
                    imagesI.splice(index, 1);
                  "
                  class="col-3 col btn-close mt-1 bg-light rounded-circle"
                ></div> -->
              </div>
            </div>
          </div>
          <div
            v-if="message"
            :class="`message mt-2 ${error ? 'text-danger' : 'bg-success'} `"
          >
            <div class="message-body text-danger bg-white">**{{ message }}**</div>
          </div>
          <!-- End of Insert Image -->
          <button
            :disabled="isEmpty"
            class="btn btn btn-secondary mb-2 mt-4"
            type="submit"
            value="submit"
            :class="` ${
              warning || message || error_warning
                ? 'disabled bg-secondary border-secondary text-white'
                : ''
            }`"
          >
            Update
          </button>
          <div
          @click="clearImg"
            class="btn btn btn-secondary mb-2 ms-4 mt-4" 
          >
            Clear Images
          </div>
        </div>
      </form>
      <hr />
      <!-- Detail -->
      <div class="row" v-if="imagesI">
        <div v-for="(image, key) in imagesI" :key="key" class="mx-0 col-12 col-sm-6">
          <div class="row mb-3 justify-content-center">
            <img :src="showimg[key]" class="col-12 rounded-0 sample-img" />
            <div v-if="key >= 1" class="d-none">{{ (warning = true) }}</div>
            <div v-if="key < 2" class="d-none">{{ (warning = false) }}</div>
          </div>
        </div>
      </div>
      <div class="row" v-if="imagePreview">
        <div v-for="(image, key) in imagePreview" :key="key" class="mx-0 col-12 col-sm-6">
          <div class="row mb-3 justify-content-center">
            <img :src="image.url" class="col-12 rounded-0 sample-img" />
          </div>
        </div>
      </div>

    </div>
  </div>

  <HPfooter />
</template>

<script>
import HomepageHeader from "@/components/HomepageHeader";
import HPfooter from "@/components/homepageFooter";
import axios from "axios";
import _ from "lodash";


export default {
  name: "ProductDetailPage",
  components: {
    HomepageHeader,
    HPfooter,
    
  },
  data() {
    return {
      value: 1,
      picked: [
        '',"https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_1_woz6x4.jpg",
        "https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_2_asy8rz.jpg",
        "https://res.cloudinary.com/dgizzny4y/image/upload/v1627311776/S-E-a-N/default/cover_img/cover_3_o1odod.jpg",
        "https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_4_rfrtux.jpg",
        "https://res.cloudinary.com/dgizzny4y/image/upload/v1627311778/S-E-a-N/default/cover_img/cover_5_oebcbe.jpg",
        "https://res.cloudinary.com/dgizzny4y/image/upload/v1627311777/S-E-a-N/default/cover_img/cover_6_rubhbx.jpg",
      ],
      coverimg: [1, 2, 3, 4, 5, 6],
      description: "",
      department: "",
      faculty: "",
      end_date: "",
      title: "",
      member_amount: "",
      start_date: "",
      type: "",
      place: "",
      appliedList: [],
      today: "",
      // Upload Image
      uploadFiles: [],
      files: [],
      message: false,
      error: false,
      preview: "",
      coverPreview: "",
      image: "",
      alertMessage: "",
      images: "",
      selectedimages: [],
      uploadImages: [],
      error_warning: "",
      warning: false,
      imagesI: [],
      showimg: [],
      actDetail: [],
      imagePreview: [],
      anInfo:[]
    };
  },
  async mounted() {
    // Get News History
    const res = await axios.get(`/news/${this.$route.params.id}`);
    this.anInfo = res.data;
    console.log(this.anInfo);
    this.creator = this.anInfo.createdBy;
    this.coverPreview = this.anInfo.cover_img;
    this.imagePreview = this.anInfo.images;
    const result = await axios.get("/users/profile");
      this.$store.state.info = result.data;
      this.$store.state.profileimg = result.data.profile_img;

  },
  methods: {
    async editNews() {
      const result = await axios.put(`/news/${this.$route.params.id}`, this.anInfo);
      this.anInfo = result.data;
      alert("Updated");
      this.$router.push({ name: "history" });
      console.log( this.anInfo);
    },
    Empyty() {
      this.preview = "";
      this.coverPreview = "";
      this.value = '1' 
       },
    clearImg() {
      this.selectedimages = [];
      this.imagesI.length = '';
      this.error_warning = '';
    },

    // single file upload
    selectFile() {
      //ชื่อเหมือน iput@change
      const selectFile = this.$refs.file.files[0];
      this.value = selectFile;
      //
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
        this.images = "";
      }

      // Single Preview Image
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
    //Multuple Images Upload
    imagesfile() {
      const selectedImage = this.$refs.selectedimages.files;
      this.uploadImages = [...this.uploadImages, ...selectedImage];
      this.selectedimages = [
        ...this.selectedimages,
        ..._.map(selectedImage, (file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          invalidMessage: this.validation(file),
        })),
      ];

      //Preview Multiple Images
      const selectedFile = this.$refs.selectedimages.files;
      for (let i = 0; i < selectedFile.length; i++) {
        console.log(selectedFile[i]);
        this.imagesI.push(selectedFile[i]);
      }

      for (let i = 0; i < this.imagesI.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.showimg[i] = e.target.result;
          // console.log(this.showimg);
          // this.$refs.image[i].src = e.reader.result;
        };
        reader.readAsDataURL(this.imagesI[i]);
      }
    },
    validation(file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 500000;

      if (file.size > MAX_SIZE) {
        return (this.error_warning = `Max size: ${MAX_SIZE / 1000}Kb`);
      }

      if (!allowedTypes.includes(file.type)) {
        return (this.error_warning = `Not an image`);
      }

      return "";
    },
        // Upload file
      async sendFile() {
      const formdata = new FormData();
      _.forEach(this.uploadImages, file => {
          if(this.validation(file) === "") {
            formdata.append('images', file);
          }
        });
      if(this.coverPreview == "") {
          formdata.append("cover_img", this.value);
          }
      formdata.append("title", this.anInfo.title);
      formdata.append("description", this.anInfo.description);
      formdata.append("short_description", this.anInfo.short_description);

      try {
        await axios.put(`/news/${this.$route.params.id}`, formdata);
        this.message = "File has been uploaded!";
        this.selectedFile = "";
        this.error = false;
        console.log(this.message);
        setTimeout(() => {
          this.$router.push({name: 'homepage'});
        }, 1000);
        alert("Updated");
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
  .sample-img {
    width: 100%;
    height: 345px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: top;
    object-position: top;
}
.card-img {
  border-radius: 15px;
  max-height: 414px;
  object-position: center;
  object-fit: cover;
}
.radiocollection {
  text-align-last: center;
}
img.profile-img {
  width: 63vw;
  height: 200px;
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
