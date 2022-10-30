import React from "react";
import slider_logo from "../../assets/img/slider/slider_logo.svg";
import slider_bg01 from "../../assets/img/slider/slider_bg01.webp";
import slider_logo1 from "../../assets/img/slider/slider_logo1.svg";
import slider_bg03 from "../../assets/img/slider/slider_bg03.webp";
import slider_logo2 from "../../assets/img/slider/slider_logo2.svg";
import slider_bg02 from "../../assets/img/slider/slider_bg02.webp";

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

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation,EffectCoverflow]);


const SliderSwiper = () => {
// i`m del ibg class in <div className="slider__bg">
    return (
       /* <div className="slider__total swiper">
            <div className="slider__body swiper-wrapper">*/
                <Swiper spaceBetween={30}
                        centeredSlides
                        navigation
                        slidesPerView={4}
                        loop={true}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true
                        }}
                        watchOverflow={true}
                        autoplay={{
                            "delay": 2000,
                            "disableOnInteraction": false
                        }} pagination={{
                    "clickable": true
                }} className="mySwiper">

                    <SwiperSlide>
                        <div className="slider__item swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src={slider_logo}
                                         alt="slider_logo"/></div>
                                <div className="slider__date">Август</div>
                            </div>
                            <div className="slider__rate">280 <span>б</span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">ЛИЧНЫЙ ОБЬЕМ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg">
                                <img src={slider_bg01}
                                     alt="slider__bg"/></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__item slider__item-green swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src={slider_logo2}
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-green">Август</div>
                            </div>
                            <div className="slider__rate">4680 <span>б</span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">КОМАНДНЫЙ ОБЬЕМ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg">
                                <img src={slider_bg02}
                                     alt="slider__bg"/></div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider__item slider__item-blue swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src={slider_logo1}
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-blue">Август</div>
                            </div>
                            <div className="slider__rate slider__rate-blue">4240</div>
                            <div className="slider__bottom">
                                <div className="slider__volume">МоЙ ЧЕК</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ">
                                <img src={slider_bg03}
                                     alt="slider__bg"/></div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider__item swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src={slider_logo}
                                         alt="slider_logo"/></div>
                                <div className="slider__date">Август</div>
                            </div>
                            <div className="slider__rate">280 <span>б</span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">ЛИЧНЫЙ ОБЬЕМ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ">
                                <img src={slider_bg01}
                                     alt="slider__bg"/></div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider__item slider__item-green swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src={slider_logo2}
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-green">Август</div>
                            </div>
                            <div className="slider__rate slider__rate-green">4/12
                                <span>активно всего</span>
                            </div>
                            <div className="slider__bottom">
                                <div className="slider__volume">ПЕРВАЯ ЛИНИЯ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ">
                                <img src={slider_bg02}
                                     alt="slider__bg"/></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__item slider__item-blue swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src={slider_logo1}
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-blue">Август</div>
                            </div>
                            <div className="slider__rate slider__rate-blue">65 450 <span></span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">Мое вознаграждение</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ">
                                <img src={slider_bg03}
                                     alt="slider__bg"/></div>
                        </div>
                    </SwiperSlide>

                </Swiper>
          /*  </div>
        </div>*/
    );
};

export default SliderSwiper;