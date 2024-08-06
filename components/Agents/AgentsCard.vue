<template>
    <v-card elevation="0" color="footer" class="agent-card">
        <v-avatar v-if="mdAndUp" size="140">
            <v-img :alt="name" :src="photo"></v-img>
        </v-avatar>
        <div class="d-flex h-100 flex-column justify-space-between align-items-center">
            <div class="d-flex ga-3">
                <v-avatar v-if="smAndDown" size="48">
                    <v-img :alt="name" :src="photo"></v-img>
                </v-avatar>
                <div class="d-flex h-100 flex-column">
                    <v-card-title class="text-h5 mb-1">{{ name }}</v-card-title>
                <statistic-content :revievs="revievs" :rating="rating" :check_doc="check_doc" class="mb-3" />
                </div>
            </div>

            <v-card-text class="align-self-end">{{ desc }}</v-card-text>
        </div>

    </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndDown, mdAndUp } = useDisplay()

interface IProps {
    id: number
    name: string
    revievs: number
    rating: number
    check_doc: boolean
    desc: string
    photo: string
}

const props = defineProps<IProps>()
</script>

<style lang="scss">
.agent-card.v-card {
    border-radius: 20px;
    padding: 20px;
    display: flex;
    gap: 20px;

    .v-avatar {
        @media (min-width: 961px) {
            border-radius: 20px;
        }

        @media (max-width: 960px) {
            border-radius: 9.6px;
        }
    }

    .v-card-subtitle,
    .v-card-title,
    .v-card-text {
        padding: 0;
        white-space: inherit;
    }

    .v-card-title {
        line-height: 28px;
    }

    .v-card-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        font-size: 15px;
        line-height: 24px;

        @media (min-width: 961px) {
            -webkit-line-clamp: 3;
        }

        @media (max-width: 960px) {
            -webkit-line-clamp: 4;
        }
    }
}
</style>