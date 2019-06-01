export const state = () => ({
  content: {}
})

export const mutations = {
  SET_CONTENT(state, { entries }) {
    const categories = entries.items.map(entry => entry.fields.slug)

    state.content = categories.reduce(
      (content, category) => ({
        ...content,
        [category]: entries.items.find(entry => entry.fields.slug === category)
      }),
      {}
    )
  }
}

export const getters = {
  shouldFetch: state => !Object.keys(state.content).length,
  contentExists: state => content => Object.keys(state.content).includes(content)
}
