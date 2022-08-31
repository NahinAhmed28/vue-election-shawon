import {createStore} from "vuex";
import axios from 'axios';
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
            /**
             * Author: Shawon
             * Comment: 
             * Bux Fixing Logs:::
             * 1.Need to use backslash at the end for any Django Post Method
             * 2.Dont pass header in the post method from client side
             * 
             */
            return axios.post(process.env.VUE_APP_BASE_URL + "/api/v1/auth/jwt/", {
                username: credentials.username,
                password: credentials.password
                })
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