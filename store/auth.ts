import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface CreatePayload {
  email: string
  password: string
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
  public async create(payload: CreatePayload) {
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

  @Action({ rawError: true })
  public async destroy() {
    // Desfaz o login/autenticação:
    await $axios.delete('/auth')

    // Delete o cookie do usuário:
    $cookies.remove('authToken')

    // Atualiza o token pra nulo usando a mutation:
    this.context.commit('UPDATE_TOKEN', null)
  }
}
