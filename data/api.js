import { cache } from 'react';
import sanityClient from './sanity';

export const revalidate = 3600

const defaultUrls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/car', changefreq: 'weekly', priority: 0.5 },
  { url: '/blog', changefreq: 'weekly', priority: 0.5 },
]

export async function getBoughtBy(limit=0) {
  return new Promise((resolve, reject) => {
    let query = '*[_type == "buyer"]'
    if (limit) query += `[0...${limit}]`
    query += '| order(_createdAt desc)'
    sanityClient.fetch(`
      ${query}
    `).then(res => {
      resolve(res || [])
    })
  })
}

export async function getSitemapUrls() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"]{
      title,
      publishedAt,
      slug
    }
  `)

  const urls = posts.map((ps) => ({
    url: `/car/${ps.slug?.current}`,
    priority: ps.sitemapPriority || 0.7
  }))
  // const blogUrls = blogposts
  //   .filter(({slug = {}}) => slug.current)
  //   .map(post => {
  //     return {
  //       url: `/blog/${post.slug.current}`,
  //       priority: 0.5
  //     }
  //   })

  return [...defaultUrls, ...urls]
}

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
        mainImage,
        price,
        transmission,
        "post": post->{slug}
      }
    `).then(res => {
      resolve(res)
    })
  })
})