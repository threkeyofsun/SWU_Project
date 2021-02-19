<template>
 <div class="col-3 d-none d-md-block ">
      <section class="sidebar ml-5">
      <router-link class="text-dark" to=""><p >Profile</p></router-link>
      <hr>
      <p>My Activities</p>
      <hr>
      <div class="MAlink">
        <p><router-link to=""> History</router-link></p>
       <p> <router-link to=""> Upcoming</router-link></p>
      </div>
      <hr>
      <p>Create Your Event</p>
      <hr>
      <div class="MAlink">
       <p><router-link to=""> Activity Recruit</router-link></p>
       <p> <router-link to="">  Create News post</router-link></p>
        <p> <router-link to=""> Announcements</router-link></p>
      </div>
      <hr>
      <div class="float-end fw-bold text-danger">
        <p>Logout</p>
      </div>
      </section>
      <span class="d-inline"></span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
input.file-input {
    display: none;
}
/*  */
.sidebar{
  font-family: "THSaraban";
    margin: 35% 0% 0% 30%;
    font-size: 4vh;
}
.MAlink {
  margin-left: 25%;
}
.detail {
  font-family: "THSaraban";
}
</style>