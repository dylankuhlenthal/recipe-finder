<template>
  <div class="recipe-card">
    <div class="card-image">
      <img :src="recipe.image" alt="" />
    </div>
    <div class="card-content">
      <div class="card-text">
        <h2 class="card-title">{{ recipe.title }}</h2>
        <NuxtLink class="card-link" :to="`/recipe?id=${recipe.id}`"
          >Full Recipe</NuxtLink
        >
      </div>
      <div class="card-stats">
        <div class="stat-circle missed-stat">
          {{ recipe.missedIngredientCount }}
        </div>
        <div class="stat-circle unused-stat">
          {{ recipe.unusedIngredients.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { recipe } = defineProps({
  recipe: Object,
});
</script>

<style scoped></style>
