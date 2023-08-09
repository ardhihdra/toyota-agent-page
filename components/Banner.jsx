'use client'

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { urlForSanityImage } from '@/data/sanity';
// import Slider from 'react-slick';

const Banner = ({ images=[] }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 3000, // Adjust the speed of auto-scrolling (in milliseconds)
  // };

  return (
    <div className="w-full">
      {/* <Slider {...settings}> */}
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        stopOnHover={true}
        showStatus={false}
        showArrows={true}
      >
        {
          images.map((im, idx) => {
            return (
              <div key={idx} className="carousel-image">
                {
                  typeof im === 'object' ?
                  <Image
                    src={urlForSanityImage(im).width(1280).height(720).url()}
                    alt="Banner 1"
                    // loading="lazy"
                    width={1280}
                    height={720}
                    priority
                  />
                  :
                  <Image
                    src={im}
                    alt="Banner 1"
                    // loading="lazy"
                    width={1280}
                    height={720}
                    priority
                  />
                }
              </div>

            )
          })
        }
        {/* <div className="carousel-image">
          <Image
            src="/images/zenix.jpeg"
            alt="Banner 2"
            loading="lazy"
            width={1024}
            height={512}
          />
        </div>
        <div className="carousel-image">
          <Image
            src="/images/calya.jpeg"
            alt="Banner 4"
            loading="lazy"
            width={1024}
            height={512}
          />
        </div> */}
        <div className="carousel-image">
          <video
            autoPlay
            alt="Banner 3"
            loading="lazy"
            src="/videos/highlander1.mp4"
            width="full"
            height="full"
            muted
            loop
          >
          </video>
        </div>
      </Carousel>
      {/* </Slider> */}
    </div>
  );
};

export default Banner;
