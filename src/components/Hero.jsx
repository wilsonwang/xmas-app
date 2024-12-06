// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import React, {useContext} from 'react';
import { AppContext } from '../App';
import './hero.css'
import HeroSlide from './HeroSlide';


function Hero() {
  const { data: slides } = useContext(AppContext);

  return (
    <>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        className='mySwiper'
      >
        {slides && slides.length > 0 &&
          slides.map(slide => (
          <SwiperSlide key={slide._id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
export default Hero