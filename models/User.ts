export interface User {
  id: number
  name: string
  username: string
  email: string
  createdAt: string
  updatedAt: string
  avatar?: {
    url: string
  }
}
