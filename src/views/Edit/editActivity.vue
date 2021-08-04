<template>
  <HomepageHeader />
  <div class="row topspace">
    <Sidebar />
    <div class="container">
      <div class="headline">
        <p>&nbsp; &nbsp;&nbsp; Select your cover image</p>
      </div>
      <form
        id="submitAct"
        action=""
        @submit.prevent="sendFile"
        method="post"
        enctype="multipar/form-data"
        class="ac-req-form"
      >
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
          <button class="btn btn-dark" @click="Empyty">Cancel</button>
        </div>
        <div class="headline mt-3">
          <p class="firstname">&nbsp; &nbsp;&nbsp; Activity details</p>
        </div>

        <div class="ATinput">
          <div class="row my-4">
            <div class="col-3">
              <span class="text-danger">*</span>
              <label for="title" class="form-label"> Activity Title</label>
            </div>
            <div class="col-9">
              <input
                type="input"
                class="form-control form-control-sm"
                id="title"
                placeholder="e.g. Orientation Day"
                v-model="actDetail.title"
                required
              />
            </div>
          </div>

          <h5>Applicant Qualification</h5>
          <div class="row my-4 form-group">
            <div class="col-3 col-sm-3">
              <span class="text-danger">*</span
              ><label for="example-number-input">Applicant Number</label>
            </div>

            <div class="col-sm-2 col-6 mx-2 mx-sm-none">
              <input
                oninput="javascript: if (this.value.length > this.value) this.value = this.value.slice(0, this.maxLength);"
                maxlength="3"
                v-model="actDetail.member_amount"
                :min="1"
                :max="1000"
                class="form-input"
                type="number"
                id="example-number-input"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-3">
              <label for="st-year">Activity Type</label>
            </div>

            <div class="col-12 col-sm-8 mx-3 px-0 ms-5 ms-md-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="Volunteer"
                  v-model="actDetail.type"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Volunteer Activities
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="Regular"
                  v-model="actDetail.type"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Regular Activities
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value="Force"
                  v-model="actDetail.type"
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  Force Activities
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  value="Others"
                  v-model="actDetail.type"
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  Others Activities
                </label>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-3">
              <span class="text-danger">*</span
              ><label for="place" class="form-label">At Place</label>
            </div>
            <div class="col-9">
              <input
                type="input"
                class="form-control form-control-sm"
                id="place"
                placeholder="e.g. Building G, Srinakharinwirot University Ongkharak Campus"
                required
                v-model="actDetail.location"
              />
            </div>
          </div>
          <div class="row my-4">
            <div class="col-sm-2 col-12 mx-2 mx-sm-0 pe-0">
              <span class="text-danger">*</span
              ><label for="st-date" class="form-label">Start At</label>
            </div>
            <div class="col-sm-4 col-8 mx-2 mx-sm-0">
              <input
                type="datetime-local"
                class="form-control form-control-sm"
                id="st-date"
                name="start_date"
                :min="thisDay()"
                max="2031-02-20T20:20"
                v-model="actDetail.start_date"
                required
                :disabledDates="disabledDates"
              />
            </div>

            <div class="col-sm-2 col-12 mx-2 mt-2 mt-sm-0 mx-sm-0">
              <span class="text-danger">*</span
              ><label for="st-time" class="form-label">End At</label>
            </div>
            <div class="col-sm-4 col-8 mx-2 mx-sm-0">
              <input
                type="datetime-local"
                class="form-control form-control-sm"
                id="st-time"
                name="end_date"
                :min="endDate()"
                v-model="actDetail.end_date"
                required
              />
            </div>
          </div>

          <div class="row my-4">
            <div class="col-sm-2 col-12 mx-2 mx-sm-0">
              <span class="text-danger">*</span
              ><label for="Faculty" class="form-label">Faculty</label>
            </div>
            <div class="col-sm-4 col-8 mx-2 mx-sm-0">
              <input
                type="input"
                class="form-control form-control-sm"
                id="Faculty"
                placeholder="e.g. Enginnering"
                required
                v-model="actDetail.faculty"
              />
            </div>
            <div class="col-sm-2 col-12 mx-2 mx-sm-0 mt-3 mt-sm-0 px-sm-0 px-md-2">
              <span class="text-danger">*</span
              ><label for="department" class="form-label">Department</label>
            </div>
            <div class="col-sm-4 col-8 mx-2 mx-sm-0">
              <input
                type="input"
                class="form-control form-control-sm"
                id="department"
                placeholder="e.g. Computer Enginnering"
                required
                v-model="actDetail.department"
              />
            </div>
          </div>

          <div class="row my-4">
            <div class="col-12">
              <span class="text-danger">*</span
              ><label for="detail" class="form-label">Detials</label>
            </div>
            <!-- Submit btn -->
            <div class="col-12">
              <textarea
                class="form-control"
                placeholder="Leave a short description here"
                id="detail"
                style="height: 300px"
                required
                v-model="actDetail.description"
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
              <div class="row my-2">
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
              <div class="row my-2">
                <div class="col-7 col mx-3">
                  {{ file.name }}
                  <span v-if="file.invalidMessage">
                    &nbsp;- {{ file.invalidMessage }}</span
                  >
                  <span v-if="!file.invalidMessage"
                    >&nbsp;{{ (error_warning = "") }}</span
                  >
                </div>
                <div
                  @click="
                    selectedimages.splice(index, 1);
                    uploadImages.splice(index, 1);
                    imagesI.splice(index, 1);
                  "
                  class="col-3 col btn-close mt-1 bg-light rounded-circle"
                ></div>
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
          @click="clearImages()"
            class="btn btn btn-secondary mb-2 ms-4 mt-4" 
          >
            Clear Images
          </div>
        </div>
      </form>

      <hr />

      <div class="row" v-if="imagesI">
        <div v-for="(image, key) in imagesI" :key="key" class="mx-0 col-12 col-sm-6">
          <div class="row mb-3 justify-content-center">
            <img :src="showimg[key]" class="col-12 rounded-0 sample-img" />
            <div v-if="key >= 1" class="d-none">{{ (warning = true) }}</div>
            <div v-if="key < 2" class="d-none">{{ (warning = false) }}</div>
          </div>
        </div>
      </div>

      <!--  -->
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
import moment from "moment";
import _ from "lodash";

