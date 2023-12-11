import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/views/Home.vue'
import Products from '../components/views/Products.vue'
import About from '../components/views/About.vue'
import ProductDetails from '../components/views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
}) 

export default router;
