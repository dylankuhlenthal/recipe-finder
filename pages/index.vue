<template>
  <div class="flex flex-col justify-center">
    <div class="title-section mb-6">
      <h1 class="title text-4xl text-slate-800 font-bold text-center">
        👩‍🍳 What'd ya have?
      </h1>
    </div>
    <SearchField v-model="selectedIngredients" class="mb-4" />
    <div class="flex justify-between items-center">
      <div class="switch-wrapper flex justify-start">
        <Switch v-model="assumePantry" />
        <span class="switch-label">pantry staples</span>
      </div>
      <NuxtLink
        :to="`/recipe-list?ingredients=${selectedIngredients.join(
          ',+'
        )}&pantry=${assumePantry}`"
        ><button
          class="search-btn ml-2"
          :disabled="!selectedIngredients.length"
        >
          <font-awesome-icon :icon="['fass', 'magnifying-glass']" /></button
      ></NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "search",
});

const inputBox = ref("");
const selectedIngredients = ref([]);
const assumePantry = ref(false);

function startSearch() {}
</script>

<style scoped></style>
