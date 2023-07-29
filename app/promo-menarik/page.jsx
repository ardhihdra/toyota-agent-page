import Header from "@/components/Header";
import MainArticle from "@/components/MainArticle";
import { getDetailPost } from "@/data/data";

export default async function Page(props) {
  const post = await getDetailPost('promo-menarik')

  return (
    <>
      <Header />
      <MainArticle post={post} />
    </>
  );
}