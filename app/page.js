import Banner from '@/components/Banner'
import BoughtBy from '@/components/BoughtBy'
import CarList from '@/components/CarList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProfileSection from '@/components/ProfileSection'
import Image from 'next/image'
import BannerCarousel from '@/components/BannerCarousel'
import { AskWhatsapp } from '@/components/Floating'

export default function Home() {

  return (
    <>
      <Header />
      <BannerCarousel />
      <BoughtBy />
      <ProfileSection />
      <CarList />
      <Footer />
      <AskWhatsapp />
    </>
  )
}
