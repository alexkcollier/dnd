<template>
  <div class="columns page-container">
    <Navigation/>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  margin: 0 0 0 0!important;
}

.content {
  position: relative;
  left:25%;
  width:75%;
  padding: 3em;
  @media screen and (max-width: 768px) {
    left: 0;
    width: 100%;    
  }
}
</style>


<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>