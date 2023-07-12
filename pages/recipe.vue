<template>
  <div class="loading-display" v-if="pending">LOADING</div>
  <div
    v-if="!pending"
    class="flex flex-col border border-solid rounded shadow-lg bg-white w-3/5 overflow-hidden"
  >
    <div class="recipe-page header-section">
      <img :src="data.image" alt="" class="recipe-page recipe-image" />
      <div class="recipe-page header-text">
        <h1 class="recipe-page recipe-title">{{ data.title }}</h1>
        <p class="recipe-page recipe-credits">by {{ data.creditsText }}</p>
      </div>
    </div>
    <div class="recipe-page meta-section">
      <div class="recipe-page meta-item servings">
        <span class="recipe-page meta-icon">🍽</span>
        <span class="recipe-page meta-label">{{ data.servings }}</span>
      </div>
      <div class="recipe-page meta-item cooking-time">
        <span class="recipe-page meta-icon">⏱</span>
        <span class="recipe-page meta-label"
          >{{ data.readyInMinutes }} mins</span
        >
      </div>
      <div class="recipe-page meta-item health-score">
        <span class="recipe-page meta-icon">🤍</span>
        <span class="recipe-page meta-label">{{ data.healthScore }}</span>
      </div>
      <div
        class="recipe-page meta-item spoonacular-score"
        v-if="data.spoonacularScore"
      >
        <span class="recipe-page meta-icon">⭐️</span>
        <span class="recipe-page meta-label">{{ data.spoonacularScore }}</span>
      </div>
    </div>
    <div class="recipe-page content-section">
      <div class="ingredients">
        <h2 class="recipe-page section-title">Ingredients</h2>
        <ul class="recipe-page ingredients-list">
          <li
            class="recipe-page list-item ingredients-list-item"
            v-for="(ingredient, i) in data.extendedIngredients"
          >
            {{ ingredient.original }}
          </li>
        </ul>
      </div>
      <div class="instructions">
        <h2 class="recipe-page section-title">Instructions</h2>
        <ol class="recipe-page instructions-list">
          <li
            class="recipe-page list-item instructions-list-item"
            v-for="(step, i) in data.analyzedInstructions[0].steps"
          >
            {{ step.step }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data, pending } = await useLazyFetch("/api/getRecipeById", {
  query: {
    id: route.query.id,
  },
});
</script>

<style scoped></style>
