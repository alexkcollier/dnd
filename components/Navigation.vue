<template>
  <nav>
    <div>
      <h1 class="title">D&amp;D</h1>
      <nuxt-link class="button is-navbtn is-size-5" to="#Races">Races</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="#Classes">Classes</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="#Religion">Religion</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="#Time">Time</nuxt-link>
      <nuxt-link class="button is-navbtn is-size-5" to="#AdditionalRules">Additional Rules</nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
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

.title {
  font-size: 4em;
  color: white;
  font-weight: 400;
}
</style>

