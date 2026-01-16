<template>
  <div class="section-title-container">
    <h2 class="neon-title"><slot></slot></h2>
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle'
  // Žiadne props, používame len slot pre flexibilitu
}
</script>

<style scoped>
.section-title-container {
  text-align: center;
  margin-bottom: 30px;
  padding-top: 20px;
}

.neon-title {
  font-size: 2.5rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px #d900ff, 0 0 20px #d900ff;
  margin: 0;
}

.underline {
  height: 4px;
  width: 100px;
  background: #00ffcc;
  margin: 10px auto 0;
  box-shadow: 0 0 10px #00ffcc;
  border-radius: 2px;
}
</style>