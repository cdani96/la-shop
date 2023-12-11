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
  'onUpdate:modelValue': {
    type: Function,
    required: true,
  },
});


const { product, modelValue, 'onUpdate:modelValue': updateModelValue } = toRefs(props)

const selected = computed({
  get: () => modelValue.value,
  set: (value) => updateModelValue.value(value),
})

</script>
<template>
  <section class="product-grid">
    <el-card class="product-card" shadow="hover">
      <el-image :src="product.image" fit="cover" class="product-image"></el-image>
      <div class="product-info" slot="header">
        <span class="product-title">{{ product.name }}</span>
      </div>
      <div class="product-description">
        <p>{{ product.description }}</p>
        <h4 class="product-price">${{ product.price }}</h4>
      </div>
      <el-button class="add-to-cart-button" type="primary">Agregar al carrito</el-button>
    </el-card>
  </section>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.product-card {
  position: relative;
}

.product-image {
  height: 60vw;
}

.product-info {
  font-size: 1.25rem;
  font-weight: 600;
}

.product-description {
  color: #666;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.product-title {
  font-weight: bold;
  background-color: #ffd2b7;
  margin: 10px 0;
}
</style>
