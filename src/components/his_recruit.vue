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
      <div>
        <div v-if="act">
          <div
            v-for="(activity, index) in act.history.activity.recruitment"
            :key="(activity, index)"
          >
            <!--  -->
            <div class="mx-xxl-5 my-3 row" v-if="act.history.activity.recruitment[index].status != 'Approve' ">
              <div class="col col-sm-6 col-12 col-6 ms-0 me-0 align-self-center">
                <router-link :to="{ path: '/event/activities/' + act.history.activity.recruitment[index]._id }" target="_blank">
                  {{ act.history.activity.recruitment[index].name }}
                </router-link>
              </div>
              <span class="col-sm-6 col-12 col mx-0 mt-3 mt-sm-0 align-self-center">
                <button
                  type=""
                  class="mx-1 btn bg-white btn-outline-warning border border-warning text-warning"
                  :class="`${comments ? 'd-none' : ''}`"
                >
                  Comment
                </button>
                <button
                  type=""
                  :class="`${approve ? 'd-none' : ''}`"
                  class="btn mx-1 text-white bg-secondary"
                >
                  Cancel
                </button>
              </span>
              <hr class="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border1">On Going</p>
      <div v-if="act">
        <div v-for="(activity, index) in act.history.activity.recruitment"
            :key="(activity, index)">
          <div v-if="act.history.activity.recruitment[index].status === 'Approve' ">
            {{ act.history.activity.recruitment[index].name }}
          </div>
        </div>
      </div>

      <!-- <div class="mx-xxl-5 row">
        <div class="col col-sm-6 col-12 col-6 ms-0 me-0 align-self-center">
          <router-link to="/event/activities/:id">
            <span class="square sq-approve"></span>
            Orientation Day
          </router-link>
        </div>
        <span class="col-sm-6 col-12 col mx-0 mt-3 mt-sm-0 align-self-center">
          <button type="" class="btn mx-1 text-white bg-secondary fw-normal">Edit</button>
          <button type="" class="btn mx-1 text-white bg-secondary fw-normal">
            Cancel
          </button>
        </span>
        <hr class="mt-3" />
      </div> -->
    </div>

    <div>
      <p class="btn draw-border draw-border2">Completed Activity</p>
      <div class="mx-xxl-5">
        <p class="text-center"></p>
        <div v-if="act">
        <div v-for="(activity, index) in act.history.activity.recruitment"
            :key="(activity, index)">
          <div v-if="act.history.activity.recruitment[index].status === 'Completed' ">
            {{ act.history.activity.recruitment[index].name }}
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
    };
  },
  async mounted() {
    try {
      const { data } = await axios.get("/users/history/recruitment");
      this.act = data;
      this.recruitment_act = this.act.history.activity.recruitment;
      console.log(this.recruitment_act);
    } catch (err) {
      alert(err);
    }
  },
};
</script>

<style lang="css" scoped>
.status-color {
  border-bottom: solid 3px;
  padding-bottom: 3px;
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
