import React from 'react';
import {NavLink} from "react-router-dom";
import marketing01 from "../../assets/img/marketing01.webp";
import marketing02 from "../../assets/img/marketing02.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import SwiperCore, {
     Pagination, Navigation,
} from 'swiper/core';
import { EffectCoverflow} from "swiper";

// install Swiper modules
SwiperCore.use([ Pagination, Navigation,EffectCoverflow]);

const Marketing = () => {
    return (
        <div className="page__content ">
            <div className="page__box">
                <div className="page__title title">МАРКЕТИНГ ПЛАН И ПРОМОУШЕН</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__promotion promotion">
                <div className="promotion__top top-promotion">
                    <div className="top-promotion__row">
                        <div className="top-promotion__column">
                            <div className="top-promotion__img-left ">
                                <img src={marketing01} alt="marketing_img"/>
                            </div>
                        </div>
                        <div className="top-promotion__column">
                            <div className="top-promotion__img-right ">
                                <img src={marketing02} alt="marketing_img"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="promotion__bottom bottom-promotion">
                    <div className="bottom-promotion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Amet,
                        velit facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris
                        nisl. Sed nibh diam velit leo, sit. Dolor placerat augue tincidunt feugiat nisl.
                    </div>
                    <div className="bottom-promotion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Amet,
                        velit facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris
                        nisl. Sed nibh diam velit leo, sit. Dolor placerat augue tincidunt feugiat nisl.
                    </div>
                </div>
            </div>
            <div className="page__plan plan">
                <div className="plan__title">ПЛАН РАБОТЫ</div>
                <div className="plan__top">
                    <div className="plan__date">001</div>
                    <div className="plan__divider">---</div>
                    <div className="plan__date">006</div>
                </div>
                <div className="plan__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, velit facilisi viverra mattis
                    ultricies bibendum rhoncus. Porttitor consequat cursus mauris nisl. Sed nibh diam velit leo, sit.
                    Dolor placerat augue tincidunt feugiat nisl.
                </div>
            </div>
            <div className="page__marketing-slider slider-marketing">
                <div className="slider-marketing__wrapper">
            <Swiper
                direction={"vertical"}
                slidesPerView={3}
                spaceBetween={0}
                scrollbar={{ draggable: true, dragSize: 24,el:".slider-marketing__drag-scroll" }}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                 >


                <SwiperSlide className="slider-marketing__slide">
                    <div className="slider-marketing__item item-slider-marketing">
                        <div className="item-slider-marketing__number">001</div>
                        <div className="item-slider-marketing__text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Amet, velit facilisi viverra mattis ultricies bibendum rhoncus.
                            Porttitor consequat cursus mauris nisl. Sed nibh diam velit leo, sit. Dolor placerat
                            augue tincidunt feugiat nisl.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-marketing__slide">
                    <div className="slider-marketing__item item-slider-marketing">
                        <div className="item-slider-marketing__number">002</div>
                        <div className="item-slider-marketing__text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Amet, velit facilisi viverra mattis ultricies bibendum rhoncus.
                            Porttitor consequat cursus mauris nisl. Sed nibh diam velit leo, sit. Dolor placerat
                            augue tincidunt feugiat nisl.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-marketing__slide">
                    <div className="slider-marketing__item item-slider-marketing">
                        <div className="item-slider-marketing__number">003</div>
                        <div className="item-slider-marketing__text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Amet, velit facilisi viverra mattis ultricies bibendum rhoncus.
                            Porttitor consequat cursus mauris nisl. Sed nibh diam velit leo, sit. Dolor placerat
                            augue tincidunt feugiat nisl.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-marketing__slide">
                    <div className="slider-marketing__item item-slider-marketing">
                        <div className="item-slider-marketing__number">004</div>
                        <div className="item-slider-marketing__text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Amet, velit facilisi viverra mattis ultricies bibendum rhoncus.
                            Porttitor consequat cursus mauris nisl. Sed nibh diam velit leo, sit. Dolor placerat
                            augue tincidunt feugiat nisl.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-marketing__slide">
                    <div className="slider-marketing__item item-slider-marketing">
                        <div className="item-slider-marketing__number">005</div>
                        <div className="item-slider-marketing__text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Amet, velit facilisi viverra mattis ultricies bibendum rhoncus.
                            Porttitor consequat cursus mauris nisl. Sed nibh diam velit leo, sit. Dolor placerat
                            augue tincidunt feugiat nisl.
                        </div>
                    </div>
                </SwiperSlide>
                    <div className="slider-marketing__scroll"> </div>
            </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Marketing;