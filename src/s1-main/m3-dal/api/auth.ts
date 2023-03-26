import {instance} from "../instance/instance"

export const authAPI = {
    login(email: string, password: string) {
        return instance.post(`auth/signin`, {email, password})
    },
    register(email: string, password: string) {
        return instance.post(`auth/signup`, {email, password})
    },
    me() {
        return instance.get(`auth/me`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    },
    /*
        edit(name: string, avatar: string) {
          return instance.put(`auth/me`, { name, avatar })
        },*/

}