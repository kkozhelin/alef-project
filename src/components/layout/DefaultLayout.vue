<template>
  <div class="container">
    <header class="header">
      <router-link to="/"><img src="/logo.svg" alt="logo" /></router-link>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li><router-link to="/">Форма</router-link></li>
          <li><router-link to="/preview">Превью</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="main"><slot /></main>
    <footer class="footer"><span>all rights reserved</span></footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  padding: 1.5rem 2.8rem;
  display: flex;
  align-items: center;
  border: 1px solid rgba(17, 17, 17, 0.1);

  &__nav {
    margin: 0 auto;
  }

  &__nav-list {
    font-size: 0.9rem;
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }
}

.main {
  flex-grow: 1;
}

.footer {
  background-color: $grayM;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
</style>
