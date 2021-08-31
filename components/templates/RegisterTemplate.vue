<template>
  <div class="register-template-container">
    <div class="image"></div>

    <div class="auth-box" v-if="true">
      <img class="logo" src="@/assets/img/facebook-logo.svg" alt="" />

      <div class="welcome">
        <h2>Cadastre-se</h2>
        <p>É rápido e fácil!</p>
      </div>

      <RegisterForm />

      <AlreadyHaveAccount text="Já possui conta?" />
    </div>

    <div class="auth-box" v-else>
      <EmailSent />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.register-template-container {
  display: grid;
  grid-template-columns: 1fr 500px;
  height: 100%;
  @include screen('medium', 'small') {
    grid-template-columns: 1fr;
  }
  .image {
    background-image: url('@/assets/img/capa-login.png');
    background-position: center;
    background-size: cover;
    @include screen('medium', 'small') {
      display: none;
    }
  }
  .auth-box {
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 2.8rem;
    padding: 5.4rem;
    align-content: center;
    @include screen('small') {
      padding: 3rem;
    }
    .logo {
      width: 164px;
    }
    .welcome {
      line-height: 1.4;
      p {
        font-size: 19px;
        color: color(gray, shade1);
      }
      h2 {
        font-size: 22px;
        font-weight: bold;
        color: color(white);
      }
    }
  }
}
</style>
