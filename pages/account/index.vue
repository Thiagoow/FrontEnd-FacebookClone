<template>
  <AccountTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // Acesso permitido apenas a users autenticados/logados:
  middleware: 'auth'
})
</script>
