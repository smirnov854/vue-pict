<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <div class="alert alert-danger" v-if="errors">{{errors}}</div>
        <div class="alert alert-success" v-if="success">{{success}}</div>

          <h3>Forgot Password</h3>

          <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control form-control-lg"/>
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block" @click="remindPassword">
            Reset password
          </button>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      errors:'',
      success:''
    };
  },
  methods:{
    remindPassword(){
      axios.post('remember', {
        email: this.email,
      }).then(response => {
        console.log(response)
        this.$router.push('login')
      }).catch(error=>{
        this.errors=error.response.data.message
      })
    }
  }
};
</script>
