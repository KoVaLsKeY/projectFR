<template>
  <div class="page">
    <SectionTitle>Customer Reviews</SectionTitle>

    <div class="reviews-list">
      <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :author="review.author"
          :text="review.text"
          :rating="review.rating"
      />
    </div>

    <div class="add-review">
      <h3>Add Your Experience</h3>
      <input v-model="newAuthor" placeholder="Your Name" />
      <textarea v-model="newText" placeholder="Write your thoughts..."></textarea>
      <NeonButton @btn-click="submitReview">Post Review</NeonButton>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useClubStore } from '../stores/clubStore'
import NeonButton from '../components/NeonButton.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ReviewItem from '../components/ReviewItem.vue'

export default {
  // Registrácia všetkých použitých komponentov
  components: { NeonButton, SectionTitle, ReviewItem },

  data() {
    return {
      newAuthor: '',
      newText: ''
    }
  },

  computed: {
    ...mapState(useClubStore, ['reviews'])
  },

  methods: {
    ...mapActions(useClubStore, ['addReview']),

    submitReview() {
      if (this.newAuthor && this.newText) {
        this.addReview({
          id: Date.now(),
          author: this.newAuthor,
          text: this.newText,
          rating: 5
        });
        this.newAuthor = '';
        this.newText = '';
      } else {
        alert('Please fill all fields');
      }
    }
  }
}
</script>

<style scoped>
.page { max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.add-review { margin-top: 40px;
  background: #111;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #333;
}

input, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  background: #222;
  color: white;
  border: 1px solid #444;
  border-radius: 5px;
  font-family: inherit;
}

textarea {
  height: 120px;       /* Pevná výška (Fixed height) */
  resize: none;        /* Zakázať zmenu veľkosti (Disable resizing) */
}

h3 { color: white; margin-bottom: 15px; }
</style>