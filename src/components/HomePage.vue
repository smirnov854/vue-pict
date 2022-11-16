<template>
    <div class="card-group">
      <div class="col-lg-3 col-md-6 col-sm-12" v-for="picture in GET_PICTURES" v-bind:key="picture.id">
        <div class="card" @click="add_vote(picture.id)">
          <img
              v-bind:src="this.$hostname + picture.path"
              class="card-img-top"
              v-bind:alt="picture.name"
          >
        </div>
      </div>
    </div>
  <div>
    <PagePagination
        :total-pages="total_pages"
        :total="total"
        :per-page="per_page"
        :current-page="currentPage"
        @pagechanged="onPageChange"
    />
  </div>
</template>

<script>

import {mapActions,mapGetters} from "vuex";
import PagePagination from "@/components/PagePagination";

export default {
  components: {PagePagination},
  data() {
    return {
      total_pages:1,
      total:1,
      per_page:12,
      currentPage:1
    }
  },
  computed:{
    ...mapGetters([
      'GET_PICTURES'
    ])
  },
  mounted() {
    this.getData(1)
  },
  methods: {
    ...mapActions([
      'GET_PICT_FROM_API'
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
      let data= await this.GET_PICT_FROM_API(page);
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