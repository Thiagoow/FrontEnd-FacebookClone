<template>
  <form>
    <div class="fom-field">
      <BaseInput type="email" placeholder="E-mail" />
    </div>
    <div class="fom-field">
      <BaseInput type="text" placeholder="Nome" />
    </div>
    <div class="fom-field">
      <BaseInput type="password" placeholder="Senha" />
    </div>
    <div class="fom-field">
      <BaseInput type="password" placeholder="Repita a senha" />
    </div>
    <BaseButton text="Próxima etapa" />
  </form>
</template>

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
