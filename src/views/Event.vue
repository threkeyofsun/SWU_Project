<template>
  <HomepageHeader />

  <section class="event-content">
    <div class="container">
      <div class="header-text mb-5 px-4">
        <p class="fs-3 d-inline " >Activity</p>
        <p class="fs-3 d-inline mx-5">News</p>
      </div>


  <Activity />

     
    </div>
  </section>
  <HPfooter />
</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import Activity from "../components/Activity";


export default {
  components: {
    HomepageHeader,
    HPfooter,
    Activity
  },
  data() {
    return {
 
      
    };
  },
};
</script>

<style scoped>
.header-text {
  font-family: "Srinakharinwirot";
}
.has-dropdown li{
  opacity: 0.2;
}
.is-open li{
  opacity: 1;
}
</style>
