import React from 'react';

const Footer = () => {
    return <footer className="footer">
        <div className="footer__container container">
            <div className="footer__row">
                <div className="footer__column">
                    <a href="#" className="footer__logo">
                        <img src="img/footer_logo.svg" alt="footer__logo"/>
                        </a>
                    <a href="#" className="footer__logophone">
                        <img src="img/footer_logo_phone.svg" alt="footer__logo"/>
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
                            <img src="img/social/telegram.svg" alt="telegram"/>

                            </a>
                        <a href="#" className="social-footer__link">
                            <img src="img/social/inst.svg" alt="instagram"/>
                        </a>
                        <a href="#" className="social-footer__link">
                            <img src="img/social/face.svg" alt="facebook"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__policy">Choice © 2004-2021. Торговая марка компании Сhoice</div>
    </footer>
};

export default Footer;