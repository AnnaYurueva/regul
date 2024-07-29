<template>
    <v-toolbar class="bg-header px-8">

        <v-toolbar-title class="logo font-weight-medium">Annoncé</v-toolbar-title>
        <v-btn class="text-none" color="secondary" prepend-icon="mdi-dots-square" variant="flat" rounded="xl" size="large">
            Все категории
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn class="text-none" color="info" prepend-icon="mdi-map-marker" variant="text">Ростов-на-Дону</v-btn>

        <v-divider class="header-divider" thickness="1" vertical color="divider" />
        <v-btn class="text-none" color="primary" variant="text">Разместить объявление</v-btn>

        <v-menu open-on-hover>
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
                    <v-list-item-title>Войти</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

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