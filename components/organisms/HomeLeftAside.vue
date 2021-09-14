<template>
  <Aside :class="{ 'is-menu-active': isMenuActive }">
    <div class="content">
      <div class="profile-avatar">
        <img
          :src="
            $user.avatar ? $user.avatar.url : '@/assets/img/profile-pic.png'
          "
          @load="updateAvatar"
        />
        <p>{{ $user.name }}</p>

        <BaseButton
          btn-link
          text="Ver Perfil"
          :to="`/${$user.username}`"
          @click.native="toggleMenuActive"
        />
      </div>
      <div class="aside-links">
        <AsideLink
          :image-u-r-l="'messenger-link.svg'"
          :text="'Messenger'"
          :link="'messenger'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'followers-link.svg'"
          :text="'Seguidores'"
          :link="'following'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'groups-link.svg'"
          :text="'Grupos'"
          :link="'groups'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'pages-link.svg'"
          :text="'Páginas'"
          :link="'pages'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'events-link.svg'"
          :text="'Eventos'"
          :link="'events'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'foundations-link.svg'"
          :text="'Fundações'"
          :link="'foundations'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'memories-link.svg'"
          :text="'Memórias'"
          :link="'memories'"
          @click.native="toggleMenuActive"
        />
        <AsideLink
          :image-u-r-l="'videos-link.svg'"
          :text="'Vídeos'"
          :link="'videos'"
          @click.native="toggleMenuActive"
        />
      </div>
    </div>

    <button class="btn-close" @click="toggleMenuActive">
      <fa :icon="['fas', 'times']" class="close" />
    </button>
  </Aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { mobile, users, userAvatar } from '@/store'

export default Vue.extend({
  computed: {
    isMenuActive() {
      return mobile.$isMenuActive
    },
    $user() {
      return users.$single
    }
  },
  methods: {
    toggleMenuActive() {
      const body = document.querySelector('body') as HTMLElement
      const html = document.querySelector('html') as HTMLElement
      const width = document.body.clientWidth

      if (width > 1200) return

      body.classList.toggle('overflow-hidden')
      html.classList.toggle('overflow-hidden')
      mobile.toggle()
    },
    async updateAvatar(event: any) {
      /* Pega o primeiro arquivo enviado pelo usuário 
      pra ser a nova foto de perfil: */
      const file = event.target.files[0]
      await userAvatar.update({ file })
    }
  }
})
</script>

<style lang="scss" scoped>
.aside {
  background: color(dark, shade1);
  @include screen('large', 'medium', 'small') {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    height: 100vh;
    width: 100%;
    transform: translate3d(-100%, 0, 0);
    transition: all 300ms ease;
  }
  @include screen('infinity') {
    display: none;
  }
  &.is-menu-active {
    transform: translate3d(0, 0, 0);
    ::v-deep .wrapper {
      position: relative;
      top: 0;
      overflow: auto;
      max-height: unset;
      height: inherit;
      overflow-x: hidden;
    }
  }
}

.content {
  padding: 3rem 1.4rem;
  display: grid;
  grid-gap: 2rem;
  .profile-avatar {
    display: grid;
    grid-gap: 1rem;
    justify-items: center;
    img {
      width: 6.25rem;
      border-radius: 50%;
    }
    p {
      font-weight: bold;
      color: color(white);
      font-size: 1.25rem;
    }
  }
  .aside-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;
  }
}
.btn-close {
  position: absolute;
  top: 21px;
  right: 20px;
  background: none;
  outline: none;
  cursor: pointer;
  @include screen('large', 'infinity') {
    display: none;
  }
  .close {
    font-size: 26px;
    color: white;
  }
}
</style>
