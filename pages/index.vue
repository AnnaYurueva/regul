<template>
   <main>
      <div class="filter-container">
         <v-select v-model="select" :items="items" item-title="category" item-value="category" label="Select"
            return-object single-line variant="solo-filled">
            <template v-slot:item="{ props, item }">
               <v-list-item v-bind="props" :subtitle="item.raw.count"></v-list-item>
            </template>
         </v-select>
      </div>
      <div class="cards-container mx-2 mx-md-8">
         <GoodsServicesCard v-for="item of data" :key="item.id" :price="item.price" :title="item.title" :photo="item.photo"
            :views="item.views" :days="item.days" :status="item.status" />
      </div>
   </main>
</template>

<script setup>
const select = ref({ category: 'Все товары и услуги', count: null })
const items = [
   { category: 'Все товары и услуги', count: null },
   { category: 'Гробы', count: 5 },
   { category: 'Урны', count: 12 },
   { category: 'Тапки', count: 2 },
   { category: 'Покрывало', count: 1 },
]

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

.v-list {
   padding: 12px 8px !important;
   background: #f5f5f5;

   .v-list-item--active {
      .v-list-item__overlay {
         background: none !important;
         background-color: transparent !important;
      }

      .v-list-item__content {
         position: relative;

         &:after {
            content: "";
            display: block;
            background: url('/public/icons/check.svg');
            width: 24px;
            height: 24px;
            color: #337566;
            position: absolute;
            right: 0;
         }
      }
   }

   @media (max-width:960px) {
      .v-list-item {
         border-bottom: 1px solid #e8e8e8;
      }
   }
}

.v-list-item__content {
   display: flex;
   align-items: center;
   gap: 8px;
}
</style>
