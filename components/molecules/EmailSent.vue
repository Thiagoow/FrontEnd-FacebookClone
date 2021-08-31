<template>
  <div class="email-sent">
    <fa :icon="['fas', 'check-circle']" class="check-circle" />
    <p>
      Enviamos uma mensagem para <b>seu e-mail</b> com todas as intruções que
      você precisa para concluir seu cadastro! Não esqueça de checar a
      <b>caixa de promoções</b>, <b>lixo</b> ou <b>spam</b>.
    </p>
    <AlreadyHaveAccount text="Já confirmou o e-mail?" />
  </div>
</template>

<style lang="scss" scoped>
.email-sent {
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  svg {
    color: #fff;
    font-size: 50px;
  }
  p {
    color: color(gray, shade1);
    font-weight: light;
    line-height: 1.7;
    text-align: center;
    b {
      color: #fff;
    }
  }
}
</style>
