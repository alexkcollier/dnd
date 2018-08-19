import * as contentful from 'contentful'
import Vue from 'vue'

const space = process.env.CTF_SPACE_ID
const accessToken = process.env.CTF_CDA_KEY

function createClient(config = { space, accessToken }) {
  return contentful.createClient(config)
}

const Contentful = new Vue({
  methods: {
    createClient,
    ...createClient()
  }
})

export default function(ctx, inject) {
  inject('contentful', Contentful)
}
