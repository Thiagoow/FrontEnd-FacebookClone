export default {
  head: {
    title: 'Facebook',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  plugins: ['@/plugins/accessor'],

  components: [{ path: '@/components/', pathPrefix: false }],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],
  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  modules: ['@nuxtjs/axios'],

  axios: {},
  build: {}
}
