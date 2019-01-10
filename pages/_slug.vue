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

  methods: {
    prettyTitle(str) {
      return str
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    }
  },

  async asyncData({ app, error, params }) {
    try {
      const entries = await app.$contentful.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
      })

      if (!entries.total) throw new Error('This page could not be found')

      return { post: entries.items[0] }
    } catch ({ message, statusCode }) {
      return error({
        statusCode: statusCode || 404,
        message: message || 'This page could not be found'
      })
    }
  }
}
</script>
