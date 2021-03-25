<template>
  <div>
    <div>
      <AdminHeader />
    </div>
<div>
    <Insidepage />
    
</div>
    <div>
      <HPfooter />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/admin_header";
import HPfooter from "../components/homepageFooter";
import Insidepage from "../components/admin_insidepage";

export default {
  components: {
    AdminHeader,
    HPfooter,
    Insidepage
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
