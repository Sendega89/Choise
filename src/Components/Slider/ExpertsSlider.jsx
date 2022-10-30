import React from "react";
import expert_check from "../../assets/img/expert/expert_check.svg";
import expert_close from "../../assets/img/expert/expert_close.png";
import expert_info from "../../assets/img/expert/expert_info.svg";

import expert_01 from "../../assets/img/expert/expert_01.webp";
import expert_02 from "../../assets/img/expert/expert_02.webp";
import expert_03 from "../../assets/img/expert/expert_03.webp";
import expert_04 from "../../assets/img/expert/expert_04.webp";




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
import { EffectCoverflow} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation,EffectCoverflow]);

const ExpertsSlider = () => {
    return (
        <Swiper spaceBetween={20}
                slidesPerView={3}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 30,
                    depth: 0,
                    modifier: 1,
                    slideShadows: true
                }}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": true
                }}
                watchOverflow={true}
                pagination={{
            "clickable": true
        }} className="expertSwiper">
            <SwiperSlide>
                <div className="expert__column swiper-slide">
                <div className="expert__item">
                    <div className="expert__top">
                        <div className="expert__icon">
                            <img src={expert_check}
                                 alt="expert_icon"/>
                        </div>
                        <div className="expert__percent">100%</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_01} alt="expert"/></div>
                    <div className="expert__label">Новичок</div>
                    <button className="expert__btn btn-main">пройти еще раз</button>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="expert__column swiper-slide">
                <div className="expert__item">
                    <div className="expert__top">
                        <div className="expert__icon">
                            <img src={expert_check} alt="expert_icon"/>
                        </div>
                        <div className="expert__percent">100%</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_02} alt="expert"/>
                    </div>
                    <div className="expert__label">Активный</div>
                    <button className="expert__btn btn-main">пройти еще раз</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="expert__column swiper-slide">
                <div className="expert__item">
                    <div className="expert__top">
                        <div className="expert__icon expert__icon-brown"><img
                            src={expert_info}
                            alt="expert_icon"/></div>
                        <div className="expert__percent expert__percent-brown">Открыто</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_03} alt="expert"/>
                    </div>
                    <div className="expert__label">Менеджер</div>
                    <button className="expert__btn btn-main btn-main-brown">учиться</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>  <div className="expert__column swiper-slide">
                <div className="expert__item expert__item-opacity">
                    <div className="expert__top">
                        <div className="expert__icon expert__icon-black"><img
                            src={expert_close}
                            alt="expert_icon"/></div>
                        <div className="expert__percent expert__percent-black">Доступ от LG</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_04} alt="expert"/>
                    </div>

                    <div className="expert__label">Лидер</div>
                    <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide><div className="expert__column swiper-slide">
                <div className="expert__item expert__item-opacity">
                    <div className="expert__top">
                        <div className="expert__icon expert__icon-black"><img
                            src={expert_close}
                            alt="expert_icon"/></div>
                        <div className="expert__percent expert__percent-black">Доступ от LG</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_04} alt="expert"/>
                    </div>
                    <div className="expert__label">Лидер</div>
                    <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide> <div className="expert__column swiper-slide">
                <div className="expert__item">
                    <div className="expert__top">
                        <div className="expert__icon">
                            <img src={expert_check} alt="expert_icon"/>

                        </div>
                        <div className="expert__percent">100%</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_01}  alt="expert"/>
                    </div>
                    <div className="expert__label">Новичок</div>
                    <button className="expert__btn btn-main">пройти еще раз</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide> <div className="expert__column swiper-slide">
                <div className="expert__item">
                    <div className="expert__top">
                        <div className="expert__icon">
                            <img src={expert_check} alt="expert_icon"/>
                        </div>
                        <div className="expert__percent">100%</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_02}  alt="expert"/>
                    </div>
                    <div className="expert__label">Активный</div>
                    <button className="expert__btn btn-main">пройти еще раз</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="expert__column swiper-slide">
                <div className="expert__item">
                    <div className="expert__top">
                        <div className="expert__icon expert__icon-brown">
                            <img src={expert_info} alt="expert_icon"/>
                        </div>
                        <div className="expert__percent expert__percent-brown">Открыто</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_03} alt="expert"/>
                    </div>
                    <div className="expert__label">Менеджер</div>
                    <button className="expert__btn btn-main btn-main-brown">учиться</button>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="expert__column swiper-slide">
                <div className="expert__item expert__item-opacity">
                    <div className="expert__top">
                        <div className="expert__icon expert__icon-black"><img
                            src={expert_close}
                            alt="expert_icon"/></div>
                        <div className="expert__percent expert__percent-black">Доступ от LG</div>
                    </div>
                    <div className="expert__img">
                        <img src={expert_04} alt="expert"/>
                    </div>
                    <div className="expert__label">Лидер</div>
                    <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ExpertsSlider;