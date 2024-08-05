<template>
    <v-card elevation="0" class="goods-services-card pa-2">
        <v-img class="rounded-xl mb-4" aspect-ratio="4/3" height="322" :src="photo" cover />
        <template v-slot:prepend>
            <v-chip prepend-icon="mdi-eye" variant="elevated" label>
                {{ views }}
            </v-chip>
            <v-chip prepend-icon="mdi-calendar-blank" variant="elevated" label>
                {{ days }}
                {{ declination(days, 'день', 'дня', 'дней') }}
            </v-chip>
        </template>

        <template v-slot:append class="w-100">
            <v-btn class="text-none" color="secondary" text="Действия" variant="flat" rounded="lg" />
        </template>

        <v-card-title class="mb-3 mx-1 pa-0">{{ sliceThousand(price) }} ₽</v-card-title>
        <v-card-text class="pa-0 mx-1 mb-2">{{ title }}</v-card-text>
        <v-divider></v-divider>

        <v-card-actions v-if="status === 'published'" class="px-1 justify-space-between">
            <v-card-subtitle class="pa-0 published">Увеличьте количество просмотров</v-card-subtitle>
            <v-btn variant="flat" color="primary" class="text-none" rounded="lg">Продвигать</v-btn>
        </v-card-actions>
        <v-card-actions v-if="status === 'promoution'" class="px-1 justify-center">
            <p class="w-100 text-center promoution">Объявление продвигается</p>
        </v-card-actions>
        <v-card-actions v-if="status === 'hidden'" class="px-1 justify-center">
            <p class="w-100 text-center hidden">Объявление скрыто</p>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
interface IProps {
    id: number
    price: string
    title: string
    photo: string
    views: string | number
    days: string | number
    status: 'hidden' | 'published' | 'promoution'
}

const props = defineProps<IProps>()
const { declination, sliceThousand } = useHelpers();

</script>


<style lang="scss">
.goods-services-card {
    .v-card-item {
        position: absolute;
        z-index: 1;
        left:0;
        right: 0;
        top: 0;
        padding: 16px;
        width: 100%;
        display: flex !important;
        justify-content: space-between;

        .v-card-item__prepend {
            display: flex;
            gap: 4px;

            .v-chip--label {
                border-radius: 12px;
                background-color: rgba(27, 29, 34, 0.6) !important;
            }
        }

        .v-card-title {
            font-size: 17px;
        }


    }

    .v-card-text {
        font-size: 15px !important;
    }

    .published {
        font-size: 13px;
    }

    .promoution,
    .hidden {
        font-size: 15px;
    }

    .promoution {
        color: #337566;
    }

    .hidden {
        color: #B00020;
    }
}
</style>