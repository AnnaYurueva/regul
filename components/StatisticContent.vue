<template>
    <v-card-subtitle class="opacity-100">
        <div class="d-flex ga-1">
            <div v-if="check_doc">
                <v-icon color="primary" icon="mdi-check-decagram" size="x-small" />
                <span>
                    {{ smAndDown ? 'Проверен' : 'Документы проверены ' }}
                </span>
            </div>
            <span v-if="check_doc">•</span>
            <div v-if="rating">
                <v-icon color="primary" icon="mdi-star" size="x-small" />
                <span>
                    {{ rating }}
                </span>
            </div>
            <span v-if="rating">•</span>
            <div v-if="revievs && revievs !== 0">
                <span>
                    {{ revievs }}
                    {{ declination(revievs, 'отзыв', 'отзыва', 'отзывов') }}
                </span>
            </div>
            <div v-if="!revievs || revievs === 0">
                <span>Нет отзывов</span>
            </div>
        </div>
    </v-card-subtitle>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

interface IProps {
    revievs?: number
    rating?: number
    check_doc?: boolean
}

const props = defineProps<IProps>()

const { declination } = useHelpers();
const { smAndDown } = useDisplay()

</script>