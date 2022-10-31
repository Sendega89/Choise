import React from 'react';
import {NavLink} from "react-router-dom";
import education from "../../assets/img/education/education.webp"
import education01 from "../../assets/img/education/education01.webp"
import education02 from "../../assets/img/education/education02.webp"


import expert_check from "../../assets/img/expert/expert_check.svg";
import expert_close from "../../assets/img/expert/expert_close.png";


import expert_01 from "../../assets/img/expert/expert_01.webp";
import expert_02 from "../../assets/img/expert/expert_02.webp";
import expert_03 from "../../assets/img/expert/expert_03.webp";
import expert_04 from "../../assets/img/expert/expert_04.webp";
import expert_05 from "../../assets/img/expert/expert_05.webp";


const Education = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">ОБУЧЕНИЕ</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span></span></NavLink>
            </div>
            <div className="page__education education">
                <div className="education__top top-education">
                    <div className="top-education__row">
                        <div className="top-education__column">
                            <div className="top-education__img top-education__img-big"><img
                                src={education} alt="education_img"/></div>
                        </div>
                        <div className="top-education__column">
                            <div className="top-education__img"><img src={education01}
                                                                     alt="education_img"/></div>
                        </div>
                        <div className="top-education__column">
                            <div className="top-education__img"><img src={education02}
                                                                     alt="education_img"/></div>
                        </div>
                    </div>
                </div>
                <div className="education__bottom bottom-education">
                    <div className="bottom-education__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Amet,
                        velit facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris
                        nisl. Sed nibh diam velit leo, sit. Dolor placerat augue tincidunt feugiat nisl.
                    </div>
                    <div className="bottom-education__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Amet,
                        velit facilisi viverra mattis ultricies bibendum rhoncus. Porttitor consequat cursus mauris
                        nisl. Sed nibh diam velit leo, sit. Dolor placerat augue tincidunt feugiat nisl.
                    </div>
                    <button className="bottom-education__btn btn-main">НАЧНИ ПРЯМО СЕЙЧАС</button>
                </div>
            </div>
            <div className="page__modules modules">
                <div className="modules__title">Модули</div>
                <div className="modules__row">
                    <div className="modules__column">
                        <div className="modules__item item-modules">
                            <div className="item-modules__top">
                                <div className="item-modules__icon">
                                    <img src={expert_check}
                                         alt="expert_icon"/>
                                </div>
                                <div className="item-modules__percent">100%</div>
                            </div>
                            <div className="item-modules__img">
                                <img src={expert_01} alt="expert"/>
                            </div>
                            <div className="item-modules__label">Модуль 1</div>
                            <button className="item-modules__btn btn-main">пройти еще раз</button>
                        </div>
                    </div>
                    <div className="modules__column">
                        <div className="modules__item item-modules">
                            <div className="item-modules__top">
                                <div className="item-modules__icon">
                                    <img src={expert_check}
                                         alt="expert_icon"/>
                                </div>
                                <div className="item-modules__percent">100%</div>
                            </div>
                            <div className="item-modules__img">
                                <img src={expert_02} alt="expert"/>
                            </div>
                            <div className="item-modules__label">Модуль 2</div>
                            <button className="item-modules__btn btn-main">пройти еще раз</button>
                        </div>
                    </div>
                    <div className="modules__column">
                        <div className="modules__item item-modules">
                            <div className="item-modules__top">
                                <div className="item-modules__icon item-modules__icon-black">
                                    <img src={expert_close} alt="expert_icon"/>
                                </div>
                                <div className="item-modules__percent item-modules__percent-black">Доступ закрыт</div>
                            </div>
                            <div className="item-modules__img">
                                <img src={expert_03} alt="expert"/>
                            </div>
                            <div className="item-modules__label">Модуль 3</div>
                            <button className="item-modules__btn btn-main btn-main-dark">Не доступно</button>
                        </div>
                    </div>
                    <div className="modules__column">
                        <div className="modules__item item-modules">
                            <div className="item-modules__top">
                                <div className="item-modules__icon item-modules__icon-black"><img
                                    src={expert_close} alt="expert_icon"/>
                                </div>
                                <div className="item-modules__percent item-modules__percent-black">Доступ закрыт</div>
                            </div>
                            <div className="item-modules__img">
                                <img src={expert_04} alt="expert"/>
                            </div>
                            <div className="item-modules__label">Модуль 4</div>
                            <button className="item-modules__btn btn-main btn-main-dark">Не доступно</button>
                        </div>
                    </div>
                    <div className="modules__column">
                        <div className="modules__item item-modules">
                            <div className="item-modules__top">
                                <div className="item-modules__icon item-modules__icon-black"><img
                                    src={expert_close} alt="expert_icon"/>
                                </div>
                                <div className="item-modules__percent item-modules__percent-black">Доступ закрыт</div>
                            </div>
                            <div className="item-modules__img">
                                <img src={expert_05} alt="expert"/>
                            </div>
                            <div className="item-modules__label">Модуль 5</div>
                            <button className="item-modules__btn btn-main btn-main-dark">Не доступно</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;