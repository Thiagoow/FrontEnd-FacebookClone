import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { User } from '@/models'

interface StorePayload {
  email: string
  redirectUrl: string
}
interface ShowPayload {
  key: string
}
interface UpdatePayload {
  key: string
  name: string
  password: string
  passwordConfirmation: string
}

@Module({ name: 'users/register', stateFactory: true, namespaced: true })
export default class UserRegister extends VuexModule {
  // Cria um estado de usuário:
  private user = {} as User
  // Cria o getter de usuário:
  get $user() {
    return this.user
  }

  // Cria a MUTATION para alterar o estado de Usuário:
  @Mutation
  UPDATE_USER(user: User) {
    this.user = user
  }

  // Usando as requisições do insomnia, criamos as actions do módulo de registro do usuário:
  @Action({ rawError: true })
  public async create(payload: StorePayload) {
    await $axios.$post('/users/register', payload)
  }

  @Action({ rawError: true })
  public async show({ key }: ShowPayload) {
    // O método $get já traz desestruturado :D
    const user = await $axios.$get(`/users/register/${key}`)
    // Atualiza com a mutation o usuário recebido da requisição:
    this.context.commit('UPDATE_USER', user)
  }

  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    await $axios.$put('/users/register/', payload)
  }
}
