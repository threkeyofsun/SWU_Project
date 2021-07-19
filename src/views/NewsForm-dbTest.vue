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
        @submit.prevent="submitAct"
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
                <img class="radioim" :src="'/img/' + coverimg[0]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[1]" v-model="value" />
                <img class="radioim" :src="'/img/' + coverimg[1]" />
              </label>
            </div>

            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[2]" v-model="value" />
                <img class="radioim" :src="'/img/' + coverimg[2]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[3]" v-model="value" />
                <img class="radioim" :src="'/img/' + coverimg[3]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[4]" v-model="value" />
                <img class="radioim" :src="'/img/' + coverimg[4]" />
              </label>
            </div>
            <div class="col-xxl-2 col-xl-3 col-sm-4 col mt-1">
              <label>
                <input type="radio" name="test" :value="coverimg[5]" v-model="value" />
                <img class="radioim" :src="'/img/' + coverimg[5]" />
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
            <div v-if="preview" class="previewImage">
              <div>
                <img :src="preview" class="profile-img cover-img mt-5 my-4" />
              </div>
              <div class="text-danger firstname">
                {{ message }}
              </div>
            </div>
            <div v-else>
              <div class="user-badge">
                <img
                  class="profile-img cover-img mt-5 my-4"
                  :src="'/img/' + value"
                  alt="profile.img"
                />
              </div>
            </div>
          </label>
        </div>
        <div v-if="preview" class="cancelbtn mt-2">
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
                v-model="title"
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
                v-model="member_amount"
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
                  v-model="type"
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
                  v-model="type"
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
                  v-model="type"
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
                  v-model="type"
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
                v-model="place"
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
                v-model="start_date"
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
                v-model="end_date"
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
                v-model="faculty"
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
                v-model="department"
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
                v-model="description"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <!--  -->
          <label for="formFileSm" class="form-label">Insert Image</label>
          <form
            @submit.prevent="sendFile"
            action=""
            method="post"
            enctype="multipar/form-data"
          >
            <input
              class="form-control form-control-sm"
              name="imagefile"
              id="imagefile"
              type="file"
              ref="imagefile"
              @change="imagefile"
              accept="image/*"
            />

            <div
              v-if="message"
              :class="`message mt-2 ${error ? 'text-danger' : 'bg-success'} `"
            >
              <div class="message-body text-danger">**{{ message }}**</div>
            </div>
          </form>
          <!-- End of Insert Image -->
          <button
            :disabled="isEmpty"
            class="btn btn btn-secondary mb-2 mt-4"
            type="submit"
            value="submit"
            :class="` ${
              message ? 'disabled bg-secondary border-secondary text-white' : ''
            }`"
            
          >
            Create
          </button>
        </div>
      </form>

      <hr />
      <!-- Detail -->
      <div class="row">
        <div class="col">
          <!-- <img :src="preview" class="profile-img" /> -->
        </div>
      </div>
    </div>
  </div>

  <HPfooter />
</template>

<script>
import Sidebar from "../components/sliderbar";
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import axios from "axios";
import moment from "moment";

export default {
  name: "ProductDetailPage",
  components: {
    HomepageHeader,
    HPfooter,
    Sidebar,
  },
  data() {
    return {
      value: "swu-water.jpg",
      picked: "0",
      coverimg: [
        "swu-water.jpg",
        "IMG_20190126_114352_2.jpg",
        "swu_lotus.jpg",
        "00100dPORTRAIT_00100_BURST20190703172640303_COVER.jpg",
        "IMG_20190629_173826.jpg",
        "2019-08-08 15.27.48-1.jpg",
      ],
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
      dropzonefile: "",
      uploading: false,
      preview: "",
      coverPreview: "",
      image: "",
      alertMessage: "",
      selectedFile: "",
      dipimg: {},
      Test1:{}
    };
  },
  methods: {
    async submitAct() {
      try {
        const response = await axios.post("/activities/", {
          cover_img: this.value,
          title: this.title,
          type: this.type,
          faculty: this.faculty,
          department: this.department,
          start_date: moment(this.start_date).format("YYYY-MM-DD HH:mm:ss"),
          end_date: moment(this.end_date).format("YYYY-MM-DD HH:mm:ss"),
          member_amount: this.member_amount,
          location: this.place,
          description: this.description,
        });
        this.Test1 = response;
        alert("Activity has been created!");
        // this.$router.push({ name: "history" });
      } catch (err) {
        alert(err.response.data.error_message);
        // console.log(err.response.data.error_message);
      }
    },
    createAt() {
      const thisMoment = moment(this.start_date).format("YYYY-MM-DD");
      return thisMoment;
    },
    thisDay() {
      const thisMoment = moment().format("YYYY-MM-DDTHH:mm");
      return thisMoment;
    },
    endDate() {
      const thisMoment = moment(this.start_date).format("YYYY-MM-DDTHH:mm");
      return thisMoment;
    },
    Empyty() {
      this.preview = "";
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
    // Upload file
    async sendFile() {
      const formdata = new FormData();
      formdata.append("selectedFile", this.selectedFile);
      formdata.append("cover_img",  this.value);
      formdata.append("title",  this.title);
      formdata.append("type",  this.type);
      formdata.append("faculty",  this.faculty);
      formdata.append("department",  this.department);
      formdata.append("start_date",   moment(this.start_date).format("YYYY-MM-DD HH:mm:ss"));
      formdata.append("end_date",   moment(this.end_date).format("YYYY-MM-DD HH:mm:ss"));
      formdata.append("member_amount",  this.member_amount);
      formdata.append("location",  this.place);
      formdata.append("description",  this.description);
      
      try {
        await axios.post("/activities/", formdata);
        this.message = "File has been uploaded!";
        this.selectedFile = "";
        this.error = false;

        for (var pair of formdata.entries()) {
          console.log(pair[0] + " - " + pair[1]);
        }
        setTimeout(() => {
          this.$router.push("homepage");
        }, 1000);
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.cancelbtn {
  text-align: -webkit-center;
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
  width: inherit;
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
