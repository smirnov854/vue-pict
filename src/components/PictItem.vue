<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item__image"
         :src="'http://laravelapi/'  + product_data.image "
         alt="img" @click="productClick"
    >
  </div>
</template>

<script>
export default {
  name: "PictItem"
}
</script>

