import Banner from '@/components/Banner'
import BoughtBy from '@/components/BoughtBy'
import CarList from '@/components/CarList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProfileSection from '@/components/ProfileSection'
import Image from 'next/image'
import BannerCarousel from '@/components/BannerCarousel'

export default function Home() {

  return (
    <>
      <Header />
      <BannerCarousel />
      <BoughtBy />
      <ProfileSection />
      <CarList />
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=6281324740047"
        className="animate-bounce fixed right-10 bottom-10 cursor-pointer text-center drop-shadow-xl"
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src="/whatsapp.png"
          width={80}
          height={80}
          alt="contact"
        >
        </Image>
        <p className="font-sans text-stone-100">Tanya Kami</p>
      </a>
    </>
  )
}
