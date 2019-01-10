<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1>{{ post.fields.title }}</h1>
        <div v-html="$md.render(post.fields.body)" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SlugPage',

  head() {
    return {
      title: this.prettyTitle(this.$route.params.slug)
    }
  },

  computed: {
    post() {
      return this.$store.state.contentful.content[this.$route.params.slug]
    }
  },

  methods: {
    prettyTitle(str) {
      const parts = str.split('-').map(word => word[0].toUpperCase() + word.slice(1))
      return parts.join(' ')
    }
  },

  async fetch({ app, error, params, payload, store }) {
    try {
      if (store.getters['contentful/shouldFetch']) {
        const entries = payload || (await app.$contentful.getEntries({ content_type: 'post' }))
        store.commit('contentful/SET_CONTENT', { entries })
      }

      if (!store.getters['contentful/contentExists'](params.slug)) throw new Error()
    } catch ({ message, statusCode }) {
      return error({
        statusCode: statusCode || 404,
        message: message || 'This page could not be found'
      })
    }
  }
}
</script>
