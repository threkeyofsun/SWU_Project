<template>
  <!-- Login------------------------------------------------- -->
  <!-- {{$store.state.authenticated}} -->
  <div class="right-content">
    <div class="login-part">
      <form id="login-form" @submit.prevent="addToAPI">
        <input
          type="text"
          name="username"
          v-model.trim="user.username"
          placeholder="| Username"
        />
        <!-- <p v-if="messageUser" class="Errmes text-danger">** {{ messageUser }} **</p> -->

        <input
          type="password"
          name="password"
          v-model="user.password"
          placeholder="| Password"
        />
        <!-- <p v-if="messagePass" class="Errmes text-danger">** {{ messagePass }} **</p> -->
        <div class="btn-home">
          <button class="login-btn" id="login-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // beforeCreate: function(){
  //   this.$store.dispatch('authenticate');
  // },

  components: {},
  data() {
    return {
      messageUser: "",
      messagePass: "",
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
        if (
          this.user.username == this.$store.state.admin &&
          this.user.password == this.$store.state.adminpass
        ) {
          alert("Wellcome Admin!");
          this.$router.push({ name: "adminpage" });
          this.$store.commit("setAuthenticationAdmin", true);
          this.$store.commit("setAuthentication", true);
        } else {
          this.$store.state.token = response.data;
          console.log(this.$store.state.token);
          alert("Wellcome User!");
          this.$router.push({ name: "homepage" });
        }
      } catch (err) {
        console.log(err.response.data.error_message);

        (this.user.username = ""),
          (this.user.password = ""),
          alert(err.response.data.error_message);
        this.messageUser = err.response.data.error_message[0];
        this.messagePass = err.response.data.error_message[1];
      }

      // this.message = response.data.msg;
    },
  },
};
</script>

<style scoped>
.Errmes {
  margin-top: -11%;
}
</style>
