<template>
    <v-toolbar class="bg-header px-md-8" :density="smAndDown ? 'comfortable' : ''">
        <v-btn v-if="smAndDown" v-bind="props" prepend-icon="mdi-menu" variant="text" />

        <v-toolbar-title class="logo font-weight-medium w-100 ml-16 ml-md-0">Annoncé</v-toolbar-title>
        <v-btn v-if="mdAndUp" class="text-none" color="secondary" prepend-icon="mdi-dots-square" variant="flat" rounded="xl"
            size="large">
            Все категории
        </v-btn>

        <v-spacer v-if="mdAndUp" />
        <v-btn v-if="mdAndUp" class="text-none" color="info" prepend-icon="mdi-map-marker"
            variant="text">Ростов-на-Дону</v-btn>

        <v-divider v-if="mdAndUp" class="header-divider" thickness="1" vertical color="divider" />
        <v-btn v-if="mdAndUp" class="text-none" color="primary" variant="text">Разместить объявление</v-btn>

        <v-menu v-if="mdAndUp" open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="pr-1 pt-1 pb-1" color="secondary" prepend-icon="mdi-menu" variant="flat"
                    rounded="xl" size="x-large">
                    <v-avatar>
                        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                    </v-avatar>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-list-item-title>
                        <v-list-item v-if="!checkLogin" link href="/login">Войти</v-list-item>
                        <v-list-item v-else @click.prevent="exit" href="/">Выйти</v-list-item>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn v-if="smAndDown" class="text-none" stacked>
            <v-badge color="primary" content="1">
                <v-icon>mdi-basket-outline</v-icon>
            </v-badge>
        </v-btn>

    </v-toolbar>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { logout, checkLogin } = useLogin()
const { smAndDown, mdAndUp } = useDisplay()

const exit = () => {
    logout()
}
</script>

<style lang="scss">
.v-toolbar-title.logo {
    font-family: 'Noto';
    font-weight: 600;
    font-size: 1.75rem;
    max-width: 156px;
}

.header-divider {
    opacity: 100 !important;
    height: 50% !important;
    align-self: center !important;
}
</style>