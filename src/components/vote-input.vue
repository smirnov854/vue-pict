<template>
  <input
        @click="addVote(index,category_id)"
          v-bind:name="category_id"
         type="radio"
         class="btn-check"
         v-bind:id="'btn-check-'+index+category_id"
         autocomplete="off"
        v-bind:checked="vote_value===index"
         v-bind:value="index">
  <label v-bind:class="'btn btn-sm btn-'+ (index<=3 ? 'danger': (index>=4 && index<=7 ? 'warning' : 'success'))"
         v-bind:for="'btn-check-'+index+category_id">{{index}}
  </label>
</template>

<script>
export default {
  name: "vote-input",
  props: {
    category_id: {
      type:Number,
      default (){
        return 0
      }
    },
    index: {
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
    addVote: function(index,category_id){
      this.$emit('addVote', index,category_id)
    }
  }
}
</script>

<style scoped>

</style>