<template>
  <div class="default-layout">
    <clientOnly>
      <notifications
        position="bottom center"
        classes="notifications"
        :max="1"
      />
    </clientOnly>
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
