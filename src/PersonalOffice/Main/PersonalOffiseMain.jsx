import React, {useState} from 'react';
import UserInfo from "../../Components/User/UserInfo";
import UserActions from "../../Components/User/UserActions";
import SliderSwiper from "../../Components/Slider/Slider";
import arrow from "../../assets/img/icons/Arrow.png";
import arrows from "../../assets/img/icons/Arrows.svg";
import check_active from "../../assets/img/icons/check_active.svg";
import check from "../../assets/img/icons/check.svg";
import liders_bg from "../../assets/img/liders_bg.webp";
import review01 from "../../assets/img/review/review01.webp";
import review_heart from "../../assets/img/review/review_heart.png";
import review_bg from "../../assets/img/review/review_bg.webp";
import {Link, NavLink} from "react-router-dom";
import ExpertsSlider from "../../Components/Slider/ExpertsSlider";
import Qualification from "../../Components/Slider/Qualification";


const PersonalOfficeMain = () => {
    const [lidersHide, setLidersHide] = useState(false)
    let liders = [{id: 1, name: "Анна Корниенко", line: "1 линия", lidersL: "10", lidersR: "65", points: "1500"}]
    return (
        <div className="page__content">
            <div className="page__title title title-one">ЛИЧНЫЙ КАБИНЕТ</div>
            <div className="page__user user">
                <div className="user__row">
                    <UserInfo/>
                    <UserActions/>
                </div>
            </div>
            <div className="page__slider slider ">
                <SliderSwiper/>
            </div>
            <div className="page__compound compound">
                <div className="compound__row">
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Новичков в команде <span
                                className="compound__onearrow">
                                    <img src={arrow} alt="arrow"/>
                                        </span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">15</div>
                                <div className="compound__arrow">
                                    <img src={arrows} alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Активные менеджеры<span
                                className="compound__onearrow">
                                    <img src={arrow} alt="arrow"/>
                                        </span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">85</div>
                                <div className="compound__arrow">
                                    <img src={arrows} alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Сгорающих контрактов<span
                                className="compound__onearrow">
                                    <img
                                        src={arrow} alt="arrow"/></span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">34</div>
                                <div className="compound__arrow">
                                    <img src={arrows} alt="arrow"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="compound__column">
                        <a href="#" className="compound__item">
                            <div className="compound__link">Не активные менеджеры<span
                                className="compound__onearrow">
                                    <img
                                        src={arrow} alt="arrow"/></span></div>
                            <div className="compound__subrow">
                                <div className="compound__number">340</div>
                                <div className="compound__arrow">
                                    <img src={arrows} alt="arrow"/>
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
            <div className="qualification__row">
                <div className="qualification__column">
                    <div className="qualification__item item-qualification item-qualification-main">
                        <div className="item-qualification__title title">До следующей квалификации вам
                            надо:
                        </div>
                        <div className="item-qualification__row">
                            <div className="item-qualification__column">
                                <div className="item-qualification__item active">
                                    <div className="item-qualification__icon"><img
                                        src={check_active}
                                        alt="check_active"/></div>
                                    <div className="item-qualification__text active">доведите 5 веток до
                                        товарооборота 2100 Б
                                    </div>
                                </div>
                            </div>
                            <div className="item-qualification__column">
                                <div className="item-qualification__item">
                                    <div className="item-qualification__icon">
                                        <img src={check} alt="check"/>
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
                                <Link to="/my_dynamic"
                                      className="item-bottom-qualification__btn btn-main">смотреть</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__liders liders">
                <div className="liders__title title title-small">Лидеры команды</div>
                {liders.map(l =>
                    <div className="liders__row">
                        <NavLink to={"/liders"} className="liders__item item-liders">
                            <div className="item-liders__row">
                                <div className="item-liders__column">
                                    <div className="item-liders__name">{l.name}</div>
                                    <div className="item-liders__line">{l.line}</div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__body">
                                        <div className="item-liders__number item-liders__number-left">{l.lidersL}</div>
                                        <div className="item-liders__divider">/</div>
                                        <div className="item-liders__number item-liders__number-right">{l.lidersR}</div>
                                    </div>
                                </div>
                                <div className="item-liders__column">
                                    <div className="item-liders__point">{l.points}<span>Б</span></div>
                                </div>
                            </div>
                            <div className="item-liders__bg">
                                <img src={liders_bg} alt="liders_bg"/></div>
                        </NavLink>
                        {lidersHide &&
                            <div className="liders__row">
                                <NavLink to={"/liders"} className="liders__item item-liders">
                                    <div className="item-liders__row">
                                        <div className="item-liders__column">
                                            <div className="item-liders__name">{l.name}</div>
                                            <div className="item-liders__line">{l.line}</div>
                                        </div>
                                        <div className="item-liders__column">
                                            <div className="item-liders__body">
                                                <div
                                                    className="item-liders__number item-liders__number-left">{l.lidersL}</div>
                                                <div className="item-liders__divider">/</div>
                                                <div
                                                    className="item-liders__number item-liders__number-right">{l.lidersR}</div>
                                            </div>
                                        </div>
                                        <div className="item-liders__column">
                                            <div className="item-liders__point">{l.points}<span>Б</span></div>
                                        </div>
                                    </div>
                                    <div className="item-liders__bg">
                                        <img src={liders_bg} alt="liders_bg"/></div>
                                </NavLink>
                            </div>
                        }
                    </div>)}
                <button onClick={() => setLidersHide(!lidersHide)}
                        className="liders__btn btn-main">{lidersHide ? "Закрыть" : "смотреть БОЛЬШЕ"}</button>
            </div>
            <div className="page__expert expert">
                <div className="expert__title title title-small">Моя экспертность</div>
                <div className="expert__progress"></div>
                <div className="expert__wrapper swiper">
                    <div className="expert__row swiper-wrapper">
                            <ExpertsSlider/>
                    </div>
                </div>
            </div>
            <div className="page__review review">
                <div className="review__row">
                    <div className="review__column">
                        <div className="review__img">
                            <img src={review01} alt="review__img"/>
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
                        <div className="review__icon"><img src={review_heart} alt="icon"/></div>
                    </div>
                </div>
                <div className="review__bg"><img src={review_bg} alt="review_bg"/></div>
            </div>
        </div>
    );
};

export default PersonalOfficeMain;