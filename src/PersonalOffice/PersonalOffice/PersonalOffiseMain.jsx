import React from 'react';
import User from "../../Components/User/User";

const PersonalOfficeMain = () => {
    return (
        <div className="page__content">
            <div className="page__title title title-one">ЛИЧНЫЙ КАБИНЕТ</div>
            <User />
            <div className="page__slider slider ">
                <div className="slider__total swiper mySwiper">
                    <div className="slider__body swiper-wrapper">
                        <div className="slider__item swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src="img/slider/slider_logo.svg"
                                         alt="slider_logo"/></div>
                                <div className="slider__date">Август</div>
                            </div>
                            <div className="slider__rate">280 <span>б</span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">ЛИЧНЫЙ ОБЬЕМ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ibg">
                                <img src="img/slider/slider_bg01.webp"
                                     alt="slider__bg"/></div>
                        </div>
                        <div className="slider__item slider__item-green swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src="img/slider/slider_logo2.svg"
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-green">Август</div>
                            </div>
                            <div className="slider__rate">4680 <span>б</span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">КОМАНДНЫЙ ОБЬЕМ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ibg">
                                <img src="img/slider/slider_bg02.webp"
                                     alt="slider__bg"/></div>
                        </div>
                        <div className="slider__item slider__item-blue swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src="img/slider/slider_logo1.svg"
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-blue">Август</div>
                            </div>
                            <div className="slider__rate slider__rate-blue">4240</div>
                            <div className="slider__bottom">
                                <div className="slider__volume">МоЙ ЧЕК</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ibg">
                                <img src="img/slider/slider_bg03.webp"
                                     alt="slider__bg"/></div>
                        </div>
                        <div className="slider__item swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src="img/slider/slider_logo.svg"
                                         alt="slider_logo"/></div>
                                <div className="slider__date">Август</div>
                            </div>
                            <div className="slider__rate">280 <span>б</span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">ЛИЧНЫЙ ОБЬЕМ</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ibg">
                                <img src="img/slider/slider_bg01.webp"
                                     alt="slider__bg"/></div>
                        </div>
                        <div className="slider__item slider__item-green swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src="img/slider/slider_logo2.svg"
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
                            <div className="slider__bg ibg">
                                <img src="img/slider/slider_bg02.webp"
                                     alt="slider__bg"/></div>
                        </div>
                        <div className="slider__item slider__item-blue swiper-slide">
                            <div className="slider__top">
                                <div className="slider__logo">
                                    <img src="img/slider/slider_logo1.svg"
                                         alt="slider_logo"/></div>
                                <div className="slider__date slider__date-blue">Август</div>
                            </div>
                            <div className="slider__rate slider__rate-blue">65 450 <span></span></div>
                            <div className="slider__bottom">
                                <div className="slider__volume">Мое вознаграждение</div>
                                <div className="slider__lines"><span></span></div>
                            </div>
                            <div className="slider__bg ibg">
                                <img src="img/slider/slider_bg03.webp"
                                     alt="slider__bg"/></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="page__compound compound">
                <div className="compound__row">
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Новичков в команде <span
                                className="compound__onearrow">
                                    <img
                                        src="img/icons/Arrow.png" alt="arrow"/></span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">15</div>
                                <div className="compound__arrow">
                                    <img src="img/icons/Arrows.svg" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Активные менеджеры<span
                                className="compound__onearrow">
                                    <img
                                        src="img/icons/Arrow.png" alt="arrow"/></span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">85</div>
                                <div className="compound__arrow">
                                    <img src="img/icons/Arrows.svg" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Сгорающих контрактов<span
                                className="compound__onearrow">
                                    <img
                                        src="img/icons/Arrow.png" alt="arrow"/></span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">34</div>
                                <div className="compound__arrow">
                                    <img src="img/icons/Arrows.svg" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Не активные менеджеры<span
                                className="compound__onearrow">
                                    <img
                                        src="img/icons/Arrow.png" alt="arrow"/></span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">340</div>
                                <div className="compound__arrow">
                                    <img src="img/icons/Arrows.svg" alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="compound__actions actions-compound">
                    <button className="actions-compound__btn btn-main btn-main-p">зарегистрировать клиента
                    </button>
                    <button className="actions-compound__btn btn-main">зарегистрировать менеджера</button>
                </div>
            </div>
            <div className="page__referal referal">
                <div className="referal__title title title-small">Мои реферальные ссылки</div>
                <div className="referal__row">
                    <div className="referal__column">
                        <div className="referal__item item-referal">
                            <div className="item-referal__label">Регистрация клиента</div>
                            <button className="item-referal__btn btn-main btn-main-blue">копировать ссылку
                            </button>
                        </div>
                    </div>
                    <div className="referal__column">
                        <div className="referal__item item-referal">
                            <div className="item-referal__label">Участие в марафоне</div>
                            <button className="item-referal__btn btn-main btn-main-blue">копировать ссылку
                            </button>
                        </div>
                    </div>
                    <div className="referal__column">
                        <div className="referal__item item-referal">
                            <div className="item-referal__label">Регистрация менеджера</div>
                            <button className="item-referal__btn btn-main btn-main-blue">копировать ссылку
                            </button>
                        </div>
                    </div>
                    <div className="referal__column">
                        <div className="referal__item item-referal">
                            <div className="item-referal__label">Мой магазин</div>
                            <button className="item-referal__btn btn-main btn-main-blue">копировать ссылку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__qualification qualification">
                <div className="qualification__row">
                    <div className="qualification__column">
                        <div className="qualification__item item-qualification item-qualification-main">
                            <div className="item-qualification__title title">До следующей  квалификации вам
                                надо:</div>
                            <div className="item-qualification__row">
                                <div className="item-qualification__column">
                                    <div className="item-qualification__item active">
                                        <div className="item-qualification__icon"><img
                                            src="img/icons/check_active.svg"
                                            alt="check_active"/></div>
                                        <div className="item-qualification__text active">доведите 5 веток до
                                            товарооборота 2100 Б
                                        </div>
                                    </div>
                                </div>
                                <div className="item-qualification__column">
                                    <div className="item-qualification__item">
                                        <div className="item-qualification__icon"><img src="img/icons/check.svg"
                                                                                       alt="check"/>
                                        </div>
                                        <div className="item-qualification__text">вам осталось добавить 150 Б
                                            закупки
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qualification__column">
                        <div className="qualification__body">
                            <div className="qualification__top top-qualification">
                                <div className="top-qualification__title">Ближайшая квалификация</div>
                                <div className="top-qualification__mark mark">MS</div>
                            </div>
                            <div className="qualification__bottom bottom-qualification">
                                <div className="bottom-qualification__item item-bottom-qualification">
                                    <div className="item-bottom-qualification__label">моя динамика</div>
                                    <a href="dinamic.html"
                                       className="item-bottom-qualification__btn btn-main">смотреть</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__liders liders">
                <div className="liders__title title title-small">Лидеры команды</div>
                <div className="liders__row">
                    <a href="#" className="liders__item item-liders">
                        <div className="item-liders__row">
                            <div className="item-liders__column">
                                <div className="item-liders__name">Анна Корниенко</div>
                                <div className="item-liders__line">1 линия</div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__body">
                                    <div className="item-liders__number item-liders__number-left">10</div>
                                    <div className="item-liders__divider">/</div>
                                    <div className="item-liders__number item-liders__number-right">65</div>
                                </div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__point">1500 <span>Б</span></div>
                            </div>
                        </div>
                        <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/></div>
                    </a>
                    <a href="#" className="liders__item item-liders">
                        <div className="item-liders__row">
                            <div className="item-liders__column">
                                <div className="item-liders__name">Анна Корниенко</div>
                                <div className="item-liders__line">1 линия</div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__body">
                                    <div className="item-liders__number item-liders__number-left">10</div>
                                    <div className="item-liders__divider">/</div>
                                    <div className="item-liders__number item-liders__number-right">65</div>
                                </div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__point">1500 <span>Б</span></div>
                            </div>
                        </div>
                        <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/></div>

                    </a>
                    <a href="#" className="liders__item item-liders">
                        <div className="item-liders__row">
                            <div className="item-liders__column">
                                <div className="item-liders__name">Анна Корниенко</div>
                                <div className="item-liders__line">1 линия</div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__body">
                                    <div className="item-liders__number item-liders__number-left">10</div>
                                    <div className="item-liders__divider">/</div>
                                    <div className="item-liders__number item-liders__number-right">65</div>
                                </div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__point">1500 <span>Б</span></div>
                            </div>
                        </div>
                        <div className="item-liders__bg "><img src="img/liders_bg.webp" alt="liders_bg"/></div>

                    </a>
                    <a href="#" className="liders__item item-liders">
                        <div className="item-liders__row">
                            <div className="item-liders__column">
                                <div className="item-liders__name">Анна Корниенко</div>
                                <div className="item-liders__line">1 линия</div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__body">
                                    <div className="item-liders__number item-liders__number-left">10</div>
                                    <div className="item-liders__divider">/</div>
                                    <div className="item-liders__number item-liders__number-right">65</div>
                                </div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__point">1500 <span>Б</span></div>
                            </div>
                        </div>
                        <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/></div>

                    </a>
                    <a href="#" className="liders__item item-liders">
                        <div className="item-liders__row">
                            <div className="item-liders__column">
                                <div className="item-liders__name">Анна Корниенко</div>
                                <div className="item-liders__line">1 линия</div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__body">
                                    <div className="item-liders__number item-liders__number-left">10</div>
                                    <div className="item-liders__divider">/</div>
                                    <div className="item-liders__number item-liders__number-right">65</div>
                                </div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__point">1500 <span>Б</span></div>
                            </div>
                        </div>
                        <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/></div>

                    </a>
                    <a href="#" className="liders__item item-liders">
                        <div className="item-liders__row">
                            <div className="item-liders__column">
                                <div className="item-liders__name">Анна Корниенко</div>
                                <div className="item-liders__line">1 линия</div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__body">
                                    <div className="item-liders__number item-liders__number-left">10</div>
                                    <div className="item-liders__divider">/</div>
                                    <div className="item-liders__number item-liders__number-right">65</div>
                                </div>
                            </div>
                            <div className="item-liders__column">
                                <div className="item-liders__point">1500 <span>Б</span></div>
                            </div>
                        </div>
                        <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/></div>

                    </a>
                    <div className="liders-hide">
                        <a href="#" className="liders__item item-liders">
                            <div className="item-liders__row">
                                <div className="item-liders__column">
                                    <div className="item-liders__name">Анна Корниенко</div>
                                    <div className="item-liders__line">1 линия</div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__body">
                                        <div className="item-liders__number item-liders__number-left">10</div>
                                        <div className="item-liders__divider">/</div>
                                        <div className="item-liders__number item-liders__number-right">65</div>
                                    </div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__point">1500 <span>Б</span></div>
                                </div>
                            </div>
                            <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/>
                            </div>

                        </a>
                        <a href="#" className="liders__item item-liders">
                            <div className="item-liders__row">
                                <div className="item-liders__column">
                                    <div className="item-liders__name">Анна Корниенко</div>
                                    <div className="item-liders__line">1 линия</div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__body">
                                        <div className="item-liders__number item-liders__number-left">10</div>
                                        <div className="item-liders__divider">/</div>
                                        <div className="item-liders__number item-liders__number-right">65</div>
                                    </div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__point">1500 <span>Б</span></div>
                                </div>
                            </div>
                            <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/>
                            </div>

                        </a>
                        <a href="#" className="liders__item item-liders">
                            <div className="item-liders__row">
                                <div className="item-liders__column">
                                    <div className="item-liders__name">Анна Корниенко</div>
                                    <div className="item-liders__line">1 линия</div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__body">
                                        <div className="item-liders__number item-liders__number-left">10</div>
                                        <div className="item-liders__divider">/</div>
                                        <div className="item-liders__number item-liders__number-right">65</div>
                                    </div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__point">1500 <span>Б</span></div>
                                </div>
                            </div>
                            <div className="item-liders__bg"><img src="img/liders_bg.webp" alt="liders_bg"/>
                            </div>

                        </a>
                    </div>
                </div>
                <button data-show="true" className="liders__btn btn-main">смотреть БОЛЬШЕ</button>
            </div>
            <div className="page__expert expert">
                <div className="expert__title title title-small">Моя экспертность</div>
                <div className="expert__progress"></div>
                <div className="expert__wrapper swiper expertSwiper">
                    <div className="expert__row swiper-wrapper">
                        <div className="expert__column swiper-slide">
                            <div className="expert__item">
                                <div className="expert__top">
                                    <div className="expert__icon"><img src="img/expert/expert_check.svg"
                                                                       alt="expert_icon"/>
                                    </div>
                                    <div className="expert__percent">100%</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_01.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Новичок</div>
                                <button className="expert__btn btn-main">пройти еще раз</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item">
                                <div className="expert__top">
                                    <div className="expert__icon"><img src="img/expert/expert_check.svg"
                                                                       alt="expert_icon"/>
                                    </div>
                                    <div className="expert__percent">100%</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_02.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Активный</div>
                                <button className="expert__btn btn-main">пройти еще раз</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item">
                                <div className="expert__top">
                                    <div className="expert__icon expert__icon-brown"><img
                                        src="img/expert/expert_info.svg"
                                        alt="expert_icon"/></div>
                                    <div className="expert__percent expert__percent-brown">Открыто</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_03.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Менеджер</div>
                                <button className="expert__btn btn-main btn-main-brown">учиться</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item expert__item-opacity">
                                <div className="expert__top">
                                    <div className="expert__icon expert__icon-black"><img
                                        src="img/expert/expert_close.png"
                                        alt="expert_icon"/></div>
                                    <div className="expert__percent expert__percent-black">Доступ от LG</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_04.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Лидер</div>
                                <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item expert__item-opacity">
                                <div className="expert__top">
                                    <div className="expert__icon expert__icon-black"><img
                                        src="img/expert/expert_close.png"
                                        alt="expert_icon"/></div>
                                    <div className="expert__percent expert__percent-black">Доступ от LG</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_04.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Лидер</div>
                                <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item">
                                <div className="expert__top">
                                    <div className="expert__icon"><img src="img/expert/expert_check.svg"
                                                                       alt="expert_icon"/>
                                    </div>
                                    <div className="expert__percent">100%</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_01.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Новичок</div>
                                <button className="expert__btn btn-main">пройти еще раз</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item">
                                <div className="expert__top">
                                    <div className="expert__icon"><img src="img/expert/expert_check.svg"
                                                                       alt="expert_icon"/>
                                    </div>
                                    <div className="expert__percent">100%</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_02.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Активный</div>
                                <button className="expert__btn btn-main">пройти еще раз</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item">
                                <div className="expert__top">
                                    <div className="expert__icon expert__icon-brown"><img
                                        src="img/expert/expert_info.svg"
                                        alt="expert_icon"/></div>
                                    <div className="expert__percent expert__percent-brown">Открыто</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_03.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Менеджер</div>
                                <button className="expert__btn btn-main btn-main-brown">учиться</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item expert__item-opacity">
                                <div className="expert__top">
                                    <div className="expert__icon expert__icon-black"><img
                                        src="img/expert/expert_close.png"
                                        alt="expert_icon"/></div>
                                    <div className="expert__percent expert__percent-black">Доступ от LG</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_04.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Лидер</div>
                                <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                            </div>
                        </div>
                        <div className="expert__column swiper-slide">
                            <div className="expert__item expert__item-opacity">
                                <div className="expert__top">
                                    <div className="expert__icon expert__icon-black"><img
                                        src="img/expert/expert_close.png"
                                        alt="expert_icon"/></div>
                                    <div className="expert__percent expert__percent-black">Доступ от LG</div>
                                </div>
                                <div className="expert__img ibg"><img src="img/expert/expert_04.webp"
                                                                      alt="expert"/></div>
                                <div className="expert__label">Лидер</div>
                                <button className="expert__btn btn-main btn-main-gray">Не доступно</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__review review">
                <div className="review__row">
                    <div className="review__column">
                        <div className="review__img">
                            <img src="img/review/review01.webp" alt="review__img"/>
                        </div>
                    </div>
                    <div className="review__column">
                        <div className="review__body">
                            <div className="review__name name">Анна
                                <span>Бондаренко</span>
                            </div>
                            <div className="review__text">Спасибо тебе, за поддержку Украины и помощь людям. Мы
                                все делаем
                                великое дело. Доброе дело.
                            </div>
                            <button className="review__btn btn-main">помочь еще раз</button>
                        </div>
                    </div>
                    <div className="review__column">
                        <div className="review__rank">серебрянный
                            волонтер
                        </div>
                        <div className="review__icon"><img src="img/review/review_heart.png" alt="icon"/></div>
                    </div>
                </div>
                <div className="review__bg ibg"><img src="img/review/review_bg.webp" alt="review_bg"/></div>
            </div>
        </div>
    );
};

export default PersonalOfficeMain;