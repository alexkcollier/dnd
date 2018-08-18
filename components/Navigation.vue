<template>
  <nav :class="{'navigation': this.$route.path !== '/' }">
    <nuxt-link to="/">
      <h1 class="title">D&amp;D</h1>
    </nuxt-link>

    <div class="navigation-links">
      <nuxt-link 
        v-for="{name, path} in links" 
        :to="path" 
        :key="name" 
        class="button is-navbtn is-size-5 has-text-capitalized">
        {{ name | formatLink }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
const capitalize = word => word[0].toUpperCase() + word.slice(1)

export default {
  filters: {
    // eslint-disable-next-line
    formatLink: str => str.split('-').map(capitalize).join(' ')
  },

  computed: {
    links() {
      return this.$router.options.routes.filter(r => r.path !== '/')
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
  align-items: flex-end;
  background-color: rgb(61, 79, 93);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  position: fixed;
  text-align: right;
  width: 25%;

  @media screen and (max-width: 768px) {
    align-items: center;
    min-height: 30vh;
    position: relative;
    text-align: center;
    width: 100%;
  }
}

.is-navbtn {
  margin: 0.25em;
}

.is-bold {
  background-image: linear-gradient(141deg, #243b43, #3d4f5d 71%, #435571);
}
</style>
