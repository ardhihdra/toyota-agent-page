import Header from "@/components/Header"
import MainArticle from "@/components/MainArticle"
import SanityPost from "@/components/SanityPost"
import { getSanityPostsData } from "@/data/api"
import { getDetailPost } from "@/data/data"
import { urlForSanityImage } from "@/data/sanity"

export async function generateMetadata(
  { params, searchParams },
  parent
) {
  // read route params
  const slug = params.slug
 
  // fetch data
  let post = await getDetailPost(slug)
 
  if (!post) {
    post = await getSanityPostsData(slug)
  }
  // optionally access and extend (rather than replace) parent metadata
  let images = ['https://toyota-agent-page.vercel.app/toyota.png']
  if (post.mainImage) {
    images = [urlForSanityImage(post.mainImage).width(600).height(320).url(), images[0]]
  }
  
  return {
    title: post.title,
    description: post.description || 'Promo mobil murah Toyota Garut.',
    metadataBase: new URL('https://toyota-agent-page.vercel.app'),
    // alternates: {
    //   canonical: '/',
    //   languages: {
    //     'en-US': '/en-US',
    //     'de-DE': '/de-DE',
    //   },
    // },
    openGraph: {
      images: images,
    },
  }
}

export default async function CarDetail(props) {
  const post = await getDetailPost(props.params.slug)

  return (
    <>
      <Header />
      {
        post ?
        <MainArticle post={post} />
        :
        <SanityPost slug={props.params.slug} />
      }
    </>
  )
}