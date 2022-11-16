<template>
  <div class="row">
  <div class="col-4 mt-5">
    <img
        v-bind:src="image_src"
        class="card-img-top"
    >
  </div>
  <div class="col-6 mt-5">
    <VotesList
        :picture_id="picture_id"
    />
  </div>
  </div>
</template>

<script>
import VotesList from "@/components/VotesList";
export default {
  name: "MyPictContainer",
  components: {VotesList},
  props:{
    image_src:{
      type:String,
      default (){
        return ''
      }
    },
    picture_id:{
      type:Number,
      default (){
        return 0
      }
    },
  }
}
</script>

<style scoped>
.card-img-top{

}
</style>