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

const selected = computed({
  get: () => modelValue.value,
  set: (value) => updateModelValue.value(value),
});
</script>
<template>
  <div class="container">
    <el-card class="product-card" shadow="hover">
      <div class="product-image">
        <el-image :src="product.image" loading="lazy" fit="cover"></el-image>
      </div>
      <div class="product-details" slot="header">
        <h2 class="product-title">{{ product.name }}</h2>
        <h4 class="product-price">{{ product.price }}</h4>
        <el-button class="add-to-cart-btn" type="primary">Agregar al carrito</el-button>
        <el-button class="view-btn">Detalles</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto 0 auto;
  text-align: center;
}
.product-card {
  background-color: #fff;
 display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

.product-image {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  text-align: center;
}

.product-image el-image {
  max-width: 100%;
  max-height: 100%;
}

.product-title {
  font-size: 24px;
  margin: 0;
  text-align: center;
}

.product-price {
  font-size: 20px;
  margin: 0;
  text-align: center;
}

.add-to-cart-btn,
.view-btn {
  background-color: cornflowerblue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.25s ease;
}

.add-to-cart-btn:hover,
.view-btn:hover {
  opacity: 0.8;
}


</style>
