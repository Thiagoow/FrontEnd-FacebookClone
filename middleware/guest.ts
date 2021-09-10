import { Middleware } from '@nuxt/types'

const guest: Middleware = ({ store, redirect }) => {
  // Se existir um token/user autenticado:
  if (store.state.auth.token) {
    // Redireciona o user pra Home:
    return redirect('/')
  }
}

export default guest
