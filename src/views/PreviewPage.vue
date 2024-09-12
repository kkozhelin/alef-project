<script setup lang="ts">
import { useUserStore } from "@/store/userStore";

const userStore = useUserStore();
</script>

<template>
  <section class="container">
    <div class="user-preview">
      <h3 class="user-preview__title">Персональные данные</h3>
      <p
        class="user-preview__text"
        v-if="userStore.user.name && userStore.user.age"
      >
        {{ userStore.user.name }}, {{ userStore.user.age }} лет
      </p>
    </div>
    <div class="children-preview">
      <h3 class="children-preview__title">Дети</h3>
      <ul class="children-preview__list">
        <li
          class="children-preview__text"
          v-for="child in userStore.children"
          :key="child.id"
        >
          {{ child.name }}, {{ child.age }} лет
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.container {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.user-preview {
  display: flex;
  justify-content: start;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
  gap: 0.6rem;
  flex-direction: column;
  width: 100%;
  max-width: 616px;

  &__title {
    text-align: start;
    font-weight: 500;
    color: $black;
    font-size: 1rem;
  }

  &__text {
    text-align: start;
    font-weight: 700;
    color: $black;
    font-size: 1rem;
  }
}

.children-preview {
  margin-top: 3.75rem;
  display: flex;
  justify-content: start;
  padding: 0rem 1.5rem 1.5rem 1.5rem;
  gap: 0.6rem;
  flex-direction: column;
  width: 100%;
  max-width: 616px;

  &__title {
    text-align: start;
    font-weight: 500;
    color: $black;
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  &__text {
    list-style: none;
    font-weight: 700;
    color: $black;
    width: min-content;
    text-wrap: nowrap;
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    background-color: $grayL;
  }
}
</style>
