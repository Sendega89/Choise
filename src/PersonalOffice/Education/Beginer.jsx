import React from 'react';
import {NavLink} from "react-router-dom";
import moduleOne_img from "../../assets/img/moduleOne_img.webp";
import expert_check from "../../assets/img/expert/expert_check.svg"
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Mousewheel, Scrollbar} from "swiper";
const Beginer = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">МОДУЛЬ 1</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__module-one module-one">
                <div className="module-one__img">
                    <img src={moduleOne_img} alt="module-one"/></div>
                <div className="module-one__item">
                    <div className="module-one__label">Вводный урок. О нашем бренде</div>
                    <div className="module-one__proggress">
                        <div className="module-one__icon">
                            <img src={expert_check} alt="expert_icon"/>
                        </div>
                        <div className="module-one__percent">100%</div>
                        <div className="module-one__line"><span> </span></div>
                    </div>
                </div>
            </div>
            <div className="page__video video">
                <div className="video__video">
                    <iframe width="1280" height="720"
                            src="https://www.youtube.com/embed/fKopy74weus?list=RDCLAK5uy_n1yUj1SIY2iIAIiVtdlwy6z7RLFqKXmB0"
                            title="Imagine Dragons - Thunder" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="video__row">
                    <div className="video__column">
                        <div className="video__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                            velit
                            facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris nisl.
                            Sed nibh diam velit leo, sit.
                        </div>
                        <div className="video__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                            velit
                            facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris nisl.
                            Sed nibh diam velit leo, sit.
                        </div>
                    </div>
                    <div className="video__column">
                        <div className="video__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                            velit
                            facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris nisl.
                            Sed nibh diam velit leo, sit.
                        </div>
                        <div className="video__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                            velit
                            facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris nisl.
                            Sed nibh diam velit leo, sit.
                        </div>
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

export default Beginer;