<template>
  <div class="parti mt-2 mt-md-4 mt-md-5 mt-3">
    <div v-for="(activity, index) in act" :key="(activity, index)">
      <!-- Activity  Do v-for loop-->
      <div class="mx-xxl-5 row">
        <li class="col-12 col-lg-6 align-self-start mt-2">
          <router-link :to="{ path: '/admin/activity/' + activity._id }" target="_blank">
            <span> {{ activity.title }} </span></router-link
          >
        </li>
        <span class="co-12 mt-3 mt-lg-0 col-lg-6 text-end-lg butn">
          <button
            type=""
            @click="Approve(activity._id)"
            class="btn btn-info text-white mx-1 mb-3"
          >
            Approve
          </button>
         
          <button
            type=""
            class="btn btn-secondary mx-1 mb-3 comment"
            @click="activity.comment = !activity.comment"
          >
            Reject
          </button>
        </span>
        <form
          action=""
          @submit.prevent="sendToUser"
          method="post"
          enctype="multipar/form-data"
          v-if="act[index].comment"
        >
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
              v-model="comment"
            >  </textarea>
            <label for="floatingTextarea2">Comments</label>
            <button
              type="button"
              @click="Reject(act[index]._id)"
              class="btn btn-outline-warning mb-3"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <hr />
    </div>

    <!-- Must loop and detrive data from database  -->

    <!--  -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      textbox: true,
      act: {},
      user: {},
      comment: "",
      index: "0",
    };
  },
  async mounted() {
    try {
      const result = await axios.get("/admin/activities");
      this.act = result.data;
      console.log(result);
    } catch (err) {
      alert(err.result.data.error_message);
    }
  },
  methods: {
    
    async Approve(ActId) {
      try {
        if (window.confirm("Do you want to Approve this Announcement?")) {
          const result = await axios.post(`/admin/activities/${ActId}`, 
          {comment: "Approved",
           status: "Approved" });
          console.log(result);
          setTimeout(() => {
            this.$router.go();
          }, 1500);
        }
      } catch (err) {
        alert("Something went wrong!");
      }
    },
    async Reject(ActId) {
      try {
        if (window.confirm("Do you want to Reject this Announcement?")) {
          const result = await axios.post(`/admin/activities/${ActId}`, 
          {comment: this.comment,
           status: "Rejected" });
          console.log(result);
          setTimeout(() => {
            this.$router.push("/homepage");
          }, 1500);
        }
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style lang="css" scoped>
textarea#floatingTextarea2 {
  width: 79%;
  margin-left: 10.5%;
  margin-bottom: 2%;
}

.form-floating > label {
  padding: 1rem 1.75rem;
  margin-left: 10.5%;
}
.text-start {
  text-align: left;
}
.parti {
  font-family: "THSaraban";
  font-size: larger;
}
.parti .container {
  max-width: 100%;
}
.parti hr {
  margin-left: 11%;
  margin-right: 11%;
  margin-top: 0;
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
  padding: 0.3em 36.7%;
}
.draw-border2 {
  box-shadow: inset 0 0 0 4px #7599c696 !important;
}

.draw-border {
  @include btn-border-drawing(#58afd1, #ffe593, 4px, bottom, right);
}
.draw-border[data-v-693b56fe] {
  box-shadow: inset 0 0 0 4px #7aa15596;
  color: #214c5eb4;
  transition: color 0.25s 0.0833333333s;
  position: relative;
  width: 91%;
}

//=== Button styling, semi-ignore
.btn {
  cursor: pointer;
  line-height: 1.5;
  padding: 0.5em 3%;
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
