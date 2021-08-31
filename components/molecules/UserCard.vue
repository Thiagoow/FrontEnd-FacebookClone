<template>
  <div class="user-card">
    <img src="@/assets/img/profile-pic.jpg" alt="" />

    <div class="card-top">
      <NuxtLink to="/matheus">{{ userName }}</NuxtLink>
      <span>{{ description }}</span>
    </div>

    <button v-if="btnText" @click="$emit('clicked')">{{ btnText }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    userName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.user-card {
  display: grid;
  grid-gap: 2.2rem;
  justify-items: center;
  background: color(dark, shade1);
  padding: 1.9rem 1.6rem;
  border-radius: 1.25rem;
  position: relative;
  padding-top: 5.4rem;
  transition: all 300ms ease;
  img {
    width: 4.813rem;
    border-radius: 50%;
    top: -1.5rem;
    position: absolute;
  }
  .card-top {
    display: grid;
    grid-gap: 0.4rem;
    justify-items: center;
    a {
      color: color(white);
      font-size: 1.25rem;
      font-weight: bold;
    }
    span {
      color: color(gray, shade1);
    }
  }
  button {
    border: none;
    outline: none;
    background: none;
    text-decoration: underline;
    color: color(gray);
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10.7px rgba(0, 0, 0, 0.23);
  }
}
</style>
