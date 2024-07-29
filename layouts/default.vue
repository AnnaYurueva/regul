<template>
  <main>
  <Header />
  <div class="content">
    <slot></slot>

  </div>
  <Footer />
  </main>

</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

content {
  margin: 0 auto;
  max-width: 80ch;
}
</style>

