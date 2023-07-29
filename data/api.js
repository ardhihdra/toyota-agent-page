import sanityClient from './sanity';

export async function getSanityPostsData(slug) {
  return new Promise((resolve, reject) => {
    sanityClient.fetch(`
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        mainImage,
        publishedAt,
        body,
        slug,
        cars[]->,
        categories[]->
      }
    `, { slug: slug }).then(res => {
      resolve(res)
    })
  })
}

export async function getSanityCarsData(name) {
  return new Promise((resolve, reject) => {
    sanityClient.fetch(`
      *[_type == "car"]
    `).then(res => {
      resolve(res)
    })
  })
}