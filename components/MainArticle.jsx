import Image from "next/image";
import DateDisplay from "./DateDisplay";
import { RelatedMainPosts, RelatedPost } from "./RelatedPost";

export function ShareArticle(link) {
  function copyLink() {

  }

  return (<>
    <div className="flex justify-end py-2 my-4 border-y border-stone-500">
      <p className="mr-4">Share:</p>
      <a
        href="http://facebook.com/share.php?u=https://lalala.com/?p=2034&t=Tidak%20sengaja%20menginjak%20pedal%20gas"
        className="bg-blue-500 text-white rounded mr-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/fb.png" alt="Facebook" className="w-8 h-8 p-1" width={30} height={30}/>
      </a>
      <button className="bg-gray-300 px-2 py-1 rounded">Salin Url</button>
    </div>
  </>)
}

export default function MainArticle({ post }) {
  return (<>
    <div className="container my-16 p-8 md:p-24 lg:w-[820px] mx-auto">
      <div className="mb-14 text-xl font-bold text-blue-400">Promo Toyota Garut</div>
      <div className="text-5xl font-bold">{post?.title}</div>
        {/* Share Buttons */}
      <ShareArticle url={`/blog/${post.slug}`}/>
      {
        post?.image && <Image src={post?.image} alt="main"/>
      }
      <div>
        <DateDisplay>{post?.publishedAt}</DateDisplay>
      </div>
      <br />
      <div className="article prose max-w-full" dangerouslySetInnerHTML={{__html: post?.contentHtml || ''}}></div>

      {/* Related Post Section */}
      <RelatedMainPosts />
    </div>
  </>)
}