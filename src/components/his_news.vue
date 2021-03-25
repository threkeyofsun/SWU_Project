<template>
  <div>
    <div class="mx-xxl-5 mt-5">
      <hr />
      <div class="parti mt-2 mt-md-4">
        <div>
          <div class="mx-xxl-5">
            <li> <router-link to="/event/news/:id"> <span> News I Lorem Ipsum is simply dummy text... </span></router-link></li>
            <hr />
          </div>
          <div class="mx-xxl-5">
            <li> <router-link to="/event/news/:id"> <span> News II Lorem Ipsum is simply dummy text... </span></router-link></li>
            <hr />
          </div>
          <div class="mx-xxl-5">
            <li> <router-link to="/event/news/:id"> <span> News III Lorem Ipsum is simply dummy text... </span></router-link></li>
            <hr />
          </div>
        </div>
      </div>
      <hr class="mt-4" />
    </div>
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
