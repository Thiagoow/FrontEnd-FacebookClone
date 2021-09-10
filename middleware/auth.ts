import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ store, redirect }) => {
  // Se não existir um token/user autenticado:
  if (!store.state.auth.token) {
    // Redireciona o user pra Login:
    return redirect('/login')
  }
}

export default auth
