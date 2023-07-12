<template>
  <slot @onmouseover="hover = true" />
  <div class="absolute" v-if="show">
    <div
      class="tip-box bg-slate-50 rounded-lg p-2 border border-slate-300 shadow-lg relative top-10"
    >
      <p class="tip-text text-slate-600 text-sm">This is a tooltip.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["show"]);
const { show } = toRefs(props);
const hover = ref(false);
</script>

<style scoped></style>
