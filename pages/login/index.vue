<template>
  <LoginTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blank',
  // Acesso permitido a users não logados/autenticados:
  middleware: 'guest'
})
</script>
