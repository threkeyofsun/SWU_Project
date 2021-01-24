<template>
  <HomepageHeader />

  <div class="container">
    <div class="posting">
      

      <form>
        <label>
          <!-- radio image -->
          <input type="radio" name="test" value="small" checked />
          <img class="radioim" src="/img/Mask-Group-25.png" />
        </label>
        <label>
          <input type="radio" name="test" value="big" />
          <img class="radioim" src="/img/Mask-Group-25.png" />
        </label> 
        <label>
          <input type="radio" name="test" value="big" />
          <img class="radioim" src="/img/Mask-Group-25.png" />
        </label>
         <label>
          <input type="radio" name="test" value="big" />
          <img class="radioim" src="/img/Mask-Group-25.png" />
        </label>
<div class="badge user-badge">
        <img
          class=" profile-img  "
          src="/img/Mask-Group-25.png"
          alt="profile.img"
        />
        <p class="firstname pt-4 "><b> Upload your cover image here</b></p>
        <button type="button" class="btn btn-light">Upload</button>
      </div>

        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
      </form>
    </div>
    <hr />
    <!-- Detail -->

    <div class="detail my-4 ml-md-5"></div>
    <hr />
  </div>

  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
export default {
  name: "ProductDetailPage",
  components: {
    HomepageHeader,
    HPfooter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.radioim {
  opacity: 0.5;
  object-fit: cover;
    height: 50px;
    width: 50px;
    border-radius: 0px;
}
/* HIDE RADIO */
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + img {
  cursor: pointer;
}


/* CHECKED STYLES */
[type="radio"]:checked + img {
  opacity: 1;
}
/* Radio */

.sidebar {
  position: fixed;
  background-color: #f8ca00;
  height: 100%;
}
.detail {
  font-family: "THSaraban";
}
.container {
  max-width: 680px;
  width: 100%;
}
.posting {
  text-align-last: center;
}
.profile-img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
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