export default {
  name: "ProductDetailPage",
  components: {
    HPfooter,
    HomepageHeader,
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
    };
  },
  async mounted() {
    // Get Information
    const result = await axios.get(`/events/${this.$route.params.id}`);
    this.actDetail = result.data;
    console.log(result);
    this.creator = this.actDetail.createdBy;
    this.coverPreview = this.actDetail.cover_img;
    this.imagePreview = this.actDetail.images;
    // console.log(this.creator);
    const res = await axios.get("/users/profile");
      this.$store.state.info = res.data;
      this.$store.state.profileimg = res.data.profile_img;
  },
  
  methods: {
    // async editForm() {
    //   const res = await axios.put(`/activities/${this.$route.params.id}`, {
    //     cover_img: this.anInfo.cover_img.url,
    //     name: this.anInfo.title,
    //     type: this.anInfo.type,
    //     faculty: this.anInfo.faculty,
    //     department: this.anInfo.department,
    //     start_date: moment(this.start_date).format("YYYY-MM-DD HH:mm:ss"),
    //     end_date: moment(this.end_date).format("YYYY-MM-DD HH:mm:ss"),
    //     member_amount: this.anInfo.member_amount,
    //     place: this.anInfo.place,
    //     description: this.anInfo.description,
    //   });
    //   this.anInfo = res.data;
    //   alert("Updated");
    //   this.$router.push({ name: "history" });
    //   console.log(this.anInfo);
    // },
    thisDay() {
      const thisMoment = moment().format("YYYY-MM-DDTHH:mm");
      return thisMoment;
    },
    endDate() {
      const thisMoment = moment(this.actDetail.start_date).format("YYYY-MM-DDTHH:mm");
      return thisMoment;
    },
    Empyty() {
      this.preview = "";
      this.coverPreview = "";
      this.value = "1";
    },
    clearImages(){
      this.imagesI = [];
      // this.error_warning = '';
      this.selectedimages ='';
      this.imagePreview='';
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
    

    // Upload Image
    async sendFile() {
      const formdata = new FormData();

      //Images
      _.forEach(this.uploadImages, file => {
          if(this.validation(file) === "") {
            formdata.append('images', file);
          }
        });
      if(this.coverPreview == "") {
          formdata.append("cover_img", this.value);
          }
      formdata.append("title", this.actDetail.title);
      formdata.append("type", this.actDetail.type);
      formdata.append("faculty", this.actDetail.faculty);
      formdata.append("department", this.actDetail.department);
      formdata.append("start_date",moment(this.actDetail.start_date).format("YYYY-MM-DD HH:mm:ss"));
      formdata.append("end_date", moment(this.actDetail.end_date).format("YYYY-MM-DD HH:mm:ss"));
      formdata.append("member_amount", this.actDetail.member_amount);
      formdata.append("location", this.actDetail.location);
      formdata.append("description", this.actDetail.description);

      try {
        const response = await axios.put(`/events/${this.$route.params.id}`, formdata);
        this.message = "File has been uploaded!";
        // this.images = "";
        this.error = false;

        for (var pair of formdata.entries()) {
          console.log(pair[0] + " - " + pair[1]);
        }
        setTimeout(() => {
          this.$router.push("homepage");
        }, 1000);
        this.Test1 = response;
      } catch (err) {
        alert(err.response.data.error_message);
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
  object-fit: cover;
  object-position: top;
}
/* Cover Image */
img.cover-img {
  -o-object-position: unset;
  object-position: top;
  -o-object-fit: cover;
  object-fit: cover;
  height: 265px;
  width: 360px;
  border-radius: 23px 0px 23px 23px;
}
/*  */
.radiocollection {
  text-align-last: center;
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
    rgb(255 241 241) 0%,
    rgba(241, 187, 187, 1) 22%,
    rgb(215 83 83 / 75%) 90%,
    rgba(176, 68, 68, 0.5525560566023284) 100%
  );
}
.headline p {
  font-size: larger;
  border-bottom: solid 1px;
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
.radiocollection [type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
.radiocollection [type="radio"] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
.radiocollection [type="radio"]:checked + img {
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
  .col-3 {
    flex: 0 0 auto;
    width: 25%;
    display: inherit;
  }
}
/* Responsive Cover Image */
@media only screen and (max-width: 380px) and (min-width: 280px) {
  img.cover-img[data-v-e3c53f88] {
    width: 13rem;
    height: 9rem;
    margin-left: -2%;
  }
}
</style>
