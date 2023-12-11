<template>
   <div class="landing-page">
   <img src="../../assets/vue.svg" alt="Background Image" class="background-image">
    <div class="overlay">
      <h1 class="overlay-text">Le YodeShop</h1>
      <p>Bienvenido a la mejor experiencia de compra online!!</p>

      <el-button type="success" size="large" >Compra ahora</el-button>
    </div>
  </div>
</template>

<script setup>
  // import VueRouter from 'vue-router'

// const router = useRouter()
// const goToProducts = () => router.push('/products');
</script>

<style scoped>
  .landing-page {
  width: 100%;
  height: 100vh;
  position: relative;
  }

  .background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .overlay-text {
    color: white;
    font-size: 3rem;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .overlay-text {
      font-size: 2rem;
    }
  }
</style>

