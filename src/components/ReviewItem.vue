<template>
  <div class="review-card">
    <div class="review-header">
      <span class="author">{{ author }}</span>
      <span class="rating">{{ '★'.repeat(rating) }}</span>
    </div>
    <div class="review-body">
      <p>"{{ text }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',
  // Props pre prijímanie dát z rodiča (ReviewsView)
  props: {
    author: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style scoped>
.review-card {
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid #00ffcc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 0 10px 10px 0;
  transition: background 0.3s;
}

.review-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #00ffcc;
  font-weight: bold;
}

.rating {
  color: #ffd700; /* Zlatá farba pre hviezdičky */
}
</style>