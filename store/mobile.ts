import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'mobile', stateFactory: true, namespaced: true })
export default class Mobile extends VuexModule {
  private isMenuActive = false

  public get $isMenuActive() {
    return this.isMenuActive
  }

  @Mutation
  private TOGGLE_MENU_ACTIVE() {
    this.isMenuActive = !this.isMenuActive
  }

  @Action
  public toggle() {
    this.context.commit('TOGGLE_MENU_ACTIVE')
  }
}
