<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link :to="{name: 'home' }" v-if="checkLogin">Logo</router-link>
        <router-link :to="{name: 'login' }" v-if="!checkLogin">Logo</router-link>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" v-if="checkLogin">
              <router-link :to="{name: 'home' }">Home</router-link>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#" v-if="!checkLogin"><router-link  :to="{name:'login'}">Log in</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-if="!checkLogin"><router-link :to="{name:'register'}">Register</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-if="checkLogin"><router-link :to="{name:'upload-pict'}">Upload picture</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-if="checkLogin"><router-link :to="{name:'my-pictures'}">My pictures</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-if="checkLogin" @click="logOut()">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "MenuComponent",
  data() {
    return {
    }
  },
  computed:{
    checkLogin: function(){
      return this.ISUSERLOGGEDIN()
    }
  },
  methods:{
    ...mapGetters([
       'ISUSERLOGGEDIN'
    ]),
    ...mapActions([
        'DO_LOGOUT'
    ]),
    logOut(){
      this.DO_LOGOUT()
      this.$router.push('login')
    }
  }

}
</script>

<style scoped>

</style>