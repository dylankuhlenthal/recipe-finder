<template>
  <div class="container">
    <div class="container-title">
      <h3 class="title">
        {{
          modelValue.length ? "Selected Ingredients" : "No Ingredients Selected"
        }}
      </h3>
    </div>
    <div class="chip-container">
      <div class="chip" v-for="(chip, i) in modelValue" :key="i">
        <span class="chip-clear" @click="removeChip(chip)"
          ><font-awesome-icon :icon="['fas', 'xmark']"
        /></span>
        <span class="chip-label">{{ chip }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { modelValue } = defineProps({ modelValue: Array });
const chips = ref([...modelValue]);
const emit = defineEmits(["update:modelValue"]);

function removeChip(chipToRemove) {
  const updatedChips = chips.value.filter((item) => item != chipToRemove);
  chips.value = updatedChips;
  emit("update:modelValue", updatedChips);
}
</script>

<style scoped></style>
