<template>
  <div class="page">
    <h1>Our Show Programs</h1>

    <div class="grid">
      <ServiceCard
          v-for="show in shows"
          :key="show.id"
          :title="show.title"
          :description="show.description"
          :icon="show.image"
      />
    </div>

    <div class="action-area">
      <NeonButton @btn-click="bookShow">Book a Show</NeonButton>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useClubStore } from '../stores/clubStore'
import ServiceCard from '../components/ServiceCard.vue'
import NeonButton from '../components/NeonButton.vue'

export default {
  // Registrácia komponentov
  components: { ServiceCard, NeonButton },

  // Computed properties na získanie dát z Pinia Store
  computed: {
    ...mapState(useClubStore, ['shows'])
  },

  // Metódy (logika stránky)
  methods: {
    bookShow() {
      alert('Redirecting to booking...');
    }
  }
}
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 20px; }
.action-area { text-align: center; margin-top: 30px; }
h1 { text-align: center; color: #d900ff; text-shadow: 0 0 10px #d900ff; }
</style>