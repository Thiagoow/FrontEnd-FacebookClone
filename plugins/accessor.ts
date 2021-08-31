import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
