<template>
  <!-- Regis------------------------------------------------- -->
  <div class="right-content container-fluid ">
    <div class="regis-part">
      <form
        id="regis-form"
        @submit.prevent="sendFile"
        action=""
        method="post"
        enctype="multipar/form-data"
      >
        <!-- <font-awesome-icon icon="angle-down"></font-awesome-icon> -->

        <input
          class="largeIn"
          type="username"
          name="username"
          v-model.trim="user.username"
          placeholder="| Username"
        />
        <input
          class="largeIn"
          type="password"
          name="password"
          v-model.trim="user.password"
          placeholder="| Password"
        />

        <!-- Row os here -->
        <div class="row1">
          <input
            class="smallIn"
            type="text"
            name="Firt-Name"
            v-model.trim="user.firstname"
            placeholder="| Firt-Name"
          />

          <input
            class="smallIn"
            type="text"
            name="Last-Name"
            v-model.trim="user.lastname"
            placeholder="| Last-Name"
          />
        </div>

        <div class="row1">
          <select
            class=" smallIn d-inline"
            id="faculty"
            v-model.trim="user.faculty"
          >
            <option disabled selected class="faculty-disble" value="0"
              >| Faculty
            </option>

            <option value="College_of_Creative_Industry"
              >College of Creative Industry</option
            >
            <option value="Engineering">Faculty of Engineering</option>
            <option value="Agricultural"
              >Faculty of Agricultural Product Innovation and Technology</option
            >
            <option value="Humanities">Faculty of Humanities</option>
            <option value="Science">Faculty of Science</option>
            <option value="Physical_Education"
              >Faculty Of Physical Education</option
            >
            <option value="Social_Science">Faculty of Social Science</option>
            <option value="Education">Faculty of Education</option>
            <option value="Medicine">Faculty of Medicine</option>
            <option value="Fine_Art">Faculty of Fine Art</option>
            <option value="Dentistry">Faculty Of Dentistry</option>
            <option value="Pharmacy">Faculty of Pharmacy</option>
            <option value="Physical_Therapy"
              >Faculty of Physical Therapy</option
            >
            <option value="Economics">Faculty of Economics</option>
            <option value="COSCI"
              >College of Social Communication Innovention</option
            >
            <option value="Bodhivijjalaya_College"
              >Bodhivijjalaya College</option
            >
            <option value="International"
              >International College for Sustainability Studies</option
            >
            <option value="Environment_Ecotur"
              >Faculty of Environmental Culture and Ecotourism</option
            >
            <option value="Business"
              >Faculty of Business Administration for Society
            </option>
          </select>
          <input
            class="smallIn"
            type="text"
            name="Majors"
            v-model.trim="user.majors"
            placeholder="| Majors"
          />
        </div>

        <div class="row1">
          <input
            class="smallIn"
            type="Email"
            name="Email"
            v-model.trim="user.email"
            placeholder="| Email"
          />
          <input
            class="smallIn"
            type="tel"
            name="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            v-model.trim="tel"
            placeholder="| Phone NUmber"
          />
        </div>

        <div class="row1 ">
          <div class="d-inline">
            <input
              class="smallIn"
              type="ID"
              name="ID"
              v-model.trim="id"
              placeholder="| Student ID or Stuff ID"
            />
          </div>

          <div class="d-inline checkB ">
            <input
              class="type d-inline"
              type="radio"
              name="type"
              value="student"
              v-model="user.type"
            />
            <label for="Student">Student</label>

            <input
              class="type d-inline"
              type="radio"
              name="type"
              value="stuff"
              v-model="user.type"
            />
            <label for="Stuff">Stuff</label>
          </div>
        </div>
        <!-- End of input -->

        <div class="mb-5 mb-xl-auto">
          <button
            class="login-btn "
            @click="doSomething(), $router.push('/homepage')"
            id="login-btn"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "reg",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        faculty: "0",
        mojors: "",
        email: "",
        tel: "",
        id: "",
        type: "student",
      },

      typeOfTask: null, // 1 = recurring, 2 = scheduled
    };
  },
};
</script>

<style>
.option {
  margin-bottom: 5px;
}

@media only screen and (max-width: 575.98px) {
  .option .hr-main {
    width: 135px;
    height: 3px;
    background-color: #79b6a78a;
    margin: 0px;
  }
  .option .hr-main1 {
    width: 135px;
    height: 3px;
    background-color: #629084;
    margin: 0px;
  }
}
@media only-screen and (max-width: 1565px) {
  .option h2 {
    font-family: "Srinakharin";
    margin: 0px 0px 0px 0px;
    font-size: 41px;
  }
  .option hr {
    width: 125px;
  }
}

@media only screen and(min-width: 1568px) and (max-width: 1900px) {
  .rightR {
    align-self: unset !important;
    margin-top: 15px;
  }
}
</style>
