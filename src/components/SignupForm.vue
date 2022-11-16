<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">

        <h3>Sign Up</h3>
        <div class="clearfix"></div>
        <div class="clearfix"></div>
        <span class="alert alert-danger" role="alert" v-bind:key="error" v-for="error in errors">
            <strong>{{ error[0] }}</strong>
        </span>
        <span class="alert alert-success" role="alert" v-if="success">
                      <strong>{{ success }}</strong>
                  </span>
        <div class="clearfix"></div>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control form-control-lg" v-model="name"/>
        </div>

        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" v-model="email"/>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" v-model="password"/>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" v-model="password_confirmation"/>
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click="submit">
          Sign Up
        </button>

        <p class="forgot-password text-right">
          Already registered
          <router-link :to="{ name: 'login' }">sign in?</router-link>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      success: '',
      errors: '',
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    ...mapActions([
      'SET_LOGIN',
      'SET_TOKEN'
    ]),
    submit: function () {
      this.errors = {}
      axios.post('register', {
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(response => {
        let token = response.data.token
        let user_email = response.data.user.email
        this.success = 'You have been registered'
        this.SET_LOGIN(user_email)
        this.SET_TOKEN(token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        this.$router.push('home')
      })
    }
  }
}
</script>
