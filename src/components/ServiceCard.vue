<template>
  <div class="card">
    <div class="media-content">
      <img v-if="isImage" :src="icon" :alt="title" class="card-image" />
      <div v-else class="icon">{{ icon }}</div>
    </div>

    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <slot name="extra"></slot>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    description: String,
    // Icon teraz môže byť URL obrázka alebo emoji
    icon: {
      type: String,
      default: '★'
    },
    // Prepínač: je to obrázok alebo nie?
    isImage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
/* Tieto štýly ostávajú rovnaké */
.card {
  border: 2px solid #00ffcc;
  background: #111;
  color: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 10px #00ffcc;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card:hover { transform: scale(1.05); }
.icon { font-size: 3rem; margin-bottom: 15px; }

/* Štýl pre obrázok */
.card-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 15px; /* Jemne zaoblené rohy */
  border: 2px solid #d900ff;
  margin-bottom: 15px;
}
</style>