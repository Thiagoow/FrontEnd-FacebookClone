<template>
  <Container class="feed">
    <NewPostForm />

    <div class="posts">
      <PostCard v-for="n in 3" :key="n" />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.feed {
  display: grid;
  grid-gap: 1.3rem;
  .posts {
    display: grid;
    grid-gap: 1.5rem;
  }
}
</style>
