<template>
  <div class="flex justify-center">
    <button
      v-for="(option, i) in fullOptions"
      :key="i"
      @click="updateSelection(option.text)"
      class="btn-group"
      :class="{ selected: option.selected }"
    >
      {{ option.text }}
    </button>
  </div>
</template>

<script setup>
const { options, modelValue } = defineProps(["options", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const fullOptions = ref(
  options.map((item) => {
    if (modelValue === item) {
      return { text: item, selected: true };
    } else {
      return { text: item, selected: false };
    }
  })
);

function updateFullOptions(newSelection) {
  fullOptions.value.forEach((item, i) => {
    if (newSelection === item.text) {
      fullOptions.value[i].selected = true;
    } else {
      fullOptions.value[i].selected = false;
    }
  });
}

function updateSelection(selection) {
  emit("update:modelValue", selection);
  updateFullOptions(selection);
}
</script>

<style scoped></style>
