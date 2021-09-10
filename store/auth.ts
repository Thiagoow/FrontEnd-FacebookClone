import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface StorePayload {
  email: string
  password: string
}
interface UpdatePayload {
  /* O ? significa que é uma prop opcional 
  (podendo ou não existir): */
  token?: string
}

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  // Cria um estado do token:
  private token = null as Token
  // Cria o getter de token:
  public get $token() {
    return this.token
  }

  // Cria a MUTATION para alterar o estado de token:
  @Mutation
  private UPDATE_TOKEN(token: Token) {
    this.token = token
  }

  @Action({ rawError: true })
  public async create(payload: StorePayload) {
    // Cria um token para o usuário:
    const { token } = await $axios.$post('/auth', payload)

    // Armazena o token 'authToken' do usuário como cookie:
    $cookies.set('authToken', token, {
      // Fica na raiz da aplicação:
      path: '/',
      // Expira em 30 dias:
      maxAge: 60 * 60 * 24 * 30
    })

    // Armazena com a mutation o token no estado da aplicação:
    this.context.commit('UPDATE_TOKEN', token)
  }

  @Action
  // Para que o user continue com o cookie de auth, msm depois de sair da página:
  public update(payload: UpdatePayload) {
    // Se o token existir nos cookies:
    const token = payload?.token ? payload.token : $cookies.get('authToken')
    // Armazena ele, ou define como null:
    this.context.commit('UPDATE_TOKEN', token || null)
  }

  @Action
  public async destroy() {
    // Desfaz o login/autenticação:
    await $axios.delete('/auth')

    // Delete o cookie do usuário:
    $cookies.remove('authToken')

    // Atualiza o token pra nulo usando a mutation:
    this.context.commit('UPDATE_TOKEN', null)
  }
}
