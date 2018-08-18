import Vue from 'vue'
import htmlSerializer from '~/plugins/prismic/htmlSerializer'
import linkResolver from '~/plugins/prismic/linkResolver'
import PrismicJS from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

const PRISMIC_ENDPOINT = 'https://olarann.cdn.prismic.io/api/v2'

const Prismic = new Vue({
  computed: {
    predicates() {
      return PrismicJS.Predicates
    },

    prismicDOM() {
      return PrismicDOM
    }
  },

  methods: {
    asHtml(richText) {
      if (richText) {
        return this.prismicDOM.RichText.asHtml(
          richText,
          linkResolver,
          htmlSerializer
        )
      }
    },

    asText(richText) {
      if (richText) return this.prismicDOM.RichText.asText(richText)
    },

    asLink(link) {
      if (link) return this.prismicDOM.Link.url(link, linkResolver)
    },

    asDate(date, format) {
      if (date) return this.prismicDOM.Date(date)
    },

    initApi(req) {
      return PrismicJS.getApi(PRISMIC_ENDPOINT, { req })
    }
  }
})

export default function PrismicVue(ctx, inject) {
  inject('prismic', Prismic)
}
