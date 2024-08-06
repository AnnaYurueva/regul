<template>
    <div class="cards-container">
        <AgentsCard v-for="agent of data" :key="agent.id" :name="agent.name" :desc="agent.desc" :check_doc="agent.check_doc"
            :rating="agent.rating" :photo="agent.photo" :revievs="agent.revievs" :id="agent.id" />
    </div>
</template>

<script setup>
const data = [
    {
        id: 1,
        name: 'Дмитрий Хитрый',
        revievs: '19',
        rating: '4.3',
        check_doc: true,
        desc: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
        photo: 'https://cdn.vuetifyjs.com/images/john.jpg',
    },
    {
        id: 2,
        name: 'Апполинарий Землеперекопский',
        revievs: 0,
        rating: '4.3',
        check_doc: false,
        desc: 'Помог справиться с потерей и организовать похороны для 126 семей.',
        photo: 'https://cdn.vuetifyjs.com/images/john.jpg',
    },
    {
        id: 3,
        name: 'Василиса Землеперекопская',
        revievs: 0,
        rating: '4.3',
        check_doc: true,
        desc: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
        photo: 'https://cdn.vuetifyjs.com/images/john.jpg',
    },
]
</script>

<style lang="scss" scoped>
.cards-container {
    max-width: 560px;
    width: 100%;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>