<template>
  <div class="home-page">

    <div class="hero-section">
      <h1 class="main-title">NEON CITY</h1>
      <p class="subtitle">The brightest party experience in Nitra</p>
      <NeonButton @btn-click="$router.push('/shows')">Get Started</NeonButton>
    </div>

    <div class="preview-section">
      <SectionTitle>Top Attractions</SectionTitle>
      <p class="section-desc">Check out our most popular neon activities.</p>

      <div class="grid">
        <ServiceCard
            v-for="show in featuredShows"
            :key="show.id"
            :title="show.title"
            :description="show.description"
            :icon="show.image"
        />
      </div>

      <div class="center-btn">
        <NeonButton @btn-click="$router.push('/shows')">See All Shows</NeonButton>
      </div>
    </div>

    <div class="preview-section alternate-bg">
      <SectionTitle>Trending Themes</SectionTitle>

      <div class="grid">
        <ServiceCard
            v-for="theme in featuredThemes"
            :key="theme.id"
            :title="theme.title"
            :description="theme.description"
            :icon="getThemeImage(theme.title)"
            :isImage="true"
        >
          <template #extra>
            <span class="highlight-text">{{ theme.age }}</span>
          </template>
        </ServiceCard>
      </div>

      <div class="center-btn">
        <NeonButton @btn-click="$router.push('/themes')">Explore Themes</NeonButton>
      </div>
    </div>

    <div class="preview-section">
      <SectionTitle>Happy Guests</SectionTitle>

      <div class="reviews-container">
        <ReviewItem
            v-if="featuredReview"
            :author="featuredReview.author"
            :text="featuredReview.text"
            :rating="featuredReview.rating"
        />
      </div>

      <div class="center-btn">
        <NeonButton @btn-click="$router.push('/reviews')">Read More Reviews</NeonButton>
      </div>
    </div>

    <div class="about-section">
      <div class="about-container">
        <div class="about-text">
          <h2 class="neon-subtitle">Who We Are</h2>
          <p>
            Neon City is not just a club, it's a universe of neon lights and
            unforgettable emotions. We are the first club in Ukraine to offer
            full-cycle party organization with unique glowing mini-golf.
          </p>
          <p>
            From Minecraft to TikTok parties, our team takes care of everything:
            decorations, food, and entertainment. Parents rest while kids have fun!
          </p>
        </div>

        <div class="stats-grid">
          <div class="stat-box">
            <span class="stat-number">6+</span>
            <span class="stat-label">Years of Fun</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">11k</span>
            <span class="stat-label">Parties Hosted</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">200k</span>
            <span class="stat-label">Happy Guests</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">8k</span>
            <span class="stat-label">Pizzas Eaten</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useClubStore } from '../stores/clubStore'
import ServiceCard from '../components/ServiceCard.vue'
import NeonButton from '../components/NeonButton.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ReviewItem from '../components/ReviewItem.vue'

export default {
  name: 'HomeView',
  components: {
    ServiceCard,
    NeonButton,
    SectionTitle,
    ReviewItem
  },

  computed: {
    ...mapState(useClubStore, ['shows', 'themes', 'reviews']),

    featuredShows() {
      return this.shows.slice(0, 2);
    },
    featuredThemes() {
      return this.themes.slice(0, 2);
    },
    featuredReview() {
      return this.reviews.length > 0 ? this.reviews[0] : null;
    }
  },

  methods: {
    getThemeImage(title) {
      return new URL(`../assets/${title}.png`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
/* Pôvodné štýly (nezmenené) */
.hero-section {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #1a001a 0%, #000000 100%);
  border-bottom: 2px solid #d900ff;
  text-align: center;
  padding: 0 20px;
}

.main-title {
  font-size: 3.5rem;
  margin: 0;
  color: transparent;
  -webkit-text-stroke: 2px #d900ff;
  text-shadow: 0 0 20px #d900ff;
}

.subtitle {
  font-size: 1.2rem;
  color: #00ffcc;
  margin-bottom: 30px;
}

.alternate-bg {
  background: rgba(255, 255, 255, 0.03);
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alternate-bg .grid {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.section-desc {
  text-align: center;
  color: #aaa;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}
.hero-section {
  width: 100%;
}

.preview-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  box-sizing: border-box;
}

.center-btn {
  text-align: center;
  margin-top: 20px;
}

.highlight-text {
  color: #d900ff;
  font-weight: bold;
}

.reviews-container {
  max-width: 600px;
  margin: 0 auto 30px auto;
}

/* --- NOVÉ ŠTÝLY PRE ABOUT SECTION --- */

.about-section {
  background: linear-gradient(to top, #0f0f0f, #000);
  padding: 60px 20px;
  border-top: 1px solid #333;
}

.about-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
}

/* Textová časť zaberá polovicu šírky */
.about-text {
  flex: 1;
  min-width: 300px;
}

.about-text p {
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 15px;
}

.neon-subtitle {
  color: #00ffcc;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00ffcc;
}

/* Mriežka pre štatistiky */
.stats-grid {
  flex: 1;
  min-width: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-box {
  background: #111;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-box:hover {
  border-color: #d900ff;
  box-shadow: 0 0 15px rgba(217, 0, 255, 0.3);
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.stat-label {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
}
</style>