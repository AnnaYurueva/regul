<template>
    <section>
        <form @submit.prevent="onSubmit">
            <h1>Авторизация</h1>
            <div>
                <v-text-field v-model="form.login" label="Логин" required></v-text-field>
            </div>
            <v-btn color="primary" type="submit">Войти</v-btn>
            <v-list-item variant="tonal" link active exact no-perfetch href="/">Товары и услуги</v-list-item>
        </form>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty',
})

const form = ref({
    login: '',
})
const router = useRouter()
const { authorization } = useLogin()

const onSubmit = function () {
    authorization(form.value.login)    
    router.push('/')
}
</script>

<style lang="scss" scoped>
form {
    max-width: 300px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}
</style>