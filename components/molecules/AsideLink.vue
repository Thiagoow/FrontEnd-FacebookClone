<template>
  <NuxtLink to="/" class="aside-link" @click="$emit('click')">
    <img :src="require(`@/assets/img/aside/${imageURL}`)" alt="Eventos" />
    <p>{{ text }}</p>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['imageURL', 'text'],
})
</script>

<style lang="scss" scoped>
.aside-link {
  display: grid;
  padding: 1rem 0;
  grid-gap: 0.9rem;
  justify-items: center;
  background: color(dark, shade2);
  border-radius: 0.938rem;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  }
  img {
    height: 36px;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3));
  }
  p {
    color: color(white);
  }
}
</style>
