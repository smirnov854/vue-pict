<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form>
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control form-control-lg" v-model="email"/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg" v-model="password"/>
          </div>
          <button type="submit" class="btn btn-dark btn-lg btn-block" @click="login">Sign In</button>
          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'SET_LOGIN',
      'SET_TOKEN'
    ]),
    login() {
      axios.post('login', {
        email: this.email,
        password: this.password,
      }).then(response => {
        let user_email = response.data.user.email
        let token = response.data.token
        this.SET_LOGIN(user_email)
        this.SET_TOKEN(token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        this.$router.push('home')
      })
    }
  }
}
</script>