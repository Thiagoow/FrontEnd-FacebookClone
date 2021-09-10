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
      } catch ({ response }) {
        console.log(response.data.errors)

        // Mensagem de erro padrão:
        this.$notify({
          type: 'error',
          text: 'Ops.. Algo deu errado❗ 😵😕'
        })

        if (response.data.errors[0].message === 'required validation failed') {
          this.$notify({
            type: 'error',
            text: 'Digite um e-mail válido!'
          })
        }
        if (response.data.errors[0].message === 'unique validation failure') {
          this.$notify({
            type: 'error',
            text: 'Você já está cadastrado! 🤩🤗 Por favor, realize o Login'
          })
        }
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
