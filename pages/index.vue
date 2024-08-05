<template>
   <div class="filter-container">
      <v-select label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      variant="solo-filled"></v-select>
   </div>
   <div class="cards-container mx-2 mx-md-8">
      <GoodsServicesCard v-for="item of data" :key="item.id" :price="item.price" :title="item.title" :photo="item.photo"
         :views="item.views" :days="item.days" :status="item.status" />
   </div>
</template>

<script setup>
const data = [
   {
      id: 1,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'hidden',
   },
   {
      id: 2,
      price: 4800000,
      title: '2-к. квартира, 46 м², 1/5 эт.',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'published',
   },
   {
      id: 3,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'promoution',
   },
   {
      id: 4,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'hidden',
   },
   {
      id: 5,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'published',
   },
   {
      id: 6,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'promoution',
   },
   {
      id: 7,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'hidden',
   },
   {
      id: 8,
      price: 450500,
      title: 'Сlavia Nord Grand сценическое цифровое пианино',
      photo: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
      views: '123',
      days: '12',
      status: 'published',
   },
]
</script>

<style lang="scss">
.cards-container {
   display: grid;

   @media (min-width: 961px) {
      grid-template-columns: repeat(4, 1fr);
   }

   @media (max-width: 960px) {
      grid-template-columns: repeat(1, 1fr);
   }
}

.filter-container {
   max-width: 440px;
   margin: 24px auto;
}
</style>
