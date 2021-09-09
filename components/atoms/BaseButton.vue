<template>
  <NuxtLink v-if="btnLink" :to="link">{{ text }}</NuxtLink>
  <button v-else @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    btnLink: {
      default: false,
      type: Boolean
    }
  }
})
</script>

<style lang="scss" scoped>
a,
button {
  background: color(blue);
  color: color(white);
  padding: 0.6rem 0;
  min-width: 162px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  font-size: 0.938rem;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 11px -2px rgba(69, 137, 247, 0.25);
  }
  &:active {
    box-shadow: none;
    background: color(blue, shade2);
  }
}
button {
  outline: none;
}
</style>
