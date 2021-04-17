import Vuex from "vuex";
import posts from "./module/posts";
import axios from "axios";


export default Vuex.createStore({
  state: {
    authenticated:false,
    authenticatedAdmin:false,
    username:'',
    admin:'adminpage',
    adminpass:'adminpass',
    info:{},
    actvity:{},
    token:'',
    posts:[]
  },
  
  actions: {
    async created({commit}) {
      const result = await axios.get("/users/profile");
      let posts = result.data;
      commit('SET_POSTS', posts);
    },
  
  },
  mutations: {
    setAuthentication(state, status){
      state.authenticated = status;
    },
    setAuthenticationAdmin(state, status){
      state.authenticatedAdmin = status;
    },
    
  },
  modules: {
    posts
  }
});
