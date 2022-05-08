import { Plugin } from '@nuxt/types'

// BUG: This interceptor file isn't working :c
const axiosPlugin: Plugin = ({ app, store, redirect }) => {
  // Intercepta a requisição:
  app.$axios.onRequest((config) => {
    // Se o user é autenticado com o token:
    const token = app.$cookies.get('authToken')

    // E o token desse user existir (DO JEITO CORRETO):
    if (token) {
      // Define o parâmetro de autorização no header:
      config.headers.Authorization = `bearer ${token}`
    }
  })

  // Intercepta algum erro de alguma requisição:
  app.$axios.onError((error) => {
    // Se existir um erro 401 (token inválido):
    if (error.response?.status === 401) {
      // Remove o cookie de autenticação:
      app.$cookies.remove('authToken')
      // Define o token como nulo/vazio:
      store.dispatch('auth/update', { token: null })
      // Manda ele pra página de login:
      return redirect('/login')
    }
  })
}

export default axiosPlugin
