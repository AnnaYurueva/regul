<template>
    <div class="info-container">
        <div class="pa-4 pa-md-5">
            <h2 class="mb-2">
                О компании
            </h2>
            <p>
                Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем
                с профессиональной
                техникой.
            </p>
        </div>
        <div>
            <v-expansion-panels v-model="panel" readonly>
                <v-expansion-panel elevation="0" color="footer">
                    <v-expansion-panel-title>
                        <h2 class="mb-2">
                            Режим работы
                        </h2>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text color="footer">
                        Сегодня с 8:00 до 23:00
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        <div class="d-flex flex-column-reverse flex-md-row align-items-stretch rounded-xl overflow-hidden">
            <div class="pa-4 pa-md-5">
                <h2 class="mb-2">
                    Местоположение
                </h2>
                <p class="text-primary text-body-1">
                    Ростов на Дону, Воронежская ул., 42А корп. 1
                </p>
            </div>
            <div class="position-relative h-auto rounded-t-lg overflow-hidden img-container">
                <v-img class="h-100 w-100" cover src="/public/images/map.png" />
                <v-icon class="map-marker" color="primary" icon="mdi-map-marker" size="x-large" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const panel = ref([0])
const { smAndDown, mdAndUp } = useDisplay()
</script>

<style lang="scss">
.info-container {
    max-width: 560px;
    width: 100%;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        @media (min-width: 961px) {
            font-size: 24px;
        }

        @media (max-width: 960px) {
            font-size: 20px;
        }
    }

    p {
        @media (min-width: 961px) {
            font-size: 17px;
        }

        @media (max-width: 960px) {
            font-size: 15px;
        }
    }

    .img-container,
    .v-responsive,
    .v-responsive__sizer {
        @media (min-width: 961px) {
            width: 200px !important;
        }

        @media (max-width: 960px) {
            width: 100%;
            max-height: 96px;
        }
    }

    .v-expansion-panels {
        opacity: 30%;
        border-radius: 16px;
        overflow: hidden;
    }

    .v-expansion-panel-text__wrapper {
        background-color: #f5f5f5;
    }
}

.map-marker.v-icon--size-x-large {
    font-size: 48px;
    position: absolute;
    top: calc(50% - 24px);
    right: calc(50% - 24px);
}
</style>