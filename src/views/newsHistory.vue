<template>
  <HomepageHeader />

  <div class="row topspace">
    <Sidebar />
    <!--End of  Sidebar -->

    <div class="col-md-9 col-12">
      <div class="mx-xxl-5">
        <div class="parti mx-auto text-center">
          <p class="mb-4 anounce-title">My Activities > News History</p>
          
          <p class="btn draw-border">In Progress</p>
          <div class="status-color">
            Status:
            <p class="d-inline mx-2 sq-de">
              <span class="square sq-pending"></span>Pending
            </p>
            <p class="d-inline mx-2 sq-approve"><span class="square"></span>Approve</p>
            <!-- <p class="d-inline mx-2 sq-reject"><span class="square"></span>Reject</p> -->

          </div>
          <!--  -->
          <h3 class="commentbox mt-4 mb-3" v-show="allAct"> You are not Participate in any Activity yet</h3>
          <!--  -->
          <div
            class="mx-xxl-5 mt-4"
            v-for="(news, idx) in $store.state.newspost"
            :key="(news, idx)"
            :class="{ active: idx == 0 }"
          >
            <div v-if="news.status === 'Pending'" class="row">
              <div class="col-sm-6 col-12 ms-0 me-0 align-self-center">
                <router-link :to="{ path: '/event/news/' + news._id }">
                  <p class="my-0">
                    <span class="" :class="news.status === 'Pending' ? 'square sq-de':''"></span>
                    {{ news.title }}
                  </p></router-link
                >
              </div>
              <span class="col-sm-6 col-12 mx-0 mt-3 mt-sm-0 align-self-center">
                <button
                  type=""
                  class="btn-sm border-0 mx-1 text-white bg-secondary"
                  @click="delNews(news._id)"
                >
                  Cancel
                </button>
              </span>
              <hr class="mt-3" />
            </div>
          </div>
          <div>
            <p class="btn draw-border draw-border1 mt-3">Approved</p>
            <div
              v-for="(news, idx) in $store.state.newspost"
              :key="(news, idx)"
              :class="{ active: idx == 0 }"
            >
              <div class="mb-0" v-if="news.status === 'Approved'">
                <div class="row">
                  <div class="col-sm-6 col-12">
                    <router-link
                      :to="{ path: '/event/news/' + news._id }"
                      
                    >
                    <span class="me-2" :class="news.status === 'Approved' ? 'square sq-approve':''"></span>
                      {{ news.title }}
                    </router-link>
                  </div>

                  <div class="d-inline col-sm-6 col-12">
                    <router-link :to="{ path: '/News/edit/' + news._id }">
                    <button
                      class="mx-1 btn-sm bg-white btn-outline-warning border border-warning text-warning"
                    >
                      Edit
                    </button>
                    </router-link>
                    <button
                      class="bg-white btn-sm btn-outline-danger border border-danger text-danger mx-1"
                      @click="delNews(news._id)"
                    >
                      Delete
                    </button>
                  </div>
                  <hr class="my-3" />
                </div>
              </div>
            </div>
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
import axios from "axios";

export default {
  components: {
    HomepageHeader,
    HPfooter,
    Sidebar,
  },
  data() {
    return {
      numA: {},
      Newslist: {},
      allAct:false,

    };
  },
  methods: {
    async delNews(NewsId) {
      try {
        if (window.confirm("Do you want to delete this News?")) {
          const deletenews = await axios.delete(`/news/${NewsId}`);
          this.$store.state.newspost.splice(NewsId, 1);
          console.log(deletenews);
          this.$router.push({ name: "history" });
        }
      } catch (err) {
        alert("Something went wrong!");
        console.log(err);
        window.location.reload();
      }
    },
  },
  async mounted() {
    // Get News History อันนี้อ่ะ
    const { data } = await axios.get("/users/history/news");
    this.numA = data; //Get history
    this.$store.state.newspost = this.numA.history.news; //get news in history
    console.log(this.numA);
    if(this.numA.history.news == ''){
      this.allAct=true;
    }


    // Profile
    const result = await axios.get("/users/profile");
    this.$store.state.info = result.data;
    this.$store.state.profileimg = result.data.profile_img;
  },
};
</script>

<style lang="css" scoped>
  .commentbox {
    border-left: 6px solid #ff8686;
    border-right: 6px solid #b6b6b6;
    background: linear-gradient( 
90deg
, rgb(255 241 241) 0%, rgba(241, 187, 187, 1) 22%, rgb(215 83 83 / 75%) 90%, rgba(176, 68, 68, 0.5525560566023284) 100% );
  color: #ffffff;
  font-family: "THSarabanBold";
  margin-top: 15px;
}
  /*  */
.status-color {
  border-bottom: solid 3px;
    padding-bottom: 3px;
    width: 90%;
    display: inline-table;
}
.square {
  width: 10px;
  height: 10px;
  display: inline-flex;
  background: currentColor;
  margin-right: 10px;
}
.sq-de {
  color: #ffca59;
}
.sq-reject {
  color: #f87070;
}
.sq-approve {
  color: cadetblue;
  margin: 0px;
}
span .btn {
  background: cornflowerblue;
}
.parti {
  font-family: "THSaraban";
  font-size: larger;
  margin-top: 23%;
}
.parti .container {
  max-width: 100%;
}
.parti hr {
  width: 86%;
  margin: auto;
}
.topspace {
  margin-top: -6%;
}
.anounce-title {
  color: rgb(184 46 46 / 70%);
  margin-top: -13%;
}
@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 670px;
  }
}
</style>

// scss
<style lang="scss" scoped>
//=== Drawing effect

@mixin btn-border-drawing(
  $color: #ccc,
  $hover: black,
  $width: 2px,
  $vertical: top,
  $horizontal: left,
  $duration: 0.25s
) {
  box-shadow: inset 0 0 0 $width $color;
  color: $color;
  transition: color $duration $duration/3;
  position: relative;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;

    #{$vertical}: 0;
    #{$horizontal}: 0;
  }

  &::before {
    $h-side: if($horizontal == "left", "right", "left");

    border-#{$vertical}-width: $width;
    border-#{$h-side}-width: $width;
  }

  &::after {
    $v-side: if($vertical == "top", "bottom", "top");

    border-#{$v-side}-width: $width;
    border-#{$horizontal}-width: $width;
  }

  &:hover {
    color: $hover;

    &::before,
    &::after {
      border-color: $hover;
      transition: border-color 0s, width $duration, height $duration;
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, $duration;
    }

    &::after {
      transition-delay: 0s, $duration, 0s;
    }
  }
}
.draw-border1 {
  box-shadow: inset 0 0 0 4px #ffc5b396 !important;
}
.draw-border2 {
  box-shadow: inset 0 0 0 4px #7599c696 !important;
}

.draw-border {
  @include btn-border-drawing(#58afd1, #ffe593, 4px, bottom, right);
}
.draw-border {
  box-shadow: inset 0 0 0 4px #7aa15596;
  color: #214c5eb4;
  transition: color 0.25s 0.0833333333s;
  position: relative;
  width: 91%;
}

//=== Button styling, semi-ignore
.btn {
  background: none;
  border: none;
  cursor: default;
  line-height: 1.5;
  font: 700 1.3rem "THSaraban";
  padding: 0.3em 3%;
  letter-spacing: 0.05rem;

  &:focus {
    outline: 2px dotted #55d7dc;
  }
}

//=== Pen styling, ignore
body {
  background: #1f1a25;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
