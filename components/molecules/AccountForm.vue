<template>
  <form>
    <div class="form-field">
      <label>Nome</label>
      <BaseInput />
    </div>
    <div class="form-field">
      <label>Nome do usuário</label>
      <BaseInput />
    </div>
    <br />
    <br />
    <div class="form-field">
      <label>E-mail</label>
      <BaseInput readonly />
    </div>
    <div class="form-field">
      <label>Nova senha</label>
      <BaseInput />
    </div>
    <div class="form-field">
      <label>Repita a senha</label>
      <BaseInput />
    </div>
    <div class="form-actions">
      <BaseButton text="Enviar" />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
input {
  background: #112331 !important;
  width: 100% !important;
  padding: 0.7rem 1.2rem;
}
form {
  display: grid;
  grid-gap: 0.5rem;
  @include screen('medium', 'small') {
    grid-gap: 1rem;
  }
  .form-field {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-gap: 1.1rem;
    align-items: center;
    @include screen('medium', 'small') {
      grid-template-columns: 1fr;
      grid-gap: 0.58rem;
    }
    label {
      text-align: right;
      color: color(white);
      font-weight: bold;
      @include screen('medium', 'small') {
        text-align: left;
      }
    }
  }
  .form-actions {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-areas: '_ Button';
    grid-gap: 1.1rem;
    margin-top: 2.4rem;
    @include screen('medium', 'small') {
      grid-template-columns: 1fr;
      grid-template-areas: 'Button';
    }
    button {
      width: max-content;
      grid-area: Button;
    }
  }
}
</style>
