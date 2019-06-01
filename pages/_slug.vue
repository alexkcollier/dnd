<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1>{{ post.fields.title }}</h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
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

  async asyncData({ app, error, params }) {
    const entryConfig = {
      content_type: 'post',
      'fields.slug': params.slug
    }

    // Use default client
    const entries = await app.$contentful.getEntries(entryConfig)

    if (await !entries.items.length) {
      return error({ statusCode: 404, message: 'This page could not be found' })
    }

    return { post: entries.items[0] }
  },

  methods: {
    prettyTitle(str) {
      return str
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    }
  }
}
</script>
