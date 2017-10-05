<template>
  <nav class="column is-3">
    <div class="has-text-right">
      <h1 class="title is-1">D&amp;D</h1>
      <nuxt-link class="button is-info is-medium" to="#Races">Races</nuxt-link>
      <nuxt-link class="button is-info is-medium" to="#Classes">Classes</nuxt-link>
      <nuxt-link class="button is-info is-medium" to="#Religion">Religion</nuxt-link>
      <nuxt-link class="button is-info is-medium" to="#Time">Time</nuxt-link>
      <nuxt-link class="button is-info is-medium" to="#AdditionalRules">Additional Rules</nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 100vh;
  background-color: silver;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
}
</style>
