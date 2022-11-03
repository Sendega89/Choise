import React, {useState} from 'react';
import search from "../../assets/img/icons/search.svg";
import logo from "../../assets/img/icons/logo.svg";
import user from "../../assets/img/icons/user.svg";
import cart from "../../assets/img/icons/cart.svg";
import prev_arrow from "../../assets/img/mediaSliderBottom/prev_arrow.png";
import {Link, NavLink} from "react-router-dom";


const Header = ({burger,setBurger}) => {
const [openLangPanel, setOpenLangPanel] = useState(false)
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
                            <Link to={"#"} className="actions-top__cart">
                                <img src={cart} alt="cart"/>
                                <span>0</span>
                            </Link>
                            <div className="actions-top__lang lang-top ">
                                <Link to={"#"}
                                      onClick={()=> setOpenLangPanel(!openLangPanel)}
                                      className={`lang-top__link lang-top__link-arrow ${openLangPanel && "active"}`}>EN</Link>
                                <ul className="lang-top__list" style={{display:openLangPanel?"block":"none"}}>
                                    <li className="lang-top__item">
                                        <Link to={"#"} className="lang-top__link">RU</Link>
                                    </li>
                                    <li className="lang-top__item">
                                        <Link to={"#"} className="lang-top__link">UK</Link>
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
                        <span> </span>
                    </div>
                    <nav className={`menu__body ${burger && "active"}`}>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link menu__link-header-active">магазин</Link>
                                {/*<!-- <span class="menu__arrow"></span> -->*/}
                                <ul className="menu__sub-list">
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link">Полный каталог</Link>
                                    </li>
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link menu__sub-link-beauty">Красота</Link>

                                    </li>
                                    <li className="menu__sub-item">
                                        <Link href="" className="menu__sub-link">Дом</Link>
                                    </li>
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link">Здоровье</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link menu__link-header-active">о компании</Link>
                                {/*{<!-- <span class="menu__arrow"></span> -->}*/}
                                <ul className="menu__sub-list">
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link">Полный каталог</Link>
                                    </li>
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link active">Красота</Link>

                                    </li>
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link">Дом</Link>
                                    </li>
                                    <li className="menu__sub-item">
                                        <Link to={"#"} className="menu__sub-link">Здоровье</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link">бизнес С choice</Link>
                            </li>
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link">БРЕНДЫ КОМПАНИИ</Link>
                            </li>
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link">БЛАГОТВОРИТЕЛЬНОСТЬ</Link>
                            </li>
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link">контакты</Link>
                            </li>
                            <li className="menu__item">
                                <Link to={"#"} className="menu__link">ПРОГРАММЫ</Link>
                            </li>
                        </ul>
                        <button className="menu__btn btn btn-menugreen">Вход в кабинет</button>
                        <button className="menu__btn btn btn-menugray">КОРЗИНА</button>
                        <div className="menu__langs lang-menu">
                            <div className="lang-menu__label">Язык</div>
                            <Link to={"#"} className="lang-menu__lang active">RU</Link>
                            <Link to={"#"} className="lang-menu__lang">UK</Link>
                            <Link to={"#"} className="lang-menu__lang">EN</Link>
                        </div>
                        <div className={`sub-menu `}> {/*"active"*/}
                            <div className="sub-menu__back">
                                <div className="sub-menu__arrow">
                                    <img src={prev_arrow} alt="prev_arrow"/></div>

                                <div className="sub-menu__label">Назад</div>
                            </div>
                            <div className="sub-menu__title">КРАСОТА<span> </span></div>
                            <ul className="sub-menu__list">
                                <li className="sub-menu__item">
                                    <Link to={"#"} className="sub-menu__link">Для тела</Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link to={"#"} className="sub-menu__link">Для лица</Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link to={"#"} className="sub-menu__link">Для волос</Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link to={"#"} className="sub-menu__link">Антиэйдж</Link>
                                </li>
                            </ul>
                            <div className="sub-menu__flex"> </div>
                            <button className="menu__btn btn btn-menugreen">Алина бондаренко</button>
                            <button className="menu__btn btn btn-menugray">КОРЗИНА</button>
                            <div className="menu__langs lang-menu">
                                <div className="lang-menu__label">Язык</div>
                                <Link to={"#"} className="lang-menu__lang active">RU</Link>
                                <Link to={"#"} className="lang-menu__lang">UK</Link>
                                <Link to={"#"} className="lang-menu__lang">EN</Link>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    </header>


}

export default Header;