<template>
  <div class="col-3 d-none d-md-block ">
    <section class="sidebar ml-5">
      <router-link class="menuItem-active-link" to="/user/en60109010501"
        ><p class="mb-0">
          Profile
        </p></router-link
      >

      <hr />
      <p>My Activities</p>
      <hr />
      <div class="MAlink">
        <p><router-link to="/history" class="menuItem-active-link1"> History</router-link></p>
        <p><router-link to="/upcoming" class="upcoming"> Upcoming</router-link></p>
      </div>
      <hr />
      <p>Create Your Event</p>
      <hr />
      <div class="MAlink">
        <p><router-link to="/Create_News" class="upcoming"> Activity Recruit</router-link></p>
        <p><router-link to="/createnews" class="createnews"> Create News post</router-link></p>
      </div>
      <hr />
      <div class="float-end fw-bold text-danger">
        <p>Logout</p>
      </div>
    </section>
    <span class="d-inline"></span>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      color: "red",
      clickedColor: "",
      alteredState: false,
    };
  },
  methods: {
  
  },
};
</script>

<style scoped>
input.file-input {
  display: none;
}

/* Underline decorate */
.router-link-active.router-link-exact-active.menuItem-active-link {
  display: -webkit-box;
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
  margin-right: 50%;
}
.router-link-active.router-link-exact-active.menuItem-active-link1 {
  display: -webkit-box;
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
}
.menuItem-active-link, .menuItem-active-link1, .upcoming, .createnews{
  display: -webkit-box;
  border-bottom: 3px solid #ffffff;
}
.router-link-active.router-link-exact-active.upcoming {
  display: -webkit-box;
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
}
.router-link-active.router-link-exact-active.createnews {
  display: -webkit-box;
  border-bottom: 3px solid #f1bbbb;
  color: #ff9f48;
}
/* End of underline decorate */

/*  */
.sidebar {
  font-family: "THSaraban";
  margin: 35% 0% 0% 30%;
  font-size: 3vh;
}
.MAlink {
  margin-left: 25%;
}
.detail {
  font-family: "THSaraban";
}
</style>
