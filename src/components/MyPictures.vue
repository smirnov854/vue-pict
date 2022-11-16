<template>
  <div class="row">
    <div class="col-12 text-center">
      <h1>Votes of my pictures</h1>
    </div>
  </div>
    <div class="card-group col-12">
      <div class="card">
        <MyPictContainer
            v-for="picture in GET_MY_PICTURES"
            v-bind:key="picture.id"
            :image_src="this.$hostname + picture.path"
            :picture_id="picture.id"
        />
      </div>
    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MyPictContainer from "@/components/MyPictContainer";

export default {
  name: "MyPictures",
  components: {MyPictContainer},
  computed:{
    ...mapGetters([
      'GET_MY_PICTURES'
    ])
  },
  mounted() {
    this.getData(1)
  },
  methods: {
    ...mapActions([
      'GET_MY_PICT_FROM_API'
    ]),
    add_vote(id){
      this.$router.push({
        name: 'vote',
        query: { id: id }
      });
    },
    onPageChange(page){
      this.getData(page)
    },
    async getData(page){
      let data= await this.GET_MY_PICT_FROM_API(page);
      this.total_pages=data.last_page
      this.total=data.total
      this.per_page=data.per_page
      this.currentPage=data.current_page
    }
  }

}
</script>

<style scoped>
.card img{
  height: 100px;
  width: 100px;
}
.card {
  padding: 15px;
  margin: 0 10px 10px 0;
}
</style>