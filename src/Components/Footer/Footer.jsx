import React from 'react';
import footer_logo from "../../assets/img/footer_logo.svg";
import footer_logo_phone from "../../assets/img/footer_logo_phone.svg";
import telegram from "../../assets/img/social/telegram.svg";
import inst from "../../assets/img/social/inst.svg";
import face from "../../assets/img/social/face.svg";


const Footer = () => {
    return <footer className="footer">
        <div className="footer__container container">
            <div className="footer__row">
                <div className="footer__column">
                    <a href="#" className="footer__logo">
                        <img src={footer_logo} alt="footer__logo"/>
                        </a>
                    <a href="#" className="footer__logophone">
                        <img src={footer_logo_phone} alt="footer__logo"/>
                    </a>
                </div>
                <div className="footer__column">
                    <nav className="footer__menu menu-footer">
                        <a href="#" className="menu-footer__title">CHOICE</a>
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">о компании</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">О продукции</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">о бизнесе</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">контакты</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">ЛИЧНЫЙ КАБИНЕТ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__column">
                    <nav className="footer__menu menu-footer">
                        <a href="#" className="menu-footer__title">Интернет-магазин</a>
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">КАТАЛОГ</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">ДОСТАВКА</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">ОПЛАТА</a>
                            </li>
                            <li className="menu-footer__item">
                                <a href="#" className="menu-footer__link">НОВИНКИ И АКЦИИ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__column">
                    <div className="footer__social social-footer">
                        <a href="#" className="social-footer__link">
                            <img src={telegram} alt="telegram"/>

                            </a>
                        <a href="#" className="social-footer__link">
                            <img src={inst} alt="instagram"/>
                        </a>
                        <a href="#" className="social-footer__link">
                            <img src={face} alt="facebook"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__policy">Choice © 2004-2021. Торговая марка компании Сhoice</div>
    </footer>
};

export default Footer;