import Image from "next/image";
import DateDisplay from "./DateDisplay";

const RelatedPost = ({ title, date }) => {

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="hover:border hover:border-stone-400 h-full">
        <Image src="/images/calya.jpeg" alt="related" height={200} width={200}></Image>
        <div className="p-2">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-sm text-gray-600 mb-1">{date}</p>
        </div>
        {/* Add any other related post information here */}
      </div>
    </div>
  );
};

export default function MainArticle({ post }) {
  return (<>
    <div className="container my-16 p-8 md:p-24 lg:w-[820px] mx-auto">
      <div className="mb-14 text-xl font-bold text-blue-400">Promo Toyota Garut</div>
      <div className="text-5xl font-bold">{post?.title}</div>
        {/* Share Buttons */}
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
      {
        post?.image && <Image src={post?.image} alt="main"/>
      }
      <div>
        <DateDisplay>{post?.publishedAt}</DateDisplay>
      </div>
      <br />
      <div className="article prose max-w-full" dangerouslySetInnerHTML={{__html: post?.contentHtml || ''}}></div>

      {/* Related Post Section */}
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-4 border-stone-500">Related Posts</h2>
        <div className="flex flex-wrap -mx-4">
          <RelatedPost title="Harga Terbaik" date="16 Juli, 2023"/>
          <RelatedPost title="Konsultasi Nyaman" date="16 Juli, 2023"/>
          <RelatedPost title="Promo Menarik" date="16 Juli, 2023"/>
        </div>
      </div>
    </div>
  </>)
}