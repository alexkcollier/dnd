import contentful from 'contentful'
import { ctfConfig } from './contentful.config'

const cdaClient = contentful.createClient({
  space: ctfConfig.CTF_SPACE_ID,
  accessToken: ctfConfig.CTF_CDA_KEY
})

export default {
  head: {
    titleTemplate: chunk => (chunk ? `${chunk} | D&D` : 'D&D'),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'D&D custom rules' },
      { name: 'theme-color', content: '#3d4f5d' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: 'rgb(194, 174, 109)', height: '0.25em' },

  css: [{ src: '@assets/scss/main.scss', lang: 'scss' }],

  modules: ['@nuxtjs/markdownit'],

  markdownit: {
    injected: true,
    use: ['markdown-it-attrs', 'markdown-it-sup']
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

    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    }
  },

  generate: {
    routes: () =>
      cdaClient.getEntries({ content_type: 'post' }).then(({ items }) => {
        return items.map(entry => ({ route: `/${entry.fields.slug}` }))
      })
  }
}
