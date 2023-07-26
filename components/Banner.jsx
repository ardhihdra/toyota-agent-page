'use client'

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className="w-full flex">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        stopOnHover={true}
        showStatus={false}
        showArrows={true}
      >
        <div className="carousel-image">
          <Image
            src="/images/yaris.jpeg"
            alt="Banner 1"
            // loading="lazy"
            width={1024}
            height={512}
            priority
          />
        </div>
        <div className="carousel-image">
          <Image
            src="/images/zenix.jpeg"
            alt="Banner 2"
            loading="lazy"
            width={1024}
            height={512}
          />
        </div>
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
        <div className="carousel-image">
          <Image
            src="/images/calya.jpeg"
            alt="Banner 4"
            loading="lazy"
            width={1024}
            height={512}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
