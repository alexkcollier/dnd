<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1>{{ post.fields.title }}</h1>
        <div v-html="$md.render(post.fields.body)"/>
      </div>
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
      return str
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
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
  }
}
</script>
