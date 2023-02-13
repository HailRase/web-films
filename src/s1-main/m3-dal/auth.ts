import {instance} from "./instance"

export const authAPI = {
    login(email: string, password: string) {
        return instance.post(`auth/signin`, {email, password})
    },
    register(email: string, password: string) {
        return instance.post(`auth/signup`, { email, password })
    },
    me() {
        return instance.post(`auth/me`)
    },
    /*
    logout(){
        return instance.delete('auth/me')
    },

    edit(name: string, avatar: string) {
      return instance.put(`auth/me`, { name, avatar })
    },*/

}