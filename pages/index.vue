<template>
</template>

<script>
// import TopButton from '~/components/TopButton.vue'

export default {
  // components: {
  //   TopButton
  // }
  layout: 'home'
}
</script>

<style lang="scss" scoped>
table {
  width: auto;
  margin: auto;
  th, td {
    vertical-align: middle;
  }
}

.is-wide-table {
  @media screen and (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
}
</style>
