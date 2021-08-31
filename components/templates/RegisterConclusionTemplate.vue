<template>
  <div class="register-template-container">
    <div class="image"></div>

    <div class="auth-box">
      <div class="welcome">
        <h2>Complete seu cadastro</h2>
      </div>

      <RegisterConclusionForm />

      <AlreadyHaveAccount text="Já possui conta?" />
    </div>
  </div>
</template>

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

    .welcome {
      h2 {
        font-size: 22px;
        font-weight: bold;
        color: color(white);
      }
    }
  }
}
</style>
