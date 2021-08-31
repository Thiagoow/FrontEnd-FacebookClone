import { NuxtAxiosInstance } from '@nuxtjs/axios'

/* eslint-disable import/no-mutable-exports */
let $axios: NuxtAxiosInstance

const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance
}

export { initializeAxios, $axios }
