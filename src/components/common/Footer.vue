<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-links">
        <router-link to="/terms-of-service">Terms of Service</router-link>
        <router-link to="/privacy-policy">Privacy Policy</router-link>
      </div>
    </div>
    <div class="copyright">&copy; 2023 Your Website. All rights reserved.</div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.copyright {
  font-size: 14px;
}
</style>
