<template>
  <HomepageHeader />

  <div class="row topspace">
    <Sidebar />
    <!--End of  Sidebar -->

    <div class="col-md-9 col-12">
      <div class="container">
        <p class="mt-5 mb-4 anounce-title">My Activities > History</p>
      </div>
      <div class="linkhead myt-4">
        <div class="text-center">
          <div
            class="component mt-2 mx-2 mx-sm-4 mx-md-4 mx-lg-5"
            :class="[isHidden ? activeClass : 'hightling']"
            @click="
              isHidden = false;
              available = true;
              notdisplay = true;
            "
          >
            <p class="mb-0">Participated</p>
          </div>
          <div
            class="component mt-2 mx-2 mx-sm-4 mx-md-4 mx-lg-5"
            :class="[available ? activeClass : 'hightling']"
            @click="
              isHidden = true;
              available = false;
              notdisplay = true;
            "
          >
            <p class="mb-0">Recruitment</p>
          </div>
          <div
            class="component mt-2 mx-2 mx-sm-4 mx-md-4 mx-lg-5"
            :class="[notdisplay ? activeClass : 'hightling']"
            @click="
              isHidden = true;
              available = true;
              notdisplay = false;
            "
          >
            <p class="mb-0">Upcoming</p>
          </div>
        </div>

        <div class="container text-center">
          <div :class="compClass">
            <Participate />
          </div>
          <div :class="hidden">
            <Recruit />
          </div>
          <div :class="hidden1">
            <Upcoming />
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
import Participate from "../components/participate";
import Recruit from "../components/his_recruit";
import Upcoming from "../components/upcoming";
import axios from "axios";


export default {
  components: {
    HomepageHeader,
    HPfooter,
    Sidebar,
    Participate,
    Recruit,
    Upcoming,
  },

  data() {
    return {
      isHidden: false,
      available: true,
      notdisplay: true,
    };
  },
  async created() {},
  async mounted() {
    try {
      const result = await axios.get("/users/profile");
      this.$store.state.info = result.data;
      this.$store.state.profileimg = result.data.profile_img;     
    } catch (err) {
      // alert(err);
    }
  },
  methods: {},
  computed: {
    compClass: function () {
      return {
        isHidden: this.isHidden,
      };
    },
    hidden: function () {
      return {
        available: this.available,
      };
    },
    hidden1: function () {
      return {
        notdisplay: this.notdisplay,
      };
    },
  },
};
</script>

<style scoped>
.hightling {
  color: #ff8457;
  border-bottom: solid 3px #b4bac4;
  margin-bottom: 0rem !important;
}

.isHidden,
.available,
.notdisplay {
  display: none;
}
.decorate {
  padding-left: 7px;
  width: 140px;
  height: 43px;
  background: linear-gradient(to right, #c79090 2px, transparent 1px) 0 0,
    linear-gradient(to right, #c79090 2px, transparent 1px) 0 100%,
    linear-gradient(to left, #c79090 2px, transparent 1px) 100% 0,
    linear-gradient(to left, #c79090 2px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, #ffb26c 2px, transparent 1px) 0 0,
    linear-gradient(to bottom, #ffb26c 2px, transparent 1px) 100% 0,
    linear-gradient(to top, #ffb26c 2px, transparent 1px) 0 100%,
    linear-gradient(to top, #ffb26c 2px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 11% 19%;
  color: #636468;
}
.decorate1 {
  padding-left: 11px;
  width: 105px;
  height: 42px;
  background: linear-gradient(to right, #c79090 2px, transparent 1px) 0 0,
    linear-gradient(to right, #c79090 2px, transparent 1px) 0 100%,
    linear-gradient(to left, #c79090 3px, transparent 1px) 100% 0,
    linear-gradient(to left, #c79090 3px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, #ffb26c 2px, transparent 1px) 0 0,
    linear-gradient(to bottom, #ffb26c 2px, transparent 1px) 100% 0,
    linear-gradient(to top, #ffb26c 2px, transparent 1px) 0 100%,
    linear-gradient(to top, #ffb26c 2px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 11% 19%;
  color: #636468;
}
.decorate2 {
  padding-left: 5px;
  width: 72px;
  height: 41px;
  background: linear-gradient(to right, #c79090 2px, transparent 1px) 0 0,
    linear-gradient(to right, #c79090 2px, transparent 1px) 0 100%,
    linear-gradient(to left, #c79090 2px, transparent 1px) 100% 0,
    linear-gradient(to left, #c79090 2px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, #ffb26c 2px, transparent 1px) 0 0,
    linear-gradient(to bottom, #ffb26c 2px, transparent 1px) 100% 0,
    linear-gradient(to top, #ffb26c 2px, transparent 1px) 0 100%,
    linear-gradient(to top, #ffb26c 2px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 11% 19%;
  color: #636468;
}

.linkhead {
  margin-top: 3%;
  font-family: "Srinakharinwirot";
  color: #636468;
}
.linkhead .component {
  display: inline-flex;
  text-decoration: none;
  font-size: larger;
  cursor: default;
}
.topspace {
  margin-top: -6%;
}
.detail {
  font-family: "THSaraban";
}
.anounce-title {
  font-size: 20px;
  color: rgb(184 46 46 / 70%);
}
</style>
