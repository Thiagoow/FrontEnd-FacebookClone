<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mobile } from '@/store'

export default Vue.extend({
  computed: {
    $isMenuActive() {
      return mobile.$isMenuActive
    }
  }
})
</script>

<style lang="scss">
body {
  background: color(dark);
}
.default-layout {
  min-height: 100%;
}
</style>
