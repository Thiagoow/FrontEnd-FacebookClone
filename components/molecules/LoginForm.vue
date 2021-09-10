<template>
  <form @submit.prevent="onSubmit">
    <div class="fom-field">
      <BaseInput v-model="email" type="email" placeholder="E-mail" />
    </div>
    <div class="fom-field">
      <BaseInput v-model="password" type="password" placeholder="Senha" />
    </div>

    <NuxtLink to="/recovery"> Esqueceu a senha? </NuxtLink>

    <BaseButton text="Entrar" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      try {
        await auth.create({
          email: this.email,
          password: this.password
        })

        // Envia o user pra home:
        this.$router.push('/')
      } catch ({ response }) {
        console.log(response.data.errors)

        // Mensagem de erro padrão:
        this.$notify({
          type: 'error',
          text: '❌ Ops.. Algo deu errado❗ 😵😕'
        })

        if (response.data.errors[0].message === 'required validation failed') {
          this.$notify({
            type: 'error',
            text: '❌ Por favor preencha todos os campos corretamente!'
          })
        }
        if (response.data.errors[0].message === 'Invalid user credentials') {
          this.$notify({
            type: 'warn',
            text: '⚠ Dados incorretos! 🤨'
          })
        }
      }
    }
  }
})
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
