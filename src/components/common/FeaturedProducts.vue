<script setup>
import { toRefs, watch, reactive } from "vue";
import ProductCard from "../common/ProductoCard.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const { products } = toRefs(props);

const selectedProducts = reactive({});

watch(selectedProducts, (value) => {
  console.log("Selected Products: ", value);
});
</script>

<template>
  <div class="featured-products">
    <ul>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        v-model="selectedProducts[product.id]"
      ></ProductCard>
    </ul>
  </div>
  <el-button type="primary" class="bottom-button">Explorar mas</el-button>
</template>

<style scoped>
.featured-products ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
}

.bottom-button {
  display: block;
  margin: 20px auto;
}
</style>
