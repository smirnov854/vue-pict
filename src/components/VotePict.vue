<template>
  <div class="row ">
    <div class="col-12">
      <div class="photo d-flex">
        <img v-bind:src="imgSrc">
      </div>
    </div>
  </div>
  <div class="row vote-container" v-for="category in categorys" :key="category.id">
    <DoVote
        v-bind:category_name="category.name"
        v-bind:category_id="category.id"
        v-bind:vote_value="category.value"
        @addVote="addVote"
    ></DoVote>
  </div>
  <div class="offset-6 col-lg-1 d-flex">
    <button class="btn btn-success btn-sm" v-bind:disabled="isDisabled" @click="addVotes">Vote</button>
  </div>

  <div class="alert alert-success" v-if="successMessage">{{successMessage}}</div>
</template>

<script>
import axios from "axios";
import DoVote from "@/components/DoVote";

export default {
  name: "VotePict",
  components: {DoVote},
  data() {
    return {
      isDisabled:1,
      id: '',
      imgSrc: '',
      categorys: [],
      successMessage:''
    }
  },
  mounted() {
    this.getParams()
    this.getPictureData()
    this.getCategorys()
  },
  methods: {
    addVote(index,category_id){
      for(let i in this.categorys){
        if(this.categorys[i].id == category_id){
          this.categorys[i].value = index
        }
      }
      this.isDisabled=0
      for(let z in this.categorys){
        if(this.categorys[z].value>0){
          continue;
        }
        this.isDisabled = 1
      }
    },
    getParams: function () {
      this.id = this.$route.query.id
    },
    getPictureData: function () {
      axios.get('pictures/' + this.$route.query.id).then(response => {
        this.imgSrc = this.$hostname + response.data.picture_data.path
      }).catch(error => {
        console.log(error)
      })
    },
    getCategorys: function(){
      axios.post('category-and-votes',{
        picture_id:this.id
      } ).then(response => {
        this.categorys = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    addVotes: function(){
      axios.post('add-votes',{
        categorys:this.categorys,
        picture_id:this.id
      }).then(response => {
        if(response.status === 201){
          this.successMessage=response.data.message
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.photo img {
  max-width: 500px;
  max-height: 500px;
  margin: auto;
}
.vote-container {
  margin-top: 2px;
  margin-bottom: 10px;
}
</style>