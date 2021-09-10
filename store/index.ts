import { Store, ActionTree } from 'vuex'
import { initializeStores } from '@/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessor'

const state = () => ({})
type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  // Sempre que o server do Nuxt (nesse caso da store), for iniciado:
  nuxtServerInit({ dispatch }) {
    // Salva o token do user autenticado mesmo que ele recarregue a página:
    dispatch('auth/update') // moduleName/moduleMethodName
  }
}
