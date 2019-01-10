<template>
  <transition name="fade">
    <button
      v-show="scrolled"
      class="button top-button"
      @click="scrollToTop"
    >
      Top
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },

  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
    }

    this.handleScroll()
  },

  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
$fade-time: 250ms;

.top-button {
  $distance: 5%;
  bottom: $distance;
  box-shadow: 0px 5px 20px rgba($color: #000000, $alpha: 0.2);
  font-family: 'freight-sans-pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  opacity: 0.6;
  position: fixed;
  right: $distance;
  transition: all $fade-time;
  z-index: 10;

  &:hover {
    opacity: 1;
  }
}

.fade {
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
