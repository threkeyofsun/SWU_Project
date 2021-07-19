<template>
  <div class="parti mt-2 mt-md-4">      
      <h3 class="commentbox mb-3" v-show="allAct"> You are not Participate in any Activity yet</h3>

    <div>
      <p class="btn draw-border">Volunteer Activities</p>
      <div class="mx-xxl-5">
        <!--  -->
        <hr />
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border1">Regular Activities Activities</p>
      <div class="mx-xxl-5">
<!--  -->
        <hr />
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border2">Force Activities</p>
      <div class="mx-xxl-5">
<!--  -->
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allAct:true,
    };
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
