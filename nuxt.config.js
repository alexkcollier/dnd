require('dotenv').config()
const ctfConfig = require('./contentful.config')
const contentful = require('contentful')

const cdaClient = contentful.createClient({
  space: ctfConfig.CTF_SPACE_ID,
  accessToken: ctfConfig.CTF_CDA_KEY
})

module.exports = {
  head: {
    titleTemplate: '%s | Olarann',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'D&D custom rules' },
      { name: 'theme-color', content: '#3d4f5d' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#3B8070' },

  css: ['@assets/scss/main.scss'],

  modules: ['@nuxtjs/markdownit'],

  markdownit: {
    injected: true
  },

  plugins: ['~/plugins/contentful'],

  env: { ...ctfConfig },

  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    generate: {
      routes() {
        return cdaClient
          .getEntries({
            content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
          })
          .then(([entries, postType]) => {
            return [
              ...entries.items.map(entry => `/blog/${entry.fields.slug}`),
              ...postType.fields
                .find(field => field.id === 'tags')
                .items.validations[0].in.map(tag => `/tags/${tag}`)
            ]
          })
      }
    },

    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    }
  }
}
