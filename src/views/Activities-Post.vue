<template>
  <HomepageHeader />

  <div class="container">
    <p class="mt-3 mb-4 anounce-title text-center text-md-start">Activity Title</p>
    <div class="posting">
      <div class="badge user-badge">
        <img class="profile-img" src="/img/Mask-Group-25.png" alt="profile.img" />
        <p class="firstname d-inline px-2">Firstname</p>
        <p class="lastname d-inline px-1">L.</p>
        <p class="time-badge">Jan 7, 2020</p>
      </div>
    </div>
    <hr />
    <!-- Detail -->

    <p>Applicant Qualification</p>
    <div class="detail my-2">
      <div class="qualification">
        <div class="d-sm-inline">
          <p class="qa d-inline">Applicant Number :</p>
          <p class="mx-3 d-inline">20</p>
        </div>
        <div class="d-sm-inline">
          <p class="qa d-inline">Student Year :</p>
          <p class="mx-3 d-inline">1 - 4</p>
        </div>
        <div class="">
          <p class="qa d-inline">At Place :</p>
          <p class="mx-3 d-inline">
            Building G, Srinakharinwirot University Ongkharak Campus
          </p>
        </div>
        <div class="d-inline">
          <p class="qa d-inline">Start Date :</p>
          <p class="mx-3 d-inline">
            May 12, 2021 <span class="fw-bolder mx-1">At</span> 07.30
          </p>
        </div>
        <div class="d-inline">
          <p class="qa d-inline">End Date :</p>
          <p class="mx-3 d-inline">
            May 12, 2021 <span class="fw-bolder mx-1">At</span> 19.30
          </p>
        </div>
      </div>
    </div>
    <hr />
    <p class="py-0 my-0">Attivity Description</p>
    <p class="lorem">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of
      the printing and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem
      Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum
    </p>
    <button type="" class="cust-btn">
      <div class="btn draw-border">Apply HERE</div>
    </button>
    <hr />

    <div class="mb-5">
      <img class="img-act" src="/img/whale.jpg" alt="..." />
      <img class="img-act" src="/img/3505624.png" />
    </div>
  </div>

  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";

export default {
  setup() {
    return {
      HomepageHeader,
      HPfooter,
    };
  },
};
</script>

<style scoped>
/* Start QA */
.cust-btn {
  box-shadow: none;
    border: none;
    padding: 6px 12px;
    display: block;
    background: white;
    width: 100%;
}
button:focus {
  outline: 0;
}
.detail {
  font-family: "THSaraban";
}
.qualification .qa {
  font-family: "THSaraban";
  font-size: large;
}

/* End of QA */
.img-act {
  width: 100%;
  object-fit: cover;
  padding: 2% 0%;
}
.lorem {
  font-family: "THSaraban";
}
.container {
  max-width: 680px;
  width: 100%;
}
.profile-img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
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

@media screen and (max-width: 551.98) {
  container {
    margin: 0 24px;
  }
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
.draw-border {
  @include btn-border-drawing(#58afd1, #ffe593, 4px, bottom, right);
}
.draw-border {
  width: 100%;
}

//=== Button styling, semi-ignore
.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.3rem "THSaraban";
  padding: 0.3em 3%;
  letter-spacing: 0.05rem;

  &:focus {
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
