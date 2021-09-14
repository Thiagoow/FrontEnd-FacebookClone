/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Mobile from '@/store/mobile'
import UserRegister from '@/store/users/register'
import Auth from '@/store/auth'
import Users from '@/store/users'
import Avatar from '@/store/users/avatar'

let mobile: Mobile
let userRegister: UserRegister
let auth: Auth
let users: Users
let userAvatar: Avatar

const initializeStores = (store: Store<any>): void => {
  mobile = getModule(Mobile, store)
  userRegister = getModule(UserRegister, store)
  auth = getModule(Auth, store)
  users = getModule(Users, store)
  userAvatar = getModule(Avatar, store)
}

export { initializeStores, mobile, userRegister, auth, users, userAvatar }
