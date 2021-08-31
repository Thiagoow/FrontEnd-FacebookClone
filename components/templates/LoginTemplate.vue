<template>
  <div class="login-template-container">
    <div class="image"></div>

    <div class="form-box">
      <img class="logo" src="@/assets/img/facebook-logo.svg" alt="" />
      <div class="welcome">
        <p>Bem-vindo</p>
        <h2>Entre na sua conta</h2>
      </div>

      <LoginForm />

      <div class="register">
        <p>
          <span>Ainda não possui uma conta?</span>
          <NuxtLink to="/register">Cadastre-se</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.login-template-container {
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
  .form-box {
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 4.3rem;
    padding: 5.4rem;
    align-content: center;
    @include screen('small') {
      padding: 3rem;
    }
    .logo {
      width: 164px;
    }
    .welcome {
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
    .register {
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
  }
}
</style>
