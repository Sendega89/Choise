import React from 'react';
import {NavLink} from "react-router-dom";
import UserInfo from "../../Components/User/UserInfo";
import action01 from "../../assets/img/icons/actions/action01.svg";
import act02 from "../../assets/img/icons/actions/actioms02.svg";
import act03 from "../../assets/img/icons/actions/actioms03.svg";
import act04 from "../../assets/img/icons/actions/actioms04.svg";
import info from "../../assets/img/icons/actions/info.svg";
import omega_4 from "../../assets/img/omega_4.webp"
const MyOrders = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">ИСТОРИЯ ЗАКУПОК</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__user-profile user-profile">
                {/*<div className="user-profile__column">
                    <div className="user-profile__item item-user-profile">
                        <div className="item-user-profile__column">
                            <div className="item-user-profile__photo ibg"><img src="img/user_photo.webp"
                                                                               alt="user_photo">
                            </div>
                            <div className="item-user-profile__label">Ukraine, Kyiv</div>
                        </div>
                        <div className="item-user-profile__column">
                            <div className="item-user-profile__name name">Анна Бондаренко</div>
                            <a href="tel:0951458725" className="item-user-profile__phone">095-1458725</a>
                            <div className="item-user-profile__mark mark">MG</div>
                        </div>
                    </div>
                </div>*/}
                <UserInfo />
            </div>
            <div className="page__shopping shopping">
                <div className="shopping__desctop">
                    <div className="shopping__top">
                        <div className="shopping__body one">
                            <div className="shopping__column shopping__column-top">
                                <div className="shopping__item-top shopping-top__1"> </div>
                                <div className="shopping__item-top shopping-top__2"> </div>
                                <div className="shopping__item-top shopping-top__id">ID</div>
                                <div className="shopping__item-top shopping-top__date">ДАТА СОЗДАНИЯ</div>
                                <div className="shopping__item-top shopping-top__price">СТОИМОСТЬ</div>
                                <div className="shopping__item-top shopping-top__delivery">СТАТУС ДОСТАВКИ</div>
                                <div className="shopping__item-top shopping-top__payment">СТАТУС ОПЛАТЫ</div>
                                <div className="shopping__item-top shopping-top__action">ДЕЙСТВИЯ</div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping__item shopping__1 shopping__1-1"> </div>
                                <div className="shopping__item shopping__2"> <span
                                    className="span__wrapper span__wrapper-1">1</span>
                                </div>
                                <div className="shopping__item shopping__id shopping__id-top-1">12345678</div>
                                <div className="shopping__item shopping__date">2021-11-01</div>
                                <div className="shopping__item shopping__price">1234 грн</div>
                                <div className="shopping__item shopping__delivery">обрабатывается</div>
                                <div className="shopping__item shopping__payment">оплачен</div>
                                <div className="shopping__item shopping__action">
                                    <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                       className="shopping__icon">
                                        <img src={action01} alt="card"/></a>
                                    <a href="#" className="shopping__icon"><img src={act02}
                                                                                alt="close"/></a>
                                    <a href="#" className="shopping__icon"><img src={act03}
                                                                                alt="edit"/></a>
                                    <a href="#" className="shopping__icon"><img src={act04}
                                                                                alt="print"/></a>
                                    <button className="shopping__icon shopping__icon-info-top-1"><img
                                        src={info} alt="info"/></button>


                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-1">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"> </div>
                                    <div className="hide-shopping__label hide-shopping__label-top"> </div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>

                            </div>
                        </div>
                        <div className="shopping-button">
                            <button className="shopping-button__btn btn-main">смотреть БОЛЬШЕ</button>
                        </div>
                        <div className="shopping-total">
                            <div className="shopping-total__item">
                                <div className="shopping-total__label">СУММА В ГРН:</div>
                                <div className="shopping-total__total">2880 <span>грн</span></div>
                            </div>
                            <div className="shopping-total__item">
                                <div className="shopping-total__label">КОЛИЧЕСТВО:</div>
                                <div className="shopping-total__total">6</div>
                            </div>
                        </div>
                    </div>
                    <div className="shopping__title">
                        Список оформления другими дистрибьюторами
                    </div>


                    </div>
                </div>
            </div>
    );
};

export default MyOrders;