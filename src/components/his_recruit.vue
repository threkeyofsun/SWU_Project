<template>
  <div class="parti mt-2 mt-md-4">
    <div>
      <p class="btn draw-border">In Progress</p>
      <div class="status-color">
        Status:
        <p class="d-inline mx-2 sq-de"><span class="square sq-pending"></span>Pending</p>
        <p class="d-inline mx-2 sq-reject"><span class="square"></span>Reject</p>
        <p class="d-inline mx-2 sq-approve"><span class="square"></span>Approve</p>
      </div>
      <!--  -->
      <p> {{}} </p>
      <div>
        <div v-if="act">
          <div v-for="(activity, index) in recruitment_act" :key="(activity, index)">
            <!--  -->
            <div
              class="mx-xxl-5 my-3 row"
              v-if="activity.status == 'Rejected' || activity.status == 'Pending'"
            >
              <div class="col col-sm-6 col-12 col-6 ms-0 me-0 align-self-center text-md-start ps-md-5">
                <router-link
                  :to="{
                    path: '/event/activities/' + activity._id,
                  }"
                  class="ps-xl-5"
                >
                  <span
                    class=""
                    :class="
                      activity.status === 'Rejected' ? 'square sq-reject' : 'square sq-de'
                    "
                  ></span>

                  {{ activity.title }}
                </router-link>
              </div>
              <span class="col-sm-6 col-12 col mx-0 mt-3 mt-sm-0 align-self-center ">
                <button
                  type=""
                  class="mx-1 btn-sm  btn-warning fw-bolder border border-warning "
                  :class="`${activity.status == 'Rejected' ? 'd-NotPending' : 'd-none'}`"
                  @click="hidden[index] = !hidden[index]"
                >
               
                  Comment
           
                </button>
                <!-- Edit -->
                <router-link :to="{ path: '/Activity/edit/' + activity._id }">
                  <button
                    type=""
                    class="mx-1 btn-sm  btn-warning fw-bolder border border-warning"
                    :class="`${activity.comment ? '' : 'd-none'}`"
                  >
                    Edit
                  </button></router-link
                >
                <!-- Cancel -->
                <button
                  type=""
                  :class="`${approve ? 'd-none' : ''}`"
                  class="btn-sm mx-1 border-0 text-white bg-secondary"
                  @click="delAct(activity._id)"
                >
                  Cancel
                </button>
              </span>

              <!-- Message from admin -->
              <div v-if="activity.status === 'Rejected'">
                <div class="mb-0" v-show="hidden[index]">
                  <div class="commentbox mb-0">
                    <p class="mb-0">{{ activity.comment }}</p>
                  </div>
                </div>
              </div>
              <!--  -->
              <hr class="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div>
      <p class="btn draw-border draw-border1">On Going</p>
      <div v-if="act">
        <div v-for="(activity, index) in recruitment_act" :key="(activity, index)">
          <div class="mb-0" v-if="activity.status === 'Approved'">
            <div class="row">
              <div class="col-sm-6 col-12 text-md-start ps-md-5">
                <router-link
                  :to="{
                    path: '/event/activities/' + activity._id,
                  }"
                  class="ps-xl-5"
                >
                  <span
                    class=" mx-2"
                    :class="
                      activity.status === 'Approved'
                        ? 'square sq-approve'
                        : 'square'
                    "
                  ></span>
                  {{ activity.title }}
                </router-link>
              </div>

              <div class="d-inline col-sm-6 col-12">
                <router-link :to="{ path: '/Activity/edit/' + activity._id }"><button class="button btn-sm mx-1  btn-open">Edit</button></router-link>
                <button class="button btn-red mx-1">End</button>
              </div>
            </div>
            <hr class="mt-1" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border2 mt-2">Completed Activity</p>
      <div class="mx-xxl-5">
        <p class="text-center"></p>
        <div v-if="act">
          <div v-for="(activity, index) in recruitment_act" :key="(activity, index)">
            <div class="mb-0" v-if="activity.status === 'Completed'">
              <div class="row">
                <div class="col-sm-6 col-12">
                  <router-link
                    :to="{
                      path: '/event/activities/' + activity._id,
                    }"
                    
                  >
                    {{ activity.title }}
                  </router-link>
                </div>

                <div class="d-inline col-sm-6 col-12">
                  <!-- <button class="button mx-1 btn-open">Open</button> -->
                  <button class="button btn-red mx-1">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comments: "false",
      act: null,
      recruitment_act: null,
      hidden: [],
      a:''
    };
  },
  async mounted() {
    try {
      const result = await axios.get("/users/profile");
      this.$store.state.info = result.data;
      this.$store.state.profileimg = result.data.profile_img;

      // End Profile
      const { data } = await axios.get("/users/history/events/recruited");
      this.act = data;
      this.recruitment_act = this.act.history.events.recruited;
      console.log(this.act);
     
    } catch (err) {
      // alert(err);
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    async delAct(ActId) {
      try {
        if (window.confirm("Do you want to delete this Activity?")) {
          const deleteAct = await axios.delete(`/events/${ActId}`);
          this.recruitment_act.splice(ActId, 1);
          console.log(deleteAct);
          window.location.reload();
        }
      } catch (err) {
        alert("Something went wrong!");
        console.log(err);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.button {
  width: 20%;
  height: 50px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  transition: background-color ease-in-out 0.5s;
  font-family: THSarabanBold;
}
.btn-red {
  background-color: #f68fa0;
}
.btn-open {
  background-color: rgb(80, 158, 158);
}
button:hover {
  background-color: transparent;
}
.btn-red:hover {
  border: 1px solid #f68fa0;
  color: #f68fa0;
}
.btn-open:hover {
  border: 1px solid rgb(80, 158, 158);
  color: rgb(80, 158, 158);
}
.commentbox {
  border-left: 6px solid #ccc;
  border-right: 6px solid #ccc;
  background-color: #ffaa9c40;
  color: #555555;
  font-family: "THSarabanBold";
  margin-top: 15px;
}
.status-color {
  border-bottom: solid 3px;
  padding-bottom: 3px;
  margin-bottom: 3%;
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
}
.parti .container {
  max-width: 100%;
}
.parti hr {
  margin-right: 11%;
}
@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 670px;
  }
}
</style>
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
