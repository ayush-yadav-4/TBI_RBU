// src/SwiperGallery.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {  Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import SwiperCore from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  // add more images as needed
];

const Startups = () => {
  return (
    <div className="container mx-auto py-8 mt-20 ">
    <h2 className="text-5xl text-gray-600 font-bold mb-4 text-center ">Incubated Startups</h2>
    <div></div>
    <div className='pt-16' >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-64 h-80">
            <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-full rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Startups;


