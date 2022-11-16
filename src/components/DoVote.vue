<template>
<div class="row justify-content-center d-flex">
  <div class="col-2 d-flex">{{category_name}}</div>
  <div class="col-3 d-flex">
  <vote-input v-for="index in indexArr"
              v-bind:index="index"
              v-bind:key="index"
              v-bind:category_id="category_id"
              v-bind:vote_value="vote_value"
              @addVote="addVote"
  />
  </div>
</div>
</template>

<script>
import VoteInput from "@/components/vote-input";
export default {
  components: {VoteInput},
  data(){
    return {
      indexArr: [1,2,3,4,5,6,7,8,9,10],
    }
  },
  props: {
    category_name: {
      type: String,
      default (){
        return ''
      }
    },
    category_id: {
      type:Number,
      default (){
        return 0
      }
    },
    vote_value: {
      type:Number,
      default (){
        return 0
      }
    },
  },
  methods:{
    addVote(index,category_id){
      this.$emit('addVote', index,category_id)
    }
  },
  name: "DoVote"
}
</script>

<style scoped>
.category-name{
  width:150px!important;
  display: inline;
}
.category-values{
  width: 300px;
  display: inline;
}

</style>