<template>
  <div class="columns page-container">
    <Navigation :is-fullwidth="$route.path === '/'"/>

    <div class="content content-wrapper">
      <nuxt/>
    </div>

    <TopButton/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import TopButton from '~/components/TopButton.vue'

export default {
  components: {
    Navigation,
    TopButton
  }
}
</script>
