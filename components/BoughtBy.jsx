'use client'

import React from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';

const ClientPhotosCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 10, // Adjust the speed of auto-scrolling (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="mt-12 mb-8 flex justify-center">
      {/* <Slider {...settings}> */}
      <div className="relative left-24 z-10 w-24 h-80 bg-gradient-to-r from-black to-slate-800/0"></div>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4999}
        transitionTime={5000}
        stopOnHover={false}
        showStatus={false}
        showArrows={false}
        width={800}
      >
        <div>
          <Image width={320} height={320} src="/images/client1.jpg" alt="Toyota Garut Client 1" className="w-96 h-80 object-contain" />
        </div>
        <div>
          <Image width={320} height={320} src="/images/client2.jpg" alt="Toyota Garut Client 2" className="w-96 h-80 object-contain" />
        </div>
        <div>
          <Image width={320} height={320} src="/images/client3.jpg" alt="Toyota Garut Client 3" className="w-96 h-80 object-contain" />
        </div>
        {/* Add more client photos as needed */}
      {/* </Slider> */}
      </Carousel>
      <div className="relative right-24 z-10 w-24 h-80 bg-gradient-to-l from-black to-slate-800/0"></div>
    </div>
  );
};


export default function BoughtBy() {
  return (<>
    <div>
      {/* <div className="" style={{ background: 'black, url("/images/cars.avif")', backgroundBlendMode: 'screen'}}> */}
      <h2 id="bought-by" className="mt-16 text-4xl w-full mx-auto text-center font-bold">
        Agen Terpercaya
      </h2>
      <ClientPhotosCarousel />
      <div className="container mx-auto sm:p-10 gap-10 items-center flex flex-col justify-center">
        <div className="mx-auto text-center">
          <h2 className="text-xl mb-4 text-stone-400">Kontak Kami:</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" width={80} height={80}/>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/your-sales-profile" target="_blank" rel="noopener noreferrer">
                <Image src="/fb.png" alt="Facebook" className="w-12 h-12 p-1" width={60} height={60}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your_sales_profile" target="_blank" rel="noopener noreferrer">
                <Image src="/ig.png" alt="Instagram" className="w-12 h-12 p-1" width={60} height={60} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>)
}