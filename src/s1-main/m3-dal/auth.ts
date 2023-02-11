import { instance } from "./instance"

export const authAPI = {
  login(email: string, password: string) {
      return instance.post(`api/v1/auth/signing`, { email, password })
  },
    /*register(email: string, password: string, repeatPassword: string) {
        return instance.post(`/auth/register`, { email, password, repeatPassword })
    },
    logout(){
        return instance.delete('auth/me')
    },
    me() {
        return instance.post(`auth/me`)
    },
    edit(name: string, avatar: string) {
      return instance.put(`auth/me`, { name, avatar })
    },*/

}