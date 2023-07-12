<template>
  <header class="px-6 py-4 fixed w-screen">
    <nav class="w-full flex justify-between items-center">
      <h1 class="text-2xl font-bold font-sans">👩‍🍳 What'd ya have?</h1>
      <NuxtLink to="/"
        ><button class="secondary-text-btn uppercase font-bold text-sm">
          Start Again
        </button></NuxtLink
      >
    </nav>
  </header>
  <div class="full-page flex w-screen h-screen justify-center items-center">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped></style>
