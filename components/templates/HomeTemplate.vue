<template>
  <FullScreenContainer>
    <HomeLeftAside class="home-aside" />
    <HomeFeed />
    <HomeRightAside />
  </FullScreenContainer>
</template>

<style lang="scss" scoped>
.full-screen-container {
  grid-template-columns: 300px 1fr 300px;
  grid-gap: 5rem;
  @include screen('large', 'medium') {
    grid-template-columns: auto 16.875rem;
    padding-left: 2.375rem;
    grid-gap: 3rem;
  }
  @include screen('small') {
    grid-template-columns: auto;
    padding-left: 0;
  }
  .feed {
    padding-bottom: 4rem;
  }
  .home-aside {
    @include screen('infinity') {
      display: block !important;
    }
  }
}
</style>
