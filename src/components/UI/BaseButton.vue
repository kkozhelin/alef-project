<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  color: "primary-outline" | "text" | "primary";
  type?: "button" | "submit";
  disabled?: boolean;
}>();
</script>

<template>
  <button class="button" :class="color" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.button {
  padding: 0.6rem 1.2rem;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  text-wrap: nowrap;
  font-size: 0.8rem;
  width: max-content;
}
.primary-outline {
  background-color: white;
  color: $primary;
  border: 2px solid $primary;
  border-radius: 100px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease; // Добавлено

  &:hover {
    background-color: $hoverOutline;
  }

  &:active {
    background-color: $activeOutline;
  }
  &:disabled {
    opacity: 56%;
    pointer-events: none;
  }
}
.text {
  background-color: transparent;
  color: $primary;
  border: none;
  font-size: 0.9rem;
  border-radius: 4px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
}

.primary {
  background-color: $primary;
  color: white;
  border: 2px solid $primary;
  border-radius: 100px;
  font-size: 0.9rem;
  transition: all 0.3s ease; // Добавлено

  &:hover {
    background-color: $primaryHover;
    border-color: $primaryHover;
  }

  &:active {
    background-color: $primaryActive;
    border-color: $primaryActive;
  }
}
</style>
