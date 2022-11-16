<template>

  <menu-component/>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import MenuComponent from "@/components/MenuComponent";

export default {
  components: {MenuComponent}
}
</script>