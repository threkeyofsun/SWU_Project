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
import axios from "axios";


export default {
  
  components: {
    AdminHeader,
    HPfooter,
    Insidepage
  },
  data() {
    return {};
  },
  async created() {
    const result = await axios.get("/users/profile");
    this.$store.state.adminInfo = result.data;
    this.firstname = 'Admin';
    this.$store.commit("setAuthenticationAdmin", true);
    const res = await axios.get("/users/profile");
    this.$store.state.info = res.data;
    this.$store.commit("setAuthentication", true);
  },  
};
</script>

<style lang="scss" scoped></style>
