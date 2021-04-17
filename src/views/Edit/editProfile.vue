<template>
  <HomepageHeader />

  <!--End of  Sidebar -->

  <div class="col-md-8 col-12 mx-auto">
    <div class="container">
      <p class="mb-4 anounce-title">User Detail</p>
      <!-- <h1>{{ user.lastname.slice(0, 1).toUpperCase()}}.</h1> -->
      <!-- <p>{{ getCookie }}</p> -->

      <hr />

      <div class="detail my-4 ml-md-5">
        <div class="row">
          <div class="col-md-4 col-12">
            <h5><label for="firstname">Firstname: </label></h5>
          </div>
          <div class="col-md-8 col-12">
            <input type="text" class="form-control col-4" v-model="user.firstname" />
          </div>
        </div>
        <div class="row my-2">
          <div class="col-md-4 col-12">
            <h5 class="my-2 col-3"><label for="firstname">Lastname: </label></h5>
          </div>
          <div class="col-md-8 col-12">
            <input type="text" class="form-control col-3" v-model="user.lastname" />
          </div>
        </div>

        <div class="row my-2">
          <div class="col-md-4 col-12">
            <h5 class="my-2"><label for="faculty">Faculty:</label></h5>
          </div>
          <div class="col-md-8 col-12">
            <select class="" id="faculty" v-model.trim="user.faculty" required>
              <option disabled selected class="faculty-disble" value="">| Faculty</option>

              <option value="CCI">College of Creative Industry</option>
              <option value="Engineering">Faculty of Engineering</option>
              <option value="Agricultural Product Innovation and Technology">
                Faculty of Agricultural Product Innovation and Technology
              </option>
              <option value="Humanities">Faculty of Humanities</option>
              <option value="Science">Faculty of Science</option>
              <option value="Physical Education">Faculty Of Physical Education</option>
              <option value="Social Science">Faculty of Social Science</option>
              <option value="Education">Faculty of Education</option>
              <option value="Medicine">Faculty of Medicine</option>
              <option value="Fine Art">Faculty of Fine Art</option>
              <option value="Dentistry">Faculty Of Dentistry</option>
              <option value="Pharmacy">Faculty of Pharmacy</option>
              <option value="Physical Therapy">Faculty of Physical Therapy</option>
              <option value="Economics">Faculty of Economics</option>
              <option value="COSCI">College of Social Communication Innovention</option>
              <option value="Bodhivijjalaya College">Bodhivijjalaya College</option>
              <option value="International College for Sustainability Studies">
                International College for Sustainability Studies
              </option>
              <option value="Environmental Culture and Ecotourism">
                Faculty of Environmental Culture and Ecotourism
              </option>
              <option value="Business Administration for Society">
                Faculty of Business Administration for Society
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <h5 class="my-2"><label for="department">Department: </label></h5>
          </div>
          <div class="col-12 col-md-8">
            <input type="text" class="form-control" v-model="user.department" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <h5 class="my-2"><label for="department">Email: </label></h5>
          </div>
          <div class="col-12 col-md-8">
            <input type="text" class="form-control" v-model="user.email" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <h5 class="my-2"><label for="department">Phone-Number: </label></h5>
          </div>
          <div class="col-12 col-md-8">
            <input type="text" class="form-control" v-model="user.tel_no" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <h5 class="my-2">
              <label for="department">{{ user.status }}-Id: </label>
            </h5>
          </div>
          <div class="col-12 col-md-8">
            <input type="text" class="form-control" v-model="user.status_id" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-light mb-3 mx-2 detail" @click="updateInfo">Update</button>
        <router-link to="/user/myProfile" class="btn btn-light mb-3 mx-2 detail"
          >Cancel</router-link
        >
      </div>

      <hr />
    </div>
  </div>

  <HPfooter />
</template>

<script>
import axios from "axios";
import HomepageHeader from "@/components/HomepageHeader";
import HPfooter from "@/components/homepageFooter";
import moment from "moment";

// import { VueCookieNext } from 'vue-cookie-next';

export default {
  components: {
    HomepageHeader,
    HPfooter,
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
    };
  },

  async created() {
    try {
      const result = await axios.get("/users/profile");
      this.user = result.data;
      this.$store.commit("setAuthentication", true);
    } catch (err) {
      alert(err.result.data.error_message);
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    timeformat() {
      const thisMoment = moment(this.user.createdAt).format("LL");
      return thisMoment;
    },
    async updateInfo() {
      const result = await axios.put("/users/profile", this.user);
      this.user = result.data;
      alert("Updated");
      this.$router.push({ name: "profile" });
    },
  },
  computed: {
    isEmpty: ({ actType }) => actType.length === 0,
  },
};
</script>

<style scoped>
select {
  border-radius: 0%;
  border-color: currentColor;
  width: 100%;
}
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
