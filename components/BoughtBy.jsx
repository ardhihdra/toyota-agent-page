import React from 'react';
// import Slider from 'react-slick';
import Image from "next/image";
import { ClientPhotosCarousel } from './Banner';
import { getBoughtBy } from '@/data/api';

function AgentProfile() {
  return (
    <div className="">
      <div className="flex flex-col justify-center m-4 text-center items-center md:items-start md:text-left">
        <h4 className="font-bold text-xl md:text-2xl text-blue-300">Taofik Faturochman S.T.</h4>
        <Image className="m-4 rounded-md" src="/images/opik.jpg" width="120" height="120" alt="Agen dealer Toyota Garut"></Image>
        <div className="md:max-w-md">
          <p>
            Dealer Toyota Budi Jaya Garut Terpercaya! Melayani Pembelian Cash / Kredit Tanpa Dipersulit Semua Mobil Toyota area Garut dan Sekitarnya.
          </p>
          <p className="mt-4 font-semibold">Konsultasi bisa sambil ngopi!</p>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="gap-10 items-center flex flex-col justify-center">
      <div className="mx-auto text-center">
        <h2 id="contact-us" className="text-xl mb-4 text-stone-400">Kontak Kami:</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="https://api.whatsapp.com/send?phone=6281324740047" target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" width={80} height={80}/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Info-Promo-Toyota-Garut" target="_blank" rel="noopener noreferrer">
              <Image src="/fb.png" alt="Facebook" className="w-12 h-12 p-1" width={60} height={60}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/info.promo.toyota.garut" target="_blank" rel="noopener noreferrer">
              <Image src="/ig.png" alt="Instagram" className="w-12 h-12 p-1" width={60} height={60} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default async function BoughtBy() {
  const buyers = await getBoughtBy(4)

  return (<>
    <div className="bg-black text-stone-100 pt-16">
      {/* <div className="" style={{ background: 'black, url("/images/cars.avif")', backgroundBlendMode: 'screen'}}> */}
      <h2 id="bought-by" className="text-3xl sm:text-4xl w-full mx-auto text-center font-bold">
        Agen Terpercaya
      </h2>
      <ClientPhotosCarousel buyers={buyers}/>
      <div className="container mx-auto items-end flex flex-wrap justify-center py-4 md:gap-14">
        <AgentProfile />
        <Contact />
      </div>
    </div>
  </>)
}