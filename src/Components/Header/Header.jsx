import React from 'react';
import search from "../../assets/img/icons/search.svg";
import logo from "../../assets/img/icons/logo.svg";
import user from "../../assets/img/icons/user.svg";
import cart from "../../assets/img/icons/cart.svg";
import prev_arrow from "../../assets/img/mediaSliderBottom/prev_arrow.png";
import {NavLink} from "react-router-dom";


const Header = ({burger,setBurger}) => {

    return <header className="header">
        <div className="header__container container">
            <div className="header__top top-header ">
                <div className="top-header__row">
                    <div className="top-header__column">
                        <form data-da=".menu__body,850.98,0" className="top-header__find find-header">
                            <div className="find-header__label">Поиск</div>
                            <div className="find-header__input">
                                <input type="text"/>
                            </div>
                            <button type="submit" className="find-header__btn">
                                <img src={search} alt="search"/>
                            </button>
                        </form>
                    </div>
                    <div className="top-header__column">
                        <NavLink to={"/"} className="top-header__logo">
                            <img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div className="top-header__column">
                        <div className="top-header__actions actions-top">
                            <NavLink to={"/personal_cabinet"} className="actions-top__user">
                                <img src={user} alt="user"/>
                            </NavLink>
                            <a href="#" className="actions-top__cart">
                                <img src={cart} alt="cart"/>
                                <span>0</span>
                            </a>
                            <div className="actions-top__lang lang-top">
                                <a href="#" className="lang-top__link lang-top__link-arrow">EN</a>
                                <ul className="lang-top__list">
                                    <li className="lang-top__item">
                                        <a href="#" className="lang-top__link">RU</a>
                                    </li>
                                    <li className="lang-top__item">
                                        <a href="#" className="lang-top__link">UK</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom bottom-header">
                <div className="bottom-header__menu menu">
                    <div className={`menu__icon ${burger && "active"}`} onClick={()=>setBurger(!burger)}>
                        <span></span>
                    </div>
                    <nav className={`menu__body ${burger && "active"}`}>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link menu__link-header-active">магазин</a>
                                {/*<!-- <span class="menu__arrow"></span> -->*/}
                                <ul className="menu__sub-list">
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link">Полный каталог</a>
                                    </li>
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link menu__sub-link-beauty">Красота</a>

                                    </li>
                                    <li className="menu__sub-item">
                                        <a href="" className="menu__sub-link">Дом</a>
                                    </li>
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link">Здоровье</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link menu__link-header-active">о компании</a>
                                {/*{<!-- <span class="menu__arrow"></span> -->}*/}
                                <ul className="menu__sub-list">
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link">Полный каталог</a>
                                    </li>
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link active">Красота</a>

                                    </li>
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link">Дом</a>
                                    </li>
                                    <li className="menu__sub-item">
                                        <a href="#" className="menu__sub-link">Здоровье</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">бизнес С choice</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">БРЕНДЫ КОМПАНИИ</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">БЛАГОТВОРИТЕЛЬНОСТЬ</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">контакты</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">ПРОГРАММЫ</a>
                            </li>
                        </ul>
                        <button className="menu__btn btn btn-menugreen">Вход в кабинет</button>
                        <button className="menu__btn btn btn-menugray">КОРЗИНА</button>
                        <div className="menu__langs lang-menu">
                            <div className="lang-menu__label">Язык</div>
                            <a href="#" className="lang-menu__lang active">RU</a>
                            <a href="#" className="lang-menu__lang">UK</a>
                            <a href="#" className="lang-menu__lang">EN</a>
                        </div>
                        <div className={`sub-menu `}> {/*"active"*/}
                            <div className="sub-menu__back">
                                <div className="sub-menu__arrow">
                                    <img src={prev_arrow} alt="prev_arrow"/></div>

                                <div className="sub-menu__label">Назад</div>
                            </div>
                            <div className="sub-menu__title">КРАСОТА<span></span></div>
                            <ul className="sub-menu__list">
                                <li className="sub-menu__item">
                                    <a href="#" className="sub-menu__link">Для тела</a>
                                </li>
                                <li className="sub-menu__item">
                                    <a href="#" className="sub-menu__link">Для лица</a>
                                </li>
                                <li className="sub-menu__item">
                                    <a href="#" className="sub-menu__link">Для волос</a>
                                </li>
                                <li className="sub-menu__item">
                                    <a href="#" className="sub-menu__link">Антиэйдж</a>
                                </li>
                            </ul>
                            <div className="sub-menu__flex"></div>
                            <button className="menu__btn btn btn-menugreen">Алина бондаренко</button>
                            <button className="menu__btn btn btn-menugray">КОРЗИНА</button>
                            <div className="menu__langs lang-menu">
                                <div className="lang-menu__label">Язык</div>
                                <a href="#" className="lang-menu__lang active">RU</a>
                                <a href="#" className="lang-menu__lang">UK</a>
                                <a href="#" className="lang-menu__lang">EN</a>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    </header>


}

export default Header;