import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Slide from "./Slide";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="inner">
          <Swiper
            spaceBetween={50}
            modules={[ Pagination ]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><Slide/></SwiperSlide>
            <SwiperSlide><Slide/></SwiperSlide>
            <SwiperSlide><Slide/></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Slider;