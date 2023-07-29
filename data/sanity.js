import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-15",
})

const imageBuilder = imageUrlBuilder(sanityClient)

export function urlForSanityImage (source) {
  return imageBuilder.image(source)
}

export default sanityClient