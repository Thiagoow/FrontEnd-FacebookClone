<template>
  <form @submit.prevent="onSubmit">
    <div class="fom-field">
      <BaseInput
        v-model="user.email"
        type="email"
        placeholder="E-mail"
        readonly
      />
    </div>
    <div class="fom-field">
      <BaseInput v-model="user.name" type="text" placeholder="Nome" />
    </div>
    <div class="fom-field">
      <BaseInput v-model="user.password" type="password" placeholder="Senha" />
    </div>
    <div class="fom-field">
      <BaseInput
        v-model="user.passwordConfirmation"
        type="password"
        placeholder="Repita a senha"
      />
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
      user: {
        email: userRegister.$user.email,
        name: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        await userRegister.update({
          key: this.$route.params.key,
          // Tudo presente no objeto user, preenchido pelo v-model:
          ...this.user
        })

        this.$notify({
          type: 'success',
          text: '✔ Cadastro finalizado com sucesso! Você já pode efetuar o login! 🤩✌🏼😊'
        })

        // Limpa o formulário:
        this.user.email = ''
        this.user.name = ''
        this.user.password = ''
        this.user.passwordConfirmation = ''
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
            text: '❌ Por favor preencha todos os campos corretamente'
          })
        }
        if (response.data.errors[0].message === 'confirmed validation failed') {
          this.$notify({
            type: 'warn',
            text: '⚠ Sua senha e a confirmação não são iguais!'
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
