<template>
    <!-- на смогла использовать компонент футера из билиотеки падала ошибка: Component VFooter is missing template or render function. -->
    <footer class="bg-footer">
        <div class="d-flex pt-6 px-8 pb-10 ga-5 flex-column flex-md-row align-start">
            <span class="align-self-md-center font-weight-medium">© Annonce 2023</span>
            <v-btn class="text-none pa-0" color="footer-link" rounded="xl" variant="text">
                Документы
            </v-btn>
            <v-btn class="text-none pa-0" color="footer-link" rounded="xl" variant="text">
                О компании
            </v-btn>
            <v-btn v-if="smAndDown" class="text-none pa-0" color="footer-link" rounded="xl" variant="text">
                Продавцам
            </v-btn>
            <v-btn v-if="smAndDown" class="text-none pa-0" color="footer-link" rounded="xl" variant="text">
                Покупателям
            </v-btn>
            <v-btn v-if="smAndDown" class="text-none pa-0" color="footer-link" rounded="xl" variant="text">
                Разместить объявление
            </v-btn>
            <span v-if="smAndDown">
                <v-avatar size="16">
                    <v-img alt="Русский"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png" />
                </v-avatar>
                Русский
            </span>
        </div>
    </footer>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
</script>