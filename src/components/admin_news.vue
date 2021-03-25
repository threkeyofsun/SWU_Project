<template>
  <div class="parti mt-2 mt-md-4">
    <div>
      <div class="mx-xxl-5 mt-5 row">
        <li class="col-12 col-lg-6 align-self-start mt-2">
          <router-link to="/event/activities/:id">
            <span> News I Lorem Ipsum is simply dummy text... </span></router-link
          >
        </li>
        <span class="co-12 mt-3 mt-lg-0 col-lg-6 text-end-lg butn">
          <button type="" class="btn btn-info text-white mx-1 mb-3">Approve</button>
          <button type="" class="btn btn-danger mx-1 mb-3">Delete</button>
          <button type="" class="btn btn-secondary mx-1 mb-3">Not Approve</button>
        </span>
      </div>
      <hr />
    </div>

    <!-- Must loop and detrive data from database  -->
    <div>
      <div class="mx-xxl-5 mt-3 row">
        <li class="col-12 col-lg-6 align-self-start mt-2">
          <router-link to="/event/activities/:id">
            <span> News II Lorem Ipsum is simply dummy text... </span></router-link
          >
        </li>
        <span class="co-12 mt-3 mt-lg-0 col-lg-6 text-end-lg butn">
          <button type="" class="btn btn-info text-white mx-1 mb-3">Approve</button>
          <button type="" class="btn btn-danger mx-1 mb-3">Delete</button>
          <button type="" class="btn btn-secondary mx-1 mb-3">Not Approve</button>
        </span>
      </div>
      <hr />
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
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
