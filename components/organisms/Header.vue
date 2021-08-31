<template>
  <header class="menu-bar">
    <NuxtLink class="home-link" to="/">
      <fa :icon="['fas', 'home']" class="home" />
    </NuxtLink>

    <form>
      <img
        class="facebook-icon"
        src="@/assets/img/facebook-icon.svg"
        alt="Facebook"
      />

      <BaseInput :placeholder="'Procurar no Facebook'" class="base-input" />

      <button class="search-icon">
        <img src="@/assets/img/search-icon.svg" alt="Pesquisa" />
      </button>
    </form>

    <div class="menu-bar-actions">
      <NuxtLink to="/123" class="profile-avatar">
        <img src="@/assets/img/profile-pic.jpg" alt="Foto do perfil" />
        <p>Caterine</p>
      </NuxtLink>

      <ul class="actions">
        <li class="messenger-link">
          <NuxtLink to="/messenger">
            <fa :icon="['fab', 'facebook-messenger']" class="messenger" />
          </NuxtLink>
        </li>

        <li class="notification-button">
          <button
            @click="notificationsIsOpened = !notificationsIsOpened"
            href="#"
            :class="{ 'active-notifications': notificationsIsOpened }"
          >
            <fa :icon="['fas', 'bell']" class="bell" />
          </button>

          <Notifications :open="notificationsIsOpened" />
        </li>

        <li class="settings-link">
          <NuxtLink to="/account">
            <fa :icon="['fas', 'cog']" class="cog" />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <button @click="toggleMenuActive" class="btn-open">
      <fa :icon="['fas', 'bars']" class="hamburger" />
    </button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mobile } from '@/store'

export default Vue.extend({
  data() {
    return {
      notificationsIsOpened: false,
    }
  },
  methods: {
    toggleMenuActive() {
      const body = document.querySelector('body') as HTMLElement
      const html = document.querySelector('html') as HTMLElement

      body.classList.toggle('overflow-hidden')
      html.classList.toggle('overflow-hidden')

      mobile.toggle()
    },
  },
  computed: {
    $isMenuActive() {
      return mobile.$isMenuActive
    },
  },
})
</script>

>

<style lang="scss" scoped>
.menu-bar {
  padding: 0 1rem;
  background: color(dark, shade2);
  height: 4.2rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
  display: grid;
  grid-template-columns: auto minmax(auto, 500px) auto;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.16);

  @include screen('medium', 'small') {
    grid-template-columns: auto minmax(auto, 500px) auto auto;
    grid-gap: 1.8rem;
  }

  .home-link {
    font-size: 22px;
    color: color(white);
  }

  form {
    position: relative;
    .facebook-icon {
      position: absolute;
      left: 0.188rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.813rem;
    }
    .search-icon {
      position: absolute;
      right: 0.688rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.188rem;
      background: none;
      outline: none;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .base-input {
      width: 100%;
      padding: 0 2.5rem;
    }
  }
  .menu-bar-actions {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    grid-gap: 1.5rem;
    align-items: center;
    width: max-content;
    .profile-avatar {
      display: grid;
      grid-template-columns: repeat(2, auto);
      background: color(dark, shade1);
      grid-gap: 1rem;
      align-items: center;
      border-radius: 1.25rem;
      padding: 0.25rem 1rem 0.25rem 0.2rem;
      transition: all 500ms ease;
      border: 2px solid transparent;
      cursor: pointer;
      @include screen('medium', 'small') {
        display: none;
      }
      &.nuxt-link-exact-active {
        border: 2px solid #1aafff;
      }
      &:hover {
        border: 2px solid color(blue, shade1);
      }
      img {
        width: 1.875rem;
        border-radius: 50%;
      }
      p {
        color: color(white);
      }
    }
    .actions {
      display: grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-gap: 1rem;

      img {
        width: 1.125rem;
      }

      a {
        font-size: 22px;
        color: color(white);
        position: relative;
        &.nuxt-link-exact-active {
          color: color(blue);
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            background: color(blue);
            left: 0;
            bottom: -21px;
          }
        }
      }

      .messenger-link {
        @include screen('medium', 'small') {
          display: none;
        }
      }
      .settings-link {
        @include screen('medium', 'small') {
          display: none;
        }
      }
      .notification-button {
        position: relative;
        .active-notifications {
          color: color(blue);
        }
        > button {
          font-size: 22px;
          color: #f4f6f8;
          position: relative;
          background: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
  .btn-open {
    background: none;
    outline: none;
    cursor: pointer;
    @include screen('large', 'infinity') {
      display: none;
    }
    .hamburger {
      font-size: 26px;
      color: white;
    }
  }
  .home-link {
    &.nuxt-link-exact-active {
      color: color(blue);
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: color(blue);
        left: 0;
        bottom: -21px;
      }
    }
  }
}
</style>
