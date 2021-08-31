<template>
  <li class="contact">
    <NuxtLink to="/messenger/matheus">
      <div class="contact-img">
        <img :src="require(`@/assets/img/${imageURL}`)" alt="" />
        <StatusBadge :status="getStatus" />
      </div>

      <div class="contact-info">
        <p>{{ username }}</p>
        <span class="last-msg">{{ lastmsg }}</span>
      </div>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['imageURL', 'status', 'username', 'lastmsg'],
  computed: {
    getStatus(): string {
      return this.status
    },
  },
})
</script>

<style lang="scss" scoped>
.contact {
  transition: all 300ms ease;
  cursor: pointer;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 1rem;
    .contact-img {
      width: 2.575rem;
      display: grid;
      align-items: center;
      position: relative;
      .status-badge {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        position: absolute;
        bottom: 0.063rem;
        right: -0.063rem;
        border: 2px solid #18232f;
      }
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    p {
      color: color(white);
      font-weight: bold;
    }
  }
  .contact-info {
    display: grid;
    grid-gap: 0.3rem;
    span {
      color: color(gray, shade1);
    }
  }

  &:hover {
    background: color(dark, shade2);
  }
}
</style>
