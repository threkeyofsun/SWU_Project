<template>
  <!-- Login------------------------------------------------- -->

  <div class="right-content ">
    <div class="login-part">
      <form id="login-form">
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
         
            <button class="login-btn" @click="doSomething(), $router.push('/homepage')" id="login-btn">
              Login
            </button>
          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    doSomething() {
      alert("Wellcome");
    },
  },
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>

</style>
