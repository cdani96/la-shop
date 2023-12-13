<script setup>
import Home from "./components/views/Home.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <Home />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<style scoped>
/* el-container { */
/*   height: 100vh; */
/*   display: flex; */
/*   flex-direction: column; */
/* } */

/* el-header, */
/* el-footer { */
/*   color: white; */
/*   text-align: center; */
/*   /* padding: 20px; */

/* } */

/* el-main { */
/*   flex-grow: 1; */
/*   overflow: auto; */
/* } */

el-header {
  background-color: #ffbe98;
}

el-footer {
  background-color: #ffc5a2;
}
</style>
