import DateDisplay from "@/components/DateDisplay";
import Header from "@/components/Header";
import MainArticle from "@/components/MainArticle";
import { getDetailPost } from "@/data/data";
import Image from "next/image";

export default async function Page(props) {
  const post = await getDetailPost('harga-terbaik')

  return (
    <>
      <Header />
      <MainArticle post={post} />
    </>
  );
}