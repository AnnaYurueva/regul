import { defineStore } from 'pinia'

export const useLogin = defineStore('login', {
    state: () => ({
        login: null as string | null,
    }),
    getters: {
        checkLogin: (state) => !!state.login,
    },
    actions: {
        logout() {
            this.login = null
        },
        authorization(data: string) {
            this.login = data
        }
    },
})
