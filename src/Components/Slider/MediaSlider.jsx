import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
//import "swiper/components/pagination/pagination.min.css"
//import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import {EffectCoverflow} from "swiper";
import itemMediaSliderBottom01 from "../../assets/img/mediaSliderBottom/item-media-slider-bottom01.webp";
import itemMediaSliderBottom02 from "../../assets/img/mediaSliderBottom/item-media-slider-bottom02.webp";
import itemMediaSliderBottom03 from "../../assets/img/mediaSliderBottom/item-media-slider-bottom03.webp";


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow]);


const MediaSlider = () => {
    return (
        <div className="media-slider-bottom__wrapper">


        <Swiper spaceBetween={30}
                slidesPerView={3}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 20,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false
                }}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": true
                }}
                watchOverflow={true}
                pagination={{
                    "clickable": true
                }} /*class="media-slider-bottom__column"*/>

            <SwiperSlide className="media-slider-bottom__item item-media-slider-bottom">
                        <div className="item-media-slider-bottom__title">НАША ФИЛОСОФИЯ</div>
                        <div className="item-media-slider-bottom__img">
                            <img src={itemMediaSliderBottom01}
                                 alt="item-media-slider-bottom"/></div>
                        <div className="item-media-slider-bottom__text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Cras ultrices et integer velit pharetra.
                        </div>
            </SwiperSlide>

            <SwiperSlide className="media-slider-bottom__item item-media-slider-bottom">
                    <div className="item-media-slider-bottom__title">НАША ФИЛОСОФИЯ</div>
                    <div className="item-media-slider-bottom__img">
                        <img src={itemMediaSliderBottom02}
                        alt="item-media-slider-bottom"/></div>
                    <div className="item-media-slider-bottom__text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras ultrices et integer velit pharetra.
                    </div>
            </SwiperSlide >
            <SwiperSlide className="media-slider-bottom__item item-media-slider-bottom">
                    <div className="item-media-slider-bottom__title">НАША ФИЛОСОФИЯ</div>
                    <div className="item-media-slider-bottom__img"><img
                        src={itemMediaSliderBottom03}
                        alt="item-media-slider-bottom"/></div>
                    <div className="item-media-slider-bottom__text">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras ultrices et integer velit pharetra.
                    </div>
            </SwiperSlide>
        </Swiper> </div>
    );
};

export default MediaSlider;

