<template>
  <section class="section">
    <top-button/>
    <div class="columns">
      <div class="column" v-html="$prismic.asHtml(data.content)"/>
      <!-- <div class="column" v-html="$prismic.asHtml(data.table)"/> -->
    </div>
  </section>
</template>

<script>
import TopButton from '~/components/TopButton.vue'

export default {
  name: 'SlugPage',

  components: {
    TopButton
  },

  head() {
    return {
      title: this.prettyTitle(this.$route.params.slug)
    }
  },

  methods: {
    prettyTitle(str) {
      return str.split('-').map(word => word[0].toUpperCase() + word.slice(1))
    }
  },

  async asyncData({ app, params, route }) {
    const api = await app.$prismic.initApi()
    const { data } = await api.getByUID('post', params.slug)

    return { data }
  }
}
</script>
