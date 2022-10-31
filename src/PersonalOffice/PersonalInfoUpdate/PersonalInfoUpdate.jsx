import React from 'react';
import {NavLink} from "react-router-dom";
import UserInfo from "../../Components/User/UserInfo";
import telegram from  "../../assets/img/social/telegram.svg";
import face from  "../../assets/img/social/face.svg";
import inst from  "../../assets/img/social/inst.svg";


const PersonalInfoUpdate = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">ЛИЧНЫЙ ПРОФИЛЬ</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__user-profile user-profile">
                <UserInfo />
            </div>
            <form action="#" className="page__information information">
                <div className="information__title name">Чтобы изменить, введите необходимые данные</div>
                <div className="main-information">
                    <div className="main-information__label label-information">Основная информация</div>
                    <div className="main-information__row">
                        <div className="main-information__column">
                            <div className="main-information__item main-information__item-user item-info">
                                <input id="lastName" required placeholder="Фамилия" type="text" name="lastName"
                                       className="main-information__input input-globe"/>
                            </div>
                            <div className="main-information__item main-information__item-user item-info">
                                <input id="nameInformation" required placeholder="Имя" type="text"
                                       name="nameInformation"
                                       className="main-information__input input-globe"/>
                            </div>
                            <div className="main-information__item main-information__item-user item-info">
                                <input id="surName" placeholder="Отчество" type="text" name="surName"
                                       className="main-information__input input-globe"/>
                            </div>
                        </div>
                        <div className="main-information__column">
                            <div className="main-information__item main-information__item-user item-info">
                                {/*<input id="gender" placeholder="Пол" type="text" name="gender"
                                    class="main-information__input input-globe">*/}
                                <select name="gender" className="main-information__select input-globe">
                                    <option className=" input-globe" value="0" selected disabled hidden>Пол</option>
                                    <option className=" input-globe" value="АВГУСТ, 2022">Мужской</option>
                                    <option className=" input-globe" value="СЕНТЯБРЬ, 2022">Женский</option>
                                </select>
                            </div>
                            <div className="main-information__item main-information__item-date item-info">
                                <input id="dateInformation" placeholder="Дата рождения" type="text"
                                       name="dateInformation"
                                       className="main-information__input input-globe"/>
                            </div>
                            <div className="main-information__item main-information__item-mail item-info">
                                <input id="emailInformation" required={true} placeholder="Email" type="email"
                                       name="emailInformation" className="main-information__input input-globe"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="address">
                    <div className="address__label label-information">Адрес</div>
                    <div className="address__row">
                        <div className="address__column">
                            <div className="address__item item-info">
                                <input id="informationCountry" placeholder="Страна" type="text"
                                       name="informationCountry"
                                       className="address__input input-globe"/>
                            </div>
                            <div className="address__item item-info">
                                <input id="informationProvince" placeholder="Область" type="text"
                                       name="informationProvince" className="address__input input-globe"/>
                            </div>
                        </div>
                        <div className="address__column">
                            <div className="address__item item-info">
                                <input id="informationCity" placeholder="Город" type="text" name="informationCity"
                                       className="address__input input-globe"/>
                            </div>
                            <div className="address__item item-info">
                                <input id="informationAdress" placeholder="Адрес" type="text" name="informationAdress"
                                       className="address__input input-globe"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="password">
                    <div className="password__label label-information">Изменение пароля</div>
                    <div className="password__top">
                        <div className="password__item item-info">
                            <input id="newPassword" required placeholder="Введите новый пароль" type="password"
                                   name="newPassword"
                                   className="password__input input-globe"/>
                        </div>
                        <div className="password__item item-info">
                            <input id="newPasswordAgain" required placeholder="Введите пароль повторно" type="password"
                                   name="newPasswordAgain" className="password__input input-globe"/>
                        </div>
                    </div>
                    <div className="password__label label-information">Подтвердите изменение пароля</div>
                    <div className="password__row">
                        <div className="password__column">
                            <button className="password__btn btn-main">ПОЛУЧИТЬ смс</button>
                        </div>
                        <div className="password__column">
                            <div className="password__item item-info">
                                <input id="messagePassword" required placeholder="Код СМС" type="text"
                                       name="messagePassword"
                                       className="password__input input-globe"/>
                            </div>
                            <button className="password__btn btn-main">ОТПРАВИТЬ</button>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <div className="social-links__label label-information">Ссылки на соцсети</div>
                    <div className="social-links__row">
                        <div className="social-links__link"><img src={telegram} alt="telegram"/></div>
                        <div className="social-links__item item-info">
                            <input id="linkTelegram" placeholder="Введите ссылку" type="text" name="linkTelegram"
                                   className="social-links__input input-globe"/>
                        </div>
                    </div>
                    <div className="social-links__row">
                        <div className="social-links__link"><img src={inst} alt="instagram"/></div>
                        <div className="social-links__item item-info">
                            <input id="linkInstagram" placeholder="Введите ссылку" type="text" name="linkInstagram"
                                   className="social-links__input input-globe"/>
                        </div>
                    </div>
                    <div className="social-links__row">
                        <div className="social-links__link"><img src={face} alt="facebook"/></div>
                        <div className="social-links__item item-info">
                            <input id="linkFacebook" placeholder="Введите ссылку" type="text" name="linkFacebook"
                                   className="social-links__input input-globe"/>
                        </div>
                    </div>
                </div>
                <div className="phone-contact">
                    <div className="phone-contact__label label-information">Телефон/Контракт</div>
                    <div className="phone-contact__item item-info">
                        <input id="phone-contact" required placeholder="Телефон" type="tel" name="phone-contact"
                               className="phone-contact__input input-globe"/>
                    </div>
                </div>
                <button className="information__btn btn-main">СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
            </form>
        </div>
    );
};

export default PersonalInfoUpdate;