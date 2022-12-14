import React from 'react';
import check_active from "../../assets/img/icons/check_active.svg";
import check from "../../assets/img/icons/check.svg";

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

const Qualification = () => {
    return (
        <Swiper spaceBetween={10}
                breakpoints={{
                    "359.98": {
                    slidesPerView: 2,
                },
                    "767.98": {
                    slidesPerView: 3,
                },
                    "1010.98": {
                    slidesPerView: 4,
                },
                }}
                freeMode={true}
                    navigation
                    slidesPerView={4}
                    loop={true}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 30,
                        depth: 1,
                        modifier: 1,
                        slideShadows: true
                    }}
                    watchOverflow={false}
                     pagination={{
        "clickable": true
    }}
                className="qualification-dinamic__wrapper swiper qualificationSwiper">
            <SwiperSlide className="qualification-dinamic__column swiper-slide">

                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item active">
                        <div className="item-qualification__icon">
                            <img src={check_active} alt="check_active"/></div>
                        <div className="item-qualification__text active">???????????????? 5 ?????????? ????
                            ?????????????????????????? 2100 ??
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="qualification-dinamic__column swiper-slide">
                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item">
                        <div className="item-qualification__icon"><img src={check} alt="check"/>
                        </div>
                        <div className="item-qualification__text">?????? ???????????????? ???????????????? 150 ?? ??????????????</div>
                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="qualification-dinamic__column swiper-slide">
                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item">
                        <div className="item-qualification__icon"><img src={check} alt="check"/>
                        </div>
                        <div className="item-qualification__text">?????? ???????????????? ???????????????? 150 ?? ??????????????</div>
                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="qualification-dinamic__column swiper-slide">

                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item">
                        <div className="item-qualification__icon"><img src={check} alt="check"/>
                        </div>
                        <div className="item-qualification__text">?????? ???????????????? ???????????????? 150 ?? ??????????????</div>
                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="qualification-dinamic__column swiper-slide">
                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item">
                        <div className="item-qualification__icon"><img src={check} alt="check"/>
                        </div>
                        <div className="item-qualification__text">?????? ???????????????? ???????????????? 150 ?? ??????????????</div>
                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="qualification-dinamic__column swiper-slide">
                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item">
                        <div className="item-qualification__icon"><img src={check} alt="check"/>
                        </div>
                        <div className="item-qualification__text">?????? ???????????????? ???????????????? 150 ?? ??????????????</div>
                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="qualification-dinamic__column swiper-slide">
                <div className="qualification-dinamic__item">
                    <div className="item-qualification__item">
                        <div className="item-qualification__icon"><img src={check} alt="check"/>
                        </div>
                        <div className="item-qualification__text">?????? ???????????????? ???????????????? 150 ?? ??????????????</div>
                    </div>
            </div>
            </SwiperSlide>
        </Swiper>


    );
};

export default Qualification;