<template>
  <button class="neon-btn" @click="$emit('btn-click')">
    <slot>Details</slot>
  </button>
</template>

<script>
export default {
  name: 'NeonButton'
}
</script>

<style scoped>
.neon-btn {
  background: transparent;
  border: 2px solid #d900ff;
  color: #d900ff;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 0 5px #d900ff;
}
.neon-btn:hover {
  background: #d900ff;
  color: white;
  box-shadow: 0 0 20px #d900ff;
}
</style>