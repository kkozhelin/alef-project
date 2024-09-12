<script setup lang="ts">
import DefaultLayout from "./components/layout/DefaultLayout.vue";
import "normalize.css";
import "@/assets/style.scss";
</script>

<template>
  <DefaultLayout><router-view /></DefaultLayout>
</template>

<style lang="scss">
@import "@/assets/style.scss";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: $gray;

  &:hover {
    text-decoration: underline;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
html,
body {
  font-family: "Montserrat", sans-serif;
  background-color: #ffffff;
  font-weight: 400;
  margin: 0;
}
</style>
