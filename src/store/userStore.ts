import { defineStore } from "pinia";
import { ref } from "vue";

import type { TUser, TChild } from "@/types/formTypes";

const defineUser: TUser = {
  name: "",
  age: "",
};

export const useUserStore = defineStore("userStore", () => {
  const user = ref<TUser>(defineUser);

  const children = ref<TChild[]>([]);

  const addUser = (userValue: TUser) => {
    user.value.name = userValue.name;
    user.value.age = userValue.age;
  };

  const addChildren = (childrenValue: TChild[]): void => {
    children.value = [];
    children.value.push(...childrenValue);
  };

  return {
    user,
    children,

    addUser,
    addChildren,
  };
});
