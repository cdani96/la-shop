<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <div class="product-name">{{ truncatedName }}</div>
    <div class="product-price">{{ product.price }}</div>
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup>
import { toRefs, computed } from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  "onUpdate:modelValue": {
    type: Function,
    required: true,
  },
});

const {
  product,
  modelValue,
  "onUpdate:modelValue": updateModelValue,
} = toRefs(props);

const truncatedName = computed(() => {
  if (this.product.name.length > 25) {
    return this.product.name.substring(0, 22) + "...";
  }
  return this.product.name;
});
</script>

<style scoped>
.product-card {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  color: green;
}

.add-to-cart {
  background-color: blue;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
