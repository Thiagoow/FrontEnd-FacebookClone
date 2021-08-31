<template>
  <transition name="fade" mode="out-in">
    <div v-show="open" class="notifications-wrapper">
      <div class="title">
        <h3>Notificações</h3>
      </div>

      <div class="notifications">
        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>

        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>

        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>

        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>

        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>
        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />
          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>
        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>

        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>
        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>
        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>

        <div class="notification">
          <img src="@/assets/img/profile-pic.jpg" alt="" />

          <div class="notification-info">
            <p>
              <span class="user-name">Rafaela Lopes</span> fez uma nova postagem
            </p>
            <span class="time">15h atrás</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
    },
  },
})
</script>

<style lang="scss" scoped>
.notifications-wrapper {
  position: absolute;
  width: 360px;
  right: 0;
  top: 40px;
  padding-bottom: 2rem;
  background: color(dark, shade1);
  box-shadow: 1px 3.2px 8.7px 0.3px rgba(1, 1, 1, 0.19);
  border-radius: 0.95rem;
  max-height: calc(100vh - 70px);
  overflow: auto;
  @include scrollbars;
  @include screen('small') {
    width: 83vw;
    right: -59px;
  }
  .title {
    padding: 2rem;
    h3 {
      color: color(white);
    }
    @include screen('small') {
      padding: 1rem;
    }
  }
  .notifications {
    .notification {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-gap: 1rem;
      padding: 0.613rem 2rem;
      transition: all 300ms ease;
      @include screen('small') {
        padding: 0.613rem 1rem;
      }
      &:hover {
        background: color(dark, shade2);
      }
      img {
        width: 2.575rem;
        border-radius: 50%;
      }
      .notification-info {
        display: grid;
        grid-gap: 0.1rem;
        p {
          color: color(white);
          font-size: 15px;
          .user-name {
            font-weight: bold;
          }
        }
        .time {
          color: color(gray, shade1);
          font-size: 14px;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
