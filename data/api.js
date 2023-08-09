import { cache } from 'react';
import sanityClient from './sanity';

export const revalidate = 3600

export const getSanityBanners = cache(async function() {
  return new Promise((resolve, reject) => {
    sanityClient.fetch(`
      *[_type == "banner"][0]
    `).then(res => {
      resolve(res?.images || [])
    })
  })
})

export const getSanityPostsData = cache(async function(slug) {
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
})

export const getSanityCarsData = cache(async function(name) {
  return new Promise((resolve, reject) => {
    sanityClient.fetch(`
      *[_type == "car"]{
        name,
        image,
        startingPrice,
        transmission,
        "post": post->{slug}
      }
    `).then(res => {
      resolve(res)
    })
  })
})