<template>
  <div class="columns page-container">
    <Navigation class="nav is-bold"/>
    <div class="content content-wrapper">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  min-height: 100vh;
  width: 25%;
  background-color: rgb(61, 79, 93);
  text-align: right;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    justify-content: center!important;
    position: relative;
    min-height: 30vh;
    text-align: center;
    width: 100%;
  }
}

.is-bold {
  background-image: linear-gradient(141deg,#243b43,#3d4f5d 71%,#435571);
}

.page-container {
  margin: 0 0 0 0!important;
}

.content-wrapper {
  position: relative;
  left:25%;
  width:75%;
  background-color: rgb(229, 229, 217);
  @media screen and (max-width: 768px) {
    left: 0%;
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