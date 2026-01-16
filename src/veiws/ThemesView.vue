<template>
  <div class="page">
    <SectionTitle>Party Themes</SectionTitle>

    <div class="themes-grid">
      <ServiceCard
          v-for="theme in themes"
          :key="theme.id"
          :title="theme.title"
          :description="theme.description"
          :icon="getThemeImage(theme.title)"
          :isImage="true"
      >
        <template #extra>
          <div class="age-badge">Age: {{ theme.age }}</div>
        </template>
      </ServiceCard>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useClubStore } from '../stores/clubStore'
import ServiceCard from '../components/ServiceCard.vue'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  components: { ServiceCard, SectionTitle },

  computed: {
    ...mapState(useClubStore, ['themes'])
  },

  methods: {
    // Jednoduchá funkcia: Názov témy + .png
    getThemeImage(title) {
      // Príklad: ak je title "Minecraft", cesta bude "../assets/themes/Minecraft.png"
      return new URL(`../assets/${title}.png`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
.themes-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px; }
.age-badge {
  margin-top: 15px;
  background: #d900ff;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
}
</style>