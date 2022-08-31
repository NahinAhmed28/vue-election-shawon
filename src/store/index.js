import {createStore} from "vuex";
import axios from 'axios';
const header = {
    headers:{
        'Access-Control-Allow-Origin' : "*",
        'Access-Control-Allow-Methods' : "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        'Access-Control-Allow-Headers' : "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, access-control-allow-origin, Authorization",
        'Access-Control-Allow-Credentials' : "true",
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
const authModule = {
    state: () => ({
        user: []
    }),

    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login(context, credentials) {
            return axios.post(process.env.VUE_APP_BASE_URL + "/api/v1/auth/jwt", {
                username: credentials.username,
                password: credentials.password
                } , header)
                .then(res => {
                    context.commit('setUser', res.data);
                    window.localStorage.setItem("users", JSON.stringify(res.data));
                    return true;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

}

const store = createStore({
    modules: {
        auth: authModule,
    }
})
export default store;