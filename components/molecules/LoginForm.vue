<template>
  <form>
    <div class="fom-field">
      <BaseInput type="email" placeholder="E-mail" />
    </div>
    <div class="fom-field">
      <BaseInput type="password" placeholder="Senha" />
    </div>

    <NuxtLink to="/recovery"> Esqueceu a senha? </NuxtLink>

    <BaseButton text="Entrar" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
form {
  input {
    width: 100% !important;
    padding: 0.7rem 1.2rem;
  }
  display: grid;
  grid-gap: 0.8rem;
  button {
    width: 100%;
  }
  a {
    justify-self: end;
    font-size: 14px;
    color: color(white);
  }
}
</style>
