<template>
  <nav :class="{'navigation': this.$route.path !== '/' }">
    <nuxt-link to="/">
      <h1 class="title">D&amp;D</h1>
    </nuxt-link>

    <div class="navigation-links">
      <nuxt-link 
        v-for="link in links" 
        :to="`/${link}`" 
        :key="link" 
        class="button is-navbtn is-size-5 is-capitalized">
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

  data() {
    return {
      links: ['races', 'classes', 'religion', 'time', 'additional-rules']
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
