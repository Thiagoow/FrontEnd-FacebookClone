<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '~/store'

export default Vue.extend({
  layout: 'blank',
  async asyncData({ params, redirect }) {
    try {
      const key = params.key as string

      await userRegister.show({ key })
    } catch (error) {
      // Página de erro 404:
      return redirect('/404')
    }
  }
})
</script>
