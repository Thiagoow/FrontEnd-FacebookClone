<template>
  <div class="login">
    <p>
      <span>{{text}}</span>
      <NuxtLink to="/login">Entrar</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  p {
    font-size: 14px;
    span {
      color: color(gray, shade1);
    }
    a {
      color: color(white);
      font-weight: bold;
    }
  }
}
</style>
