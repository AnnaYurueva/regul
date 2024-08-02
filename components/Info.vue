<template>
    <div>
        <v-card v-if="mdAndUp" class="mx-auto" width="auto" variant="text">
            <v-img class="align-end text-white mx-auto mb-6 pa-0 rounded-lg" height="120" width="120" :src="company.logo"
                cover />

            <v-card-title class="text-center mb-3 pa-0 text-h5">{{ company.name }}</v-card-title>

            <v-card-subtitle class="opacity-100 mx-auto mb-6">
                <div class="d-flex ga-1 justify-center">
                    <div v-if="company.check_doc">
                        <v-icon color="primary" icon="mdi-check-decagram" size="x-small" />
                        <span>
                            Документы проверены
                        </span>
                    </div>
                    <span>•</span>
                    <div>
                        <v-icon color="primary" icon="mdi-star" size="x-small" />
                        <span>
                            {{ company.rating }}
                        </span>
                    </div>
                    <span>•</span>
                    <div>
                        <span>
                            {{ company.revievs }}
                            {{ declination(company.revievs, 'отзыв', 'отзыва', 'отзывов') }}
                        </span>
                    </div>
                </div>
            </v-card-subtitle>

            <v-card-actions class="pa-0 mb-8">
                <v-btn class="px-5 mx-auto" rounded="lg" size="x-large" color="primary" variant="flat">
                    <span class="text-body-1 text-none">
                        Показать номер телефона
                    </span>
                </v-btn>
            </v-card-actions>
        </v-card>
        <div class="d-flex justify-md-center ga-2 my-2 mb-md-8 mt-md-0 -mx-4 overflow-x-auto px-4">
            <v-list-item class="navigation" active-class="selected-nav" exact no-perfetch to="/">Товары и услуги</v-list-item>
            <v-list-item class="navigation" active-class="selected-nav" exact no-perfetch to="/agents">Агенты <span>{{ company.agents }}</span></v-list-item>
            <v-list-item class="navigation" active-class="selected-nav" exact no-perfetch to="/about">О компании</v-list-item>
        </div>

        <v-divider></v-divider>
    </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import logo from '/public/images/Img.png'

const { declination } = useHelpers();
const { mdAndUp } = useDisplay()

const company = {
    name: 'Наследие',
    logo: logo,
    rating: '4.7',
    revievs: 19,
    check_doc: true,
    agents: 5,
}
</script>

<style lang="scss">
.navigation {
    background: #e8e8e8;
    padding: 8px 12px;
    border-radius: 12px !important;
    transition: all .3s linear;
    color: #0F0F0F !important;
}

.v-list-item--active.selected-nav {
    background: #ffffff !important;
    border: 1px solid #0F0F0F;
}
</style>