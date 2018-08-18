<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Navigation/>
        <nuxt/>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  layout: 'home',

  components: {
    Navigation
  }
}
</script>
