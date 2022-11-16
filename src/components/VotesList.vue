<template>
  <div v-for="category in categorys" :key="category.id">
    <span>{{category.name}}-{{category.total_value}}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VotesList",
  data(){
    return{
      categorys:[]
    }
  },
  props:{
    picture_id:{
      type:Number,
      default (){
        return 0
      }
    },
  },
  mounted() {
    this.getVotes()
  },
  methods:{
    getVotes(){
      axios.get('picture-votes/'+this.picture_id).then((response)=>{
          this.categorys = response.data
      })
    }
  }
}
</script>



<style scoped>

</style>