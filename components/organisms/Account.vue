<template>
  <div class="account-container">
    <div class="account-avatar">
      <div class="image">
        <img src="/profile-pic.jpg" />
      </div>
      <div class="info">
        <p>Caterine Silva</p>
        <label for="avatar">Alterar foto do perfil</label>
        <input id="avatar" type="file" />
      </div>
    </div>
    <AccountForm />
    <div class="disable-account">
      <button>Desativar minha conta temporariamente</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.account-container {
  background: color(dark, shade1);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  padding: 1.4rem;
  display: grid;
  grid-gap: 2.1rem;
  border-radius: 24px;
  margin-top: 3rem;
  .account-avatar {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-gap: 1.1rem;
    align-items: center;
    @include screen('medium', 'small') {
      grid-template-columns: auto 1fr;
    }
    .image {
      text-align: right;
      img {
        width: 60px;
        border-radius: 50%;
      }
    }
    .info {
      input {
        display: none;
      }
      p {
        color: color(white);
        font-weight: bold;
      }
      label {
        background: none;
        outline: none;
        color: color(blue);
        font-size: 14px;
        cursor: pointer;
        grid-area: Button;
      }
    }
  }
  .disable-account {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-areas: '_ Button';
    grid-gap: 1.1rem;
    @include screen('medium', 'small') {
      grid-template-columns: 1fr;
      grid-template-areas: 'Button';
    }
    button {
      outline: none;
      background: none;
      grid-area: Button;
      text-align: left;
      color: color(blue);
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
