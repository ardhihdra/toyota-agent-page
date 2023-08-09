import Banner from '@/components/Banner'
import { getSanityBanners } from '@/data/api';

export default async function BannerCarousel() {
  const banners = await getSanityBanners()

  const imagesLeft = 4 - Math.min(4, banners.length)
  const localImages = [
    '/images/yaris.jpeg',
    '/images/zenix.jpeg',
    '/images/calya.jpeg'
  ]
  const restImage = Array(imagesLeft - 1).fill(0).map((i,idx) => localImages[idx])
  const images = [...banners, ...restImage]

  return (
    <>
      <Banner images={images}/>
    </>
  )
}
