<template>
  <div class="postloop ">
    <router-link to="/event/news/123">
    <div class="card text-white  ">
      <span class="decorate-line"></span>
      <span class="decorate-line2"></span>
      <span class="badge time-badge ">Time</span>
      <span class="badge user-badge fw-light ">
        <img
          class=" profile-img  "
          v-bind:src="profile.img[0]"
          alt="profile.img"
        />
        <p class="firstname d-inline mx-0 mx-md-2">Firstname</p>
        <p class="lastname  d-inline ">L.</p>
      </span>
      <img src="/img/bg-12.png" class="card-img  " alt="..." />
      <div class="card-img-overlay mx-auto">
        <h3 class="card-title">Card title</h3>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
</router-link>
  </div>

  <div class="postloop ">
    <div class="card text-white my-5 ">
      <span class="decorate-line"></span>
      <span class="decorate-line2"></span>
      <span class="badge time-badge ">Time</span>
      <span class="badge user-badge fw-light ">
        <img
          class=" profile-img  "
          v-bind:src="profile.img[1]"
          alt="profile.img"
        />
        <p class="firstname d-inline mx-0 mx-md-2">Firstname</p>
        <p class="lastname  d-inline ">L.</p>
      </span>
      <img src="/img/photo-1003-full.jpeg" class="card-img  " alt="..." />
      <div class="card-img-overlay mx-auto">
        <h3 class="card-title">Card title</h3>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>

  <div class="postloop ">
    <div class="card text-white my-5 ">
      <span class="decorate-line"></span>
      <span class="decorate-line2"></span>
      <span class="badge time-badge ">Time</span>
      <span class="badge user-badge fw-light ">
        <img
          class=" profile-img  "
          v-bind:src="profile.img[2]"
          alt="profile.img"
        />
        <p class="firstname d-inline mx-0 mx-md-2">Firstname</p>
        <p class="lastname  d-inline ">L.</p>
      </span>
      <img src="/img/photo-11471-full.jpeg" class="card-img  " alt="..." />
      <div class="card-img-overlay mx-auto">
        <h3 class="card-title">Card title</h3>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
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
        img: [
          "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcBFvwWwx5kb2YQ3-hgYq_LuBMzL_mcm6Ww&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTj3K9YhP2F27Z6hMGZm6gKSuRNF-B07GQWg&usqp=CAU",
        ],
      },
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 50px;
  border: 1px solid rgb(255, 255, 255);
  margin: 3rem auto;
}
.card-img {
  border-radius: 50px;
  max-height: 414px;
  object-position: center;
  object-fit: cover;
}
.card-img-overlay {
  z-index: 1;
  top: auto;
  right: auto;
  left: 15%;
  padding: 0 6rem 0 22px;
  font-family: "Srinakharinwirot";
}

.card-img-overlay p {
  font-family: "THSaraban";
  font-size: 32px;
}

.card:after {
  z-index: 0;
  border-radius: 50px;
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

/* Time and User Badge */
.time-badge {
  padding: 10px 15px;
  border-radius: 0;
  left: 7%;
  top: 13%;
  position: absolute;
  background-color: #ffffff;
  color: #636468;
  font-family: "THSaraban";
  font-size: 36px;
}
.user-badge {
  font-size: 16px;
  z-index: 2;
  left: 0;
  bottom: 25%;
  position: absolute;
  background-color: #ffffffe0;
  color: #000000;
  border-radius: 0px;
  font-family: "THSaraban";
  padding: 7px 7px;
}
.profile-img {
  border-radius: 50%;
  width: 55px;
  height: 55px;
}

/* XXL */
@media screen and (max-width: 1400px) {
  .card-img {
    max-height: 348px;
  }
}
/* XL */
@media screen and (max-width: 1200px) {
  .card-img {
    max-height: 315px;
  }
}
@media only screen and (max-width: 992px) {
  .card-img-overlay {
    bottom: 1px;
    left: 17%;
    padding: 1rem 2rem;
  }
  .card-img-overlay p {
    font-size: 25px;
    line-height: normal;
  }
  .time-badge {
    font-size: 22px;
  }
  .card-img {
    max-height: 243px;
  }
}

@media only screen and (max-width: 768px) {
  .card-img {
    max-height: 174px;
  }
  .card-img-overlay {
    bottom: 0px;
    padding: 0rem 2rem 1% 10%;
    left: 15%;
    line-height: 1;
  }
  .card-img-overlay h3 {
    font-size: 24px;
    margin-bottom: 4px;
  }
  .card-img-overlay p {
    font-size: 16px;
    line-height: normal;
  }
  .user-badge {
    padding: 2px 5px;
    font-size: 15px;
  }
  .user-badge p {
    padding: 0px 2px;
  }
  .profile-img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
  .card {
    border-radius: 25px;
  }
  .card-img {
    border-radius: 25px;
  }
  .card:after {
    border-radius: 25px;
  }
}
/* Extraaaaaaaaaaaa */
@media only screen and (max-width: 525px) {
  .card-img {
     max-height: 157px;
  }
}

@media only screen and (max-width: 450px) {
  .card-img {
    max-height: 96px;
  }
  .card-img-overlay {
    bottom: 9%;
    left: 26%;
    padding: 0rem 9% 0rem 0rem;
    font-size: 12px;
  }
  .user-badge {
    padding: 2px 0px;
    font-size: 12px;
  }
  .user-badge p {
    padding: 0px 2px;
  }
  .profile-img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .time-badge {
    padding: 4px 7px;
    font-size: 16px;
  }
  .card-img-overlay h3 {
    font-size: 19px;
  }
  .card-img-overlay p {
    font-size: 12px;
    line-height: 0.9;
  }
}
</style>
