export default defineNuxtRouteMiddleware((to, from) => {
    const { checkLogin } = useLogin()

    if (!checkLogin) {
        return navigateTo('/login');
    }
})