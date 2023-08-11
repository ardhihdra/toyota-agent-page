import Image from "next/image";
import Link from "next/link";


export function BaseSceneItem({
  src,
  className,
  name,
  children
}) {
  return (
    <div
      className={`
        rounded-xl bg-cover bg-no-repeat text-white relative
        shadow-lg hover:scale-105 duration-500 bg-center ${className}
      `}
      style={{ backgroundImage: src}}
    >
      <div className="absolute inset-0 bg-stone-900/40 rounded-xl"></div>
      <div className="absolute inset-0 p-4 w-full h-full text-white text-center">
        {children}
      </div>
    </div>
  )
}

function SceneItem({
  name,
  desc,
  src,
  className,
  demoUrl,
  editorUrl
}) {
  return (
    <BaseSceneItem
      name={name}
      src={src}
      className={className}
    >
      <div className="relative min-h-full flex flex-col-reverse">
        <Link href={demoUrl || ''} className="mt-2 mb-4 p-2 text-white cursor-pointer border rounded hover:font-bold">Pelajari</Link>
        <div className="text-2xl font-bold">{name}</div>
        <button className="gradient-button w-full text-white">
          {desc}
        </button>
      </div>
    </BaseSceneItem>
  )
}


const ProfileSection = () => {
  return (
    <div id="why-us" className="bg-stone-200 text-stone-800">
      {/* <div className="" style={{ background: 'black, url("/images/cars.avif")', backgroundBlendMode: 'screen'}}> */}
      <h2 className="mt-8 pt-16 text-3xl sm:text-4xl w-full mx-auto text-center font-bold">
        Kenapa harus dengan kami?
      </h2>
      <div className="container mx-auto py-8 sm:p-20 gap-10 items-center flex flex-col justify-center">
        <div className="w-full flex flex-col flex-wrap gap-10 sm:flex-row">
          <SceneItem
            name="Harga Terbaik"
            src="url('/images/cars.avif')"
            className="sm:flex-1 h-96 mx-4 sm:mx-0"
            demoUrl="/blog/harga-terbaik"
          />
          <SceneItem
            name="Konsultasi Nyaman"
            src="url('/images/rush.jpeg')"
            className="sm:flex-1 h-96 mx-4 sm:mx-0"
            demoUrl="/blog/konsultasi-nyaman"
          />
        </div>
        {/* Sales Benefits and Contact List */}
        <div className="w-full flex md:w-2/4 md:pl-8 mt-4 md:mt-0">
          {/* List of Benefits */}
          <SceneItem
            name="Promo Menarik"
            src="url('/images/zenix3.jpeg')"
            className="w-full md:w-[620px] h-96 mx-4 sm:mx-0"
            demoUrl="/blog/promo-menarik"
          />
          {/* <div className="mb-4">
            <ul className="list-disc list-inside">
              <li>HARGA TERBAIK</li>
              <li>KONSULTASI NYAMAN</li>
              <li>PRAKTIS TANPA PERLU DATANG KE DEALER</li>
              <li>PROMO MENARIK</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;