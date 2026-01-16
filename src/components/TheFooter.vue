<template>
  <footer class="site-footer">
    <p>&copy; 2026 Neon City. Student Project for Mr. Halvonik. The Guru of web development.</p>
    <div class="socials">
      <span>Instagram</span> | <span>Facebook</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.site-footer {
  background-color: #0a0a0a;
  color: #888;
  text-align: center;
  padding: 20px;
  border-top: 1px solid #333;
  margin-top: auto;
}
.socials {
  margin-top: 10px;
  color: #00ffcc;
  font-weight: bold;
}
</style>