import React from 'react';
import {Link, NavLink} from "react-router-dom";
import media_img from "../../assets/img/media_img.webp";
import media_roll from "../../assets/img/icons/media_roll.png";
import tagsIcon from "../../assets/img/icons/tags_icon.svg";
import categories_icon from "../../assets/img/icons/categories_icon.png";
import MediaSlider from "../../Components/Slider/MediaSlider";

const Media = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">МЕДИАБАЗА</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__media-img media-img">
                <div className="media-img__wrapper">
                    <img src={media_img} alt="media-img"/>
                </div>
            </div>
            <div className="page__media-header media-header">
                <div className="media-header__label">Обзор</div>
                <div className="media-header__row">
                    <button className="media-header__btn btn-main btn-main-brown">ПО КАТЕГОРИИ</button>
                    <button className="media-header__btn btn-main btn-main-brown">ПО МЕСЯЦУ</button>
                    <button className="media-header__btn btn-main btn-main-brown">ПО СЛОВАМ</button>
                </div>
            </div>
            <div className="page__media-slider media-slider">
                <div className="media-slider__wrapper">
                    <div className="media-slider__body">
                        <div className="media-slider__slide">
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                        </div>
                        <div className="media-slider__slide">
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                        </div>
                        <div className="media-slider__slide">
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                        </div>
                        <div className="media-slider__slide">
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                            <div className="media-slider__item">
                                <div className="media-slider__date">2021-12-12</div>
                                <div className="media-slider__title">Название новости</div>
                                <div className="media-slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                    ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent
                                    leo
                                    aliquam maecenas. Lorem ipsum dolor sit amet, <span
                                        className="text__more">consectetur</span></div>
                                <div className="media-slider__text-more">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit.
                                    Cras ultrices et integer velit pharetra. Posuere nec, molestie in integer. Sed sed
                                    praesent leo aliquam maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Cras
                                </div>
                                <button id="mainSliderButton" className="media-slider__button">Подробнее</button>
                                <div className="media-slider__category">Категория</div>
                                <div className="media-slider__tag">#Тег</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="media-slider__roll">
                    <img src={media_roll} alt="roll"/></div>
                <div className="media-slider__scroll"> </div>
            </div>
            <div className="page__media-list media-list">
                <div className="media-list__row">
                    <div className="media-list__tags ">
                        <div className="tags-media__item">
                            <div className="tags-media__top">
                                <div className="tags-media__title">Список тегов</div>
                                <div className="tags-media__icon">
                                    <img src={tagsIcon} alt="tag_icon"/>
                                </div>
                            </div>
                            <div className="tags-media__row">
                                <div className="tags-media__column">
                                    <Link to={"/"} className="tags-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="tags-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="tags-media__opportunities">Возможности choice</Link>
                                </div>
                                <div className="tags-media__column">
                                    <Link to={"/"} className="tags-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="tags-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="tags-media__opportunities">Возможности choice</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media-list__categories ">
                        <div className="categories-media__item">
                            <div className="categories-media__top">
                                <div className="categories-media__title">Список категорий</div>
                                <div className="categories-media__icon">
                                    <img src={categories_icon} alt="categories_icon"/></div>
                            </div>
                            <div className="categories-media__row">
                                <div className="categories-media__column">
                                    <Link to={"/"} className="categories-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="categories-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="categories-media__opportunities">Возможности choice</Link>
                                </div>
                                <div className="categories-media__column">
                                    <Link to={"/"} className="categories-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="categories-media__opportunities">Возможности choice</Link>
                                    <Link to={"/"} className="categories-media__opportunities">Возможности choice</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__media-slider-bottom media-slider-bottom">
                <div className="media-slider-bottom__wrapper">
                    <div className="media-slider-bottom__row">
                    <MediaSlider/>
                    </div>
                </div>
            </div>
            {/*<div className="page__media-slider-bottom media-slider-bottom">
             <div className="media-slider-bottom__row">
                    <div className="media-slider-bottom__row">
                        <div className="media-slider-bottom__column">
                            <div className="media-slider-bottom__item item-media-slider-bottom">
                                <div className="item-media-slider-bottom__title">НАША ФИЛОСОФИЯ</div>
                                <div className="item-media-slider-bottom__img"><img
                                    src={itemMediaSliderBottom01}
                                    alt="item-media-slider-bottom"/></div>
                                <div className="item-media-slider-bottom__text">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Cras ultrices et integer velit pharetra.
                                </div>
                            </div>
                        </div>
                        <div className="media-slider-bottom__column">
                            <div className="media-slider-bottom__item item-media-slider-bottom">
                                <div className="item-media-slider-bottom__title">НАША ФИЛОСОФИЯ</div>
                                <div className="item-media-slider-bottom__img">
                                    <img src={itemMediaSliderBottom02}
                                    alt="item-media-slider-bottom"/></div>
                                <div className="item-media-slider-bottom__text">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Cras ultrices et integer velit pharetra.
                                </div>
                            </div>
                        </div>
                        <div className="media-slider-bottom__column">
                            <div className="media-slider-bottom__item item-media-slider-bottom">
                                <div className="item-media-slider-bottom__title">НАША ФИЛОСОФИЯ</div>
                                <div className="item-media-slider-bottom__img"><img
                                    src={itemMediaSliderBottom03} alt="item-media-slider-bottom"/></div>
                                <div className="item-media-slider-bottom__text">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Cras ultrices et integer velit pharetra.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="media-slider-bottom__controls">
                        <div className="media-slider-bottom__next"><img src={prev_arrow}
                                                                        alt="arrow"/></div>
                        <div className="media-slider-bottom__prev"><img src={next_arrow}
                                                                        alt="arrow"/></div>
                    </div>
             </div>
            </div>*/}
        </div>
    );
};

export default Media;