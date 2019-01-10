import VuexPersist from 'vuex-persist'

export default function({ store }) {
  return new VuexPersist({
    key: 'vuex',
    storage: window.sessionStorage
  }).plugin(store)
}
