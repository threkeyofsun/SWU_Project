<template>
  <div class="col-3 d-none d-md-block">
    <section class="sidebar ml-5">
      <router-link class="menuItem-active-link" to="/user/myProfile"
        ><p class="mb-0">Profile</p></router-link
      >

      <hr />
      <p>My Activities</p>
      <hr />
      <div class="MAlink">
        <p>
          <router-link to="/history" class="menuItem-active-link1"> History</router-link>
        </p>
        <p><router-link to="/newsHistory" class="upcoming"> News</router-link></p>
      </div>
      <hr />
      <p>Create Your Event</p>
      <hr />
      <div class="MAlink mx-0 ms-0 ms-xl-5">
        <p>
          <router-link to="/Create_News" class="upcoming"> Activity Recruit</router-link>
        </p>
        <p>
          <router-link to="/createnews" class="createnews"> Create News post</router-link>
        </p>
      </div>
      <hr />
      <div class="float-end fw-bold text-danger">
        <p @click="logout">Logout</p>
      </div>
    </section>
    <span class="d-inline"></span>
  </div>
</template>

<script>
  import axios from "axios";

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    async logout() {
        const result = await axios.delete('/users/logout');
        this.user = result.data;
        this.$router.push({name:'login'})
      }
  },
};
</script>

<style scoped>
input.file-input {
  display: none;
}

/* Underline decorate */
a.active.router-link-exact-active.menuItem-active-link{
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
  margin-right: 50%;
}
a.active.router-link-exact-active.menuItem-active-link1 {
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
}
.menuItem-active-link,
.menuItem-active-link1,
.upcoming,
.createnews {
  display: -webkit-box;
  border-bottom: 3px solid #ffffff;
}
a.active.router-link-exact-active.upcoming {
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
}
a.active.router-link-exact-active.createnews {
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
}
/* End of underline decorate */

/*  */
.sidebar {
  font-family: "THSaraban";
  margin: 35% 0% 0% 30%;
  font-size: large;
}
.MAlink {
  margin-left: 25%;
}
.detail {
  font-family: "THSaraban";
}
</style>
