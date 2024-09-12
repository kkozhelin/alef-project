<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  placeholder: string;
  label: string;
  modelValue: string;
  type: string;
}>();

defineEmits(["update:modelValue"]);

function filterInput(event: Event) {
  const input = event.target as HTMLInputElement;
  let value = input.value;

  if (input.type === "number") {
    value = value.replace(/[eE+-]/g, "");
  }
  input.value = value;
  return value;
}
</script>

<template>
  <div class="base-input">
    <label>{{ label }}</label>
    <input
      step="any"
      min="0"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', filterInput($event))"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.base-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  width: 100%;
  min-width: 0;

  label {
    font-size: 0.8rem;
    font-weight: 500;
    color: $gray;
    position: absolute;
    top: 0.4rem;
    left: 1rem;
  }

  input {
    border: 1px solid $grayL;
    border-radius: 4px;
    height: 56px;
    padding: 1.6rem 1rem 0.4rem 1rem;
    font-size: 0.9em;
    color: $black;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
}
</style>
