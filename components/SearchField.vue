<template>
  <div
    class="field-box border duration-150 rounded overflow-hidden w-[450px]"
    :class="focusStyle"
  >
    <div class="input-area flex justify-end">
      <div
        v-if="inputBox"
        class="enter-icon absolute pt-2 pr-3 z-10 cursor-pointer"
        @click="addChip"
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
      </div>
      <input
        type="text"
        class="w-full py-2 px-3 outline-none"
        v-model="inputBox"
        @keyup.enter="addChip"
        @focusin="focus = true"
        @focusout="focus = false"
      />
    </div>
    <div class="container" v-if="modelValue.length">
      <div class="chip-container">
        <div class="chip" v-for="(chip, i) in modelValue" :key="i">
          <span class="chip-clear" @click="removeChip(chip)"
            ><font-awesome-icon :icon="['fas', 'xmark']" />
          </span>
          <span class="chip-label">{{ chip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ modelValue: Array });
const { modelValue } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);
const inputBox = ref("");
const focus = ref(false);
const focusStyle = computed(() => (focus.value ? "focus" : ""));
function addChip() {
  if (!inputBox.value) {
    return;
  }

  const newChips = inputBox.value
    .split(",")
    .map((item) => item.trim().toLowerCase());

  emit("update:modelValue", [...modelValue.value, ...newChips]);
  inputBox.value = "";
}

function removeChip(chipToRemove) {
  const updatedChips = modelValue.value.filter((item) => item != chipToRemove);
  emit("update:modelValue", updatedChips);
}
</script>

<style scoped></style>
