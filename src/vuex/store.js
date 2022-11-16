import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from '../App.vue'

import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters";

const actions = {...commonActions, ...apiRequests}

const app = createApp(App)

let store = new createStore({
  state: {
    isUserLoggedIn: localStorage.getItem('isUserLoggedIn') || null,
    login: localStorage.getItem('login') || null,
    email: localStorage.getItem('email') || null,
    token: localStorage.getItem('token') || null,
    pictures:[]
  },
  mutations,
  actions,
  getters,
});

export default store;
// Install the store instance as a plugin
app.use(store)