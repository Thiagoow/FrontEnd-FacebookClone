import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Mobile from '@/store/mobile'

// eslint-disable-next-line import/no-mutable-exports
let mobile: Mobile

const initializeStores = (store: Store<any>): void => {
  mobile = getModule(Mobile, store)
}

export { initializeStores, mobile }
