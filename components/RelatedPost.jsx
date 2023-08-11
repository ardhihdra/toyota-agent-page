import Image from "next/image";

export const RelatedPost = ({ title, date }) => {

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

export const RelatedMainPosts = () => {
  return (
    <>
      {/* Related Post Section */}
      <div className="container mt-8 max-w-sm sm:max-w-lg">
        <h2 className="text-2xl font-bold mb-4 border-b pb-4 border-stone-500">Artikel Terkait</h2>
        <div className="flex flex-wrap -mx-4">
          <RelatedPost title="Harga Terbaik" date="16 Juli, 2023"/>
          <RelatedPost title="Konsultasi Nyaman" date="16 Juli, 2023"/>
          <RelatedPost title="Promo Menarik" date="16 Juli, 2023"/>
        </div>
      </div>
    </>
  )
}