<template>
  <!-- .prevent = Não recarrega a página -->
  <form @submit.prevent="onSubmit">
    <div class="fom-field">
      <BaseInput v-model="email" type="email" placeholder="E-mail" />
    </div>

    <BaseButton text="Próxima etapa" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'

export default Vue.extend({
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async onSubmit() {
      try {
        // Usa a action de create no módulo userRegister:
        await userRegister.create({
          email: this.email,
          redirectUrl: 'http://localhost:3000/register'
        })

        // Emite uma notificação de sucesso:
        this.$notify({
          type: 'success',
          text: 'Tudo certo! Verifique seu e-mail! 🤩✌🏼😊'
        })

        // Limpa o e-mail pro usuário após criar ele:
        this.email = ''
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Ops.. Algo deu errado❗ 😵😕'
        })
        console.log(error)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
form {
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
  input {
    width: 100% !important;
    padding: 0.7rem 1.2rem;
  }
}
</style>
