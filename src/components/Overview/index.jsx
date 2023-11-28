import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Banner } from './Overview.styles';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import slider1 from '../../public/images/slider-1.jpg';
import slider2 from '../../public/images/slider-2.jpg';
import slider3 from '../../public/images/slider-3.jpg';

export const Overview = () => {
  return (
    <Banner>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider3" />
        </SwiperSlide>
      </Swiper>
    </Banner>
  );
};
