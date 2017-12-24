<template>
  <nav>
    <div>
      <nuxt-link to="/"><h1 class="title">D&amp;D</h1></nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="/races">Races</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="/classes">Classes</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="/religion">Religion</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="/time">Time</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="/additional-rules">Additional Rules</nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.title {
  font-size: 4em;
  color: white;
  font-weight: 400;
}
</style>

