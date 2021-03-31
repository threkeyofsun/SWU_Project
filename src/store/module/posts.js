import axios from "axios";


const posts = {
    namespaced: true,
    state: {
        posts:[]
    
    },
    mutations: {
        SET_POSTS(state, data){
            state.posts = data
        }
    },
    actions: {
        async loadPosts({commit}) {
            const res = await axios.get("/users/profile");
            commit('SET_POSTS', res.data)
        }
    }
}

export default {posts}
