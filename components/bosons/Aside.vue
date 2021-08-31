<template>
  <aside class="aside">
    <div class="wrapper">
      <slot />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  min-height: calc(100vh - 4.2rem);
  .wrapper {
    position: sticky;
    top: 4.2rem;
    max-height: calc(100vh - 4.2rem);
    overflow: auto;
    overflow-x: hidden;
    @include scrollbars;
  }
}
</style>
