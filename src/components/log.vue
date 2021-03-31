<template>
  <!-- Login------------------------------------------------- -->

  <div class="right-content">
    <!-- <p>{{ $store.state.username ? $store.state.username : "Not Login yet" }}</p> -->

    <div class="login-part">
      <form id="login-form" @submit.prevent="addToAPI">
        <input
          type="text"
          name="username"
          v-model.trim="user.username"
          placeholder="| Username"
        />
        <input
          type="password"
          name="password"
          v-model="user.password"
          placeholder="| Password"
        />

        <div class="btn-home">
          <button class="login-btn" id="login-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import * as auth from "../services/AuthService";

export default {
  // beforeCreate: function(){
  //   this.$store.dispatch('authenticate');
  // },

  components: {},
  data() {
    return {
      message: "",
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push({ path: "/Contact" });
    },
    async addToAPI() {
      try {
        this.message = "";
        const response = await axios.post("/users/login", {
          username: this.user.username,
          password: this.user.password,
        });
        console.log(response.data.username);
        alert(response.data.firstname);
        this.$router.push({ name: 'homepage' })

      } catch (err) {
        alert(err.response.data.error_message);
        console.log(err.response.data.error_message);
      }

      // this.message = response.data.msg;
    },
  },
};
</script>

<style scoped></style>
