<template>
  <transition name="fade">
    <div v-show="scrolled">
      <div id="topBtn" class="button top-button" @click="topFunction">Top</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
    topFunction() {
      document.body.scrollTop = 0 // Chrome, Safari, Opera
      document.documentElement.scrollTop = 0 // IE, Firefox
    }
  }
}
</script>


<style lang='scss' scoped>
.fade {
  &-enter-active,
  &-leave-active {
    transition: 250ms ease-in-out;
  }
  &-enter, &-leave-to /* &-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}

.top-button {
  display: block;
  position: fixed;
  bottom: 2%;
  right: 2%;
  z-index: 1000;
  opacity: 0.6;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);
  font-family: 'freight-sans-pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial,
    sans-serif;
  text-transform: uppercase;
  &:hover,
  &:active {
    opacity: 1;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
    transition: 100ms ease-in-out;
  }
}
</style>
