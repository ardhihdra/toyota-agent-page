import Header from "@/components/Header"
import MainArticle from "@/components/MainArticle"
import { getDetailPost } from "@/data/data"

export default async function CarDetail(props) {
  const post = await getDetailPost(props.params.slug)

  return (
    <>
      <Header />
      <MainArticle post={post} />
    </>
  )
}