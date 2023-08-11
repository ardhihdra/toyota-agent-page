'use client'

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { urlForSanityImage } from '@/data/sanity';
import StarReview from './Stars';
// import Slider from 'react-slick';

export const Banner = ({ images=[] }) => {
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

export const ClientPhotosCarousel = ({ buyers=[] }) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 10000,
  //   autoplay: true,
  //   autoplaySpeed: 10, // Adjust the speed of auto-scrolling (in milliseconds)
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   pauseOnHover: false,
  // };
  let lists = buyers || []
  if (!buyers || !buyers.length) {
    lists = [
      { name: '', testimonial: '', mainImage: '/images/client1.jpg', alt: 'Toyota Garut Client 1'},
      { name: '', testimonial: '', mainImage: '/images/client2.jpg', alt: 'Toyota Garut Client 2'},
      { name: '', testimonial: '', mainImage: '/images/client3.jpg', alt: 'Toyota Garut Client 3'},
    ]
  }

  return (
    <div className="mt-8 mb-4 flex justify-center">
      {/* <Slider {...settings}> */}
      <div className="relative left-56 z-10 w-56 h-36 md:h-80 bg-gradient-to-r from-black to-slate-800/0"></div>
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
        {
          lists.map(ls => (
            <div key={ls._id}>
              <Image
                width={320}
                height={320}
                src={
                  !buyers || !buyers.length ? 
                    "/images/client1.jpg":
                    urlForSanityImage(ls.mainImage).url()
                }
                alt="Toyota Garut Client 1"
                className="w-48 h-40 md:w-96 md:h-80 object-contain"
              />
              <div className="text-center mx-auto mt-4">
                <p>{ls.name}</p>
                <p>{ls.testimonial}</p>
                <StarReview totalColoredStars={5}/>
              </div>
            </div>
          ))
        }
        {/* <div>
          <Image width={320} height={320} src="/images/client2.jpg" alt="Toyota Garut Client 2" className="w-48 h-40 md:w-96 md:h-80 object-contain" />
        </div>
        <div>
          <Image width={320} height={320} src="/images/client3.jpg" alt="Toyota Garut Client 3" className="w-48 h-40 md:w-96 md:h-80 object-contain" />
        </div> */}
        {/* Add more client photos as needed */}
      {/* </Slider> */}
      </Carousel>
      <div className="relative right-56 z-10 w-56 h-36 md:h-80 bg-gradient-to-l from-black to-slate-800/0"></div>
    </div>
  );
};