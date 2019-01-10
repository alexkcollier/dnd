<template>
  <nav
    :class="{'is-fullwidth': isFullwidth }"
    class="navigation"
  >
    <nuxt-link to="/">
      <h1 class="title">
        D&amp;D
      </h1>
    </nuxt-link>

    <div class="navigation-links">
      <nuxt-link 
        v-for="link in links" 
        :key="link" 
        :to="`/${link}`"
        class="button is-navbtn is-capitalized"
      >
        {{ link | splitDash }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  filters: {
    splitDash: str => str.replace('-', ' ')
  },

  props: {
    isFullwidth: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      links: ['races', 'classes', 'religion', 'time', 'moon-phases', 'additional-rules']
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 4em;
  color: white;
  font-weight: 400;
}

.navigation {
  align-items: center;
  background-color: rgb(61, 79, 93);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  position: fixed;
  transition: width 250ms ease-out;
  text-align: right;
  width: 25%;
  z-index: 10;

  &.is-fullwidth {
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    min-height: 30vh;
    position: relative;
    text-align: center;
    transition: none;
    width: 100%;

    &.is-fullwidth {
      height: 100vh;
    }
  }
}

.is-navbtn {
  display: block;
  margin: 0.5em;

  @media screen and (max-width: 768px) {
    display: inline-block;
    margin: 0.25em;
  }
}

.is-bold {
  background-image: linear-gradient(141deg, #243b43, #3d4f5d 71%, #435571);
}
</style>
