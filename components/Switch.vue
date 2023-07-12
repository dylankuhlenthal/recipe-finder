<template>
  <div class="slider" :class="switchBoolClass" @click="toggleSwitch">
    <div class="switch" :class="switchBoolClass"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
});
const { modelValue } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const switchBoolClass = computed(() => (modelValue.value ? "true" : "false"));

function toggleSwitch() {
  emit("update:modelValue", !modelValue.value);
}
</script>

<style scoped></style>
