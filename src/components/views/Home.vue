<script setup>
import LandingPage from '../common/LandingPage.vue'
import FeaturedProducts from "../common/FeaturedProducts.vue";

const products = [
  {
    id: 245,
    name: "The old shoes",
    price: "$1.99",
    image: "../../assets/vue.svg",
    description: "This amazing shoes can make you run."
  },
  {
    id: 2453,
    name: "The old new shoes",
    price: "$10",
    image: "../../assets/vue.svg",
    description: "Those also works for running."
  },
  {
    id: 3245,
    name: "Old shoes",
    price: "$10.99",
    image: "../../assets/vue.svg",
    description: "Lets be honest, all are the same right?"
  }
];
</script>

<template>
  <LandingPage></LandingPage>
  <FeaturedProducts :products="products"></FeaturedProducts>
</template>

<style scoped></style>
