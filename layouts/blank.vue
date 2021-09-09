<template>
  <div class="blank-layout">
    <!-- Registrando notificação do 
    vue-notifications, que será renderizada
    APENAS no Client Side, não no Server Side: -->
    <clientOnly>
      <notifications
        position="bottom center"
        classes="notifications"
        :max="1"
      />
    </clientOnly>
    <Nuxt />
  </div>
</template>

<style lang="scss">
.blank-layout {
  height: 100%;
}
</style>
