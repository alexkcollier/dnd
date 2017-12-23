<template>
  <nav class="section">
    <div>
      <h1 class="title is-1">D&amp;D</h1>
      <nuxt-link class="button is-info" to="#Races">Races</nuxt-link>
      <nuxt-link class="button is-info" to="#Classes">Classes</nuxt-link>
      <nuxt-link class="button is-info" to="#Religion">Religion</nuxt-link>
      <nuxt-link class="button is-info" to="#Time">Time</nuxt-link>
      <nuxt-link class="button is-info" to="#AdditionalRules">Additional Rules</nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  min-height: 100vh;
  width: 25%;
  background-color: silver;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  text-align: right;
  @media screen and (max-width: 768px){
    position: relative;
    justify-content: center!important;
    min-height: 30vh;
    text-align: center;
    width: 100%;
  }
}
</style>

