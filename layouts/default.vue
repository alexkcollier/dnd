<template>
  <div class="columns page-container">
    
    <Navigation/>

    <div class="content content-wrapper">
      <nuxt/>
    </div>

  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
