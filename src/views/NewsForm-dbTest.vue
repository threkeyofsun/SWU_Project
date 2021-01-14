<template>
    <HomepageHeader />

<h1>Hello world</h1>

  <HPfooter />

</template>

<script>
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";

export default {
 
  props: {},
  components: {
    HomepageHeader,
    HPfooter,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped></style>
