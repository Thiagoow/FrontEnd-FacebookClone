<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  justify-self: center;
  @include screen('large', 'infinity') {
    max-width: 650px;
  }
  @include screen('medium') {
    width: 85%;
  }
  @include screen('small') {
    width: 90%;
  }
}
</style>
