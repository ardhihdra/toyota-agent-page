import Header from "@/components/Header"
import MainArticle from "@/components/MainArticle"
import SanityPost from "@/components/SanityPost"
import { getDetailPost } from "@/data/data"

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