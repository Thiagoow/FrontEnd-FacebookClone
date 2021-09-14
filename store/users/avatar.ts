import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

interface UpdatePayload {
  file: Blob
}

@Module({ name: 'users/avatar', stateFactory: true, namespaced: true })
export default class UserAvatar extends VuexModule {
  @Action
  public async update(payload: UpdatePayload) {
    const formData = new FormData()
    formData.append('file', payload.file)

    const avatar = await $axios.$put('users/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    // Para atualizar o avatar em tempo real para o user com a MUTAITON:
    this.context.commit('users/SET_USER_AVATAR', avatar, {
      // Como essa mutation não pertence a esse módulo:
      root: true
    })
  }
}
