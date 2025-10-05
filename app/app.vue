<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
.app {
  &-page {
    padding: 16px;

    &--centered {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
  }

  &-navigation-link,
  &-navigation-link:visited {
    font-size: 18px;
    color: currentColor;
  }
}
</style>
