<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useUserStore } from "@/store/userStore";

import BaseInput from "@/components/UI/BaseInput.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import PlusIcon18 from "@/assets/PlusIcon18.vue";

import type { TUser, TChild } from "@/types/formTypes";

const userStore = useUserStore();

const user = ref<TUser>({
  name: "",
  age: "",
});

onMounted(() => {
  if (userStore.user.name && userStore.user.age) {
    const userCopy = JSON.parse(JSON.stringify(userStore.user));
    user.value = userCopy;
  }

  if (userStore.children.length) {
    const childrenCopy = JSON.parse(JSON.stringify(userStore.children));
    children.value = childrenCopy;
  }
});

const isFormComplete = ref(false);

const isErrorUser = ref(false);
const isErrorChildren = ref(false);

const children = ref<TChild[]>([]);

const addCheldren = (): void => {
  children.value.push({
    id: Date.now(),
    name: "",
    age: "",
  });
};

const removeChild = (id: number) => {
  children.value = children.value.filter((child) => child.id !== id);
};

const submitForm = () => {
  if (!user.value.name || !user.value.age) {
    isErrorUser.value = true;
    return;
  }
  for (const child of children.value) {
    if (!child.name || !child.age) {
      isErrorChildren.value = true;
      return;
    }
  }
  isErrorUser.value = false;
  isErrorChildren.value = false;
  const userCopy = JSON.parse(JSON.stringify(user.value));
  const childrenCopy = JSON.parse(JSON.stringify(children.value));

  userStore.addUser(userCopy);
  userStore.addChildren(childrenCopy);

  isFormComplete.value = true;
  setTimeout(() => {
    isFormComplete.value = false;
  }, 2000);
};
</script>

<template>
  <form class="container" @submit.prevent="submitForm">
    <section class="user-form">
      <h3 class="user-form__title">Персональные данные</h3>
      <BaseInput
        placeholder="Ваше имя"
        v-model.trim="user.name"
        label="Имя"
        type="text"
      />
      <BaseInput
        placeholder="Ваш возраст"
        v-model.trim="user.age"
        label="Возраст"
        type="number"
      />
      <span v-if="isErrorUser" class="user-form__error"
        >Заполните все поля</span
      >
    </section>
    <section class="children-form">
      <div class="children-form__title">
        <h3 class="children-form__title">Дети (макс. 5)</h3>
        <BaseButton
          v-if="children.length < 5"
          color="primary-outline"
          type="button"
          @click="addCheldren"
          :disabled="children.length >= 5"
          ><PlusIcon18 />Добавить ребенка</BaseButton
        >
      </div>
      <template v-if="children.length">
        <div
          class="children-form__children"
          v-for="child in children"
          :key="child.id"
        >
          <BaseInput
            placeholder="Имя ребенка"
            label="Имя"
            type="text"
            v-model.trim="child.name"
          />
          <BaseInput
            placeholder="Возраст ребенка"
            label="Возраст"
            type="number"
            v-model.trim="child.age"
          />
          <span v-if="isErrorChildren" class="children-form__error"
            >Заполните все поля</span
          >
          <BaseButton color="text" type="button" @click="removeChild(child.id)"
            >Удалить</BaseButton
          >
        </div>
      </template>
      <span v-if="isFormComplete" class="children-form__done"
        >Форма сохранена</span
      >
      <BaseButton color="primary" type="submit">Сохранить</BaseButton>
    </section>
  </form>
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
.user-form {
  display: flex;
  justify-content: start;
  padding: 1.5rem 1.5rem;
  gap: 0.6rem;
  flex-direction: column;
  width: 100%;
  max-width: 616px;
  position: relative;

  &__title {
    text-align: start;
    font-weight: 500;
    color: $black;
    font-size: 1rem;
  }

  &__error {
    position: absolute;
    bottom: -0.1rem;
    color: $error;
    font-size: 0.8rem;
  }
}

.children-form {
  display: flex;
  justify-content: start;
  padding: 1.5rem 1.5rem;
  gap: 0.6rem;
  flex-direction: column;
  width: 100%;
  max-width: 616px;
  position: relative;

  &__title {
    font-weight: 500;
    color: $black;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__children {
    display: flex;
    justify-content: start;
    gap: 0.6rem;
    width: 100%;
  }

  &__error {
    position: absolute;
    bottom: 4.9rem;
    color: $error;
    font-size: 0.8rem;
  }

  &__done {
    position: absolute;
    bottom: 0.3rem;
    color: $done;
    font-size: 0.8rem;
  }

  &__children:last-of-type {
    margin-bottom: 1.8rem;
  }
}
</style>
