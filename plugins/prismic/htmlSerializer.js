import PrismicDOM from 'prismic-dom'

const Elements = PrismicDOM.RichText.Elements

export default function htmlSerializer(type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return `<h1 class="title">${children.join()}</h1>`

    case Elements.heading2:
      return `<h2 class="title" id="${children.join()}">${children.join()}</h2>`

    case Elements.heading3:
      return `<h3 class="title">${children.join()}</h3>`

    // Don't wrap images in a <p> tag
    case Elements.image:
      return `<img src="${element.url}" alt="${element.alt}">`

    // TODO: parse tables from prismic
    // case Elements.preformatted:
    //   return PrismicDOM.RichText.asText(content)

    // Return null to stick with the default behavior
    default:
      return null
  }
}
