<template>
  <div
    class="flex flex-col border border-solid p-8 rounded drop-shadow bg-white duration-150"
  >
    <div class="loaded-content w-full h-full" v-if="!pending">
      <div class="title-section mb-6">
        <h1 class="title text-3xl font-bold text-center">
          Let's get cookin'! 🍳
        </h1>
      </div>
      <div class="recipe-list grid grid-cols-3 gap-4 justify-center">
        <RecipeCard v-for="(recipe, i) in data" :key="i" :recipe="recipe" />
      </div>
    </div>
    <div class="loading-spinner h-full w-full" v-if="pending">LOADING...</div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data, pending } = await useLazyFetch("/api/getRecipes", {
  query: {
    ingredients: route.query.ingredients,
    pantry: route.query.pantry,
  },
});
</script>

<style scoped></style>
