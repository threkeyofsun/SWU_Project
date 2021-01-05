<template>
  <div class="card text-white my-5 ">
    <span class="decorate-line"></span>
    <span class="decorate-line2"></span>
    <img src="/img/bg-12.png" class="card-img  " alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">Last updated 3 mins ago</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      page: 0,
      pages: [],
      perPage: 5,
      displayedActivitys: [],
      profile: {
        img:
          "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      },
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 19px;
}
.card-img {
  border-radius: 19px;
  max-height: 370px;
  object-position: center;
  object-fit: cover;
}
.card-img-overlay {
  z-index: 1;
  top: auto;
  right: auto;
  bottom: 0;
  left: auto;
  padding: 2rem;
}

.card:after {
  z-index: 0;
  border-radius: 19px;
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 0%) 0%,
    rgb(255 255 255 / 3%) 3%,
    rgb(112 112 112 / 75%) 90%,
    rgb(112 112 112 / 75%) 100%
  );
}
.decorate-line {
  width: 4px;
  height: 86%;
  z-index: 2;
  right: 7%;
  position: absolute;
  background-color: #fffffffb;
  color: #636468;
}
.decorate-line2 {
  width: 93%;
  height: 4px;
  z-index: 2;
  right: -1px;
  top: 13%;
  position: absolute;
  background-color: #fffffffb;
  color: #636468;
}
</style>
