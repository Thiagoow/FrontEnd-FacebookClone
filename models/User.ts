export interface User {
  id: number
  name: string
  username: string
  email: string
  rememberMeToken: null
  createdAt: string
  updatedAt: string
  avatar?: {
    url: string
  }
}
