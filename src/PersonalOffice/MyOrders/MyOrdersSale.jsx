import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import UserInfo from "../../Components/User/UserInfo";
import action01 from "../../assets/img/icons/actions/action01.svg";
import act02 from "../../assets/img/icons/actions/actioms02.svg";
import act03 from "../../assets/img/icons/actions/actioms03.svg";
import act04 from "../../assets/img/icons/actions/actioms04.svg";
import info from "../../assets/img/icons/actions/info.svg";
import omega_4 from "../../assets/img/omega_4.webp";
import Range from "rc-slider";

const MyOrdersSale = () => {
    const [openFilter, setOpenFilter] = useState(false);
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">CПИСОК ВАШИХ ЗАКАЗОВ</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__user user">
                <div className="user__row">
                           <UserInfo />
                    <div className="user__column">
                        <div className="user-shopping-sale__item">
                            <Link to="/popup_status" className="user-shopping-sale__link popup-link">
                                Оформить отложенные заказы
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-team__header shopping-sale__header">
                <div data-show="true" onClick={()=> setOpenFilter(!openFilter)}
                     className="shopping-sale__btn-plus filter-team__btn-plus btn-main btn-main-plus">
                    <span> </span> добавить фильтр

                </div>
                <div data-show="true" className="shopping-sale__btn-find filter-team__btn-find btn-main btn-main-find">
                    поиск менеджера
                </div>
            </div>

            <div className="page__shopping-sale shopping-sale">
                <div className={`filter-team__filter-item item-filter shopping-sale__filter-item ${openFilter && "active"}`}>
                    <div className="item-filter__wrapper ">
                        <form action="#" onSubmit={(e)=>{
                            console.log(e)
                        }} className="item-filter__form form-filter">
                            <div className="form-filter__item form-filter__item-select ">
                                <select name="period"
                                        className="form-filter__select form-filter__select-hide"
                                        defaultValue={"АВГУСТ, 2022"}>
                                    <option value="АВГУСТ, 2022" >АВГУСТ, 2022</option>
                                    <option value="СЕНТЯБРЬ, 2022">СЕНТЯБРЬ, 2022</option>
                                    <option value="ОКТЯБРЬ, 2022">ОКТЯБРЬ, 2022</option>
                                </select>
                            </div>
                            <div className="form-filter__item form-filter__item-range">
                                <div className="form-filter__label">От даты по дату</div>
                                <div className="form-filter__row">
                                    <div className="range-filter">

                                        <div className="range-filter__values values-range-filter">
                                            <div className="values-range-filter__column">
                                                <div className="values-range-filter__input">
                                                    <input id="price-start" placeholder="0" autoComplete="off"
                                                           type="text"
                                                           name="range" className="input"/>
                                                </div>
                                            </div>
                                            <div className="values-range-filter__column">
                                                <div className="values-range-filter__input">
                                                    <input id="price-end" placeholder="15" autoComplete="off"
                                                           type="text"
                                                           name="range" className="input"/>
                                                </div>
                                            </div>
                                        </div>
                                        <Range style={{
                                            width:"40%"
                                        }} range={[0, 25]}
                                               handleStyle={[
                                                   {
                                                       color:'#b5c775',
                                                       backgroundColor:"#fff",
                                                       border:"none",
                                                       boxShadow:"0 0 5px #bcbbbb",
                                                       "&::after":{
                                                           content: "",
                                                           borderRadius: "100%",
                                                           width: 10,
                                                           height: 10,
                                                           backgroundColor: "#b5c775",
                                                           position: "absolute",
                                                           top: "50%",
                                                           left: "50%",
                                                           transform: "translate(-50%, -50%)"
                                                       }
                                                   },
                                                   {
                                                       color:'#b5c775',
                                                       backgroundColor: "#fff",
                                                       border:"none",
                                                       boxShadow:"0 0 5px #bcbbbb"}]}
                                               trackStyle={{
                                                   color:"#b5c775",
                                                   backgroundColor:"#b5c775",
                                               }}
                                               dotStyle={{
                                                   color:"b5c775",

                                               }}/>
                                        {/*<div className="range-filter__slider"> </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox1">
                                <div className="checkbox1">
                                    <input id="showManager"  type="checkbox" name="manager"
                                           className="checkbox1__input1"/>
                                        <label htmlFor="showManager" className="checkbox1__label1">Статус
                                            доставки</label>
                                </div>
                                <ul className="checkbox1__list1">
                                    <li className="checkbox1__item1">
                                        <label htmlFor="showManager1" className="checkbox1__label-list1">Статус доставки
                                            1</label>
                                        <input id="showManager1" type="checkbox" name="manager1"
                                               className="checkbox1__input-list1"/>

                                    </li>
                                    <li className="checkbox1__item1">
                                        <label htmlFor="showManager2" className="checkbox1__label-list1">Статус доставки
                                            2</label>
                                        <input id="showManager2" type="checkbox" name="manager2"
                                               className="checkbox1__input-list2"/>

                                    </li>
                                </ul>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox2">
                                <div className="checkbox2">
                                    <input id="showQualification" type="checkbox" name="qualification"
                                           className="checkbox2__input2"/>
                                        <label htmlFor="showQualification" className="checkbox2__label2">Статус
                                            оплаты</label>
                                </div>
                                <ul className="checkbox2__list2">
                                    <li className="checkbox2__item2">
                                        <label htmlFor="showQualification1" className="checkbox2__label-list2">Статус
                                            оплаты
                                            1</label>
                                        <input id="showQualification1" type="checkbox" name="qualification1"
                                               className="checkbox2__input-list2"/>

                                    </li>
                                    <li className="checkbox2__item2">
                                        <label htmlFor="showQualification2" className="checkbox2__label-list2">Статус
                                            оплаты
                                            2</label>
                                        <input id="showQualification2" type="checkbox" name="qualification2"
                                               className="checkbox2__input-list2"/>

                                    </li>
                                </ul>
                            </div>

                            <div className="item-filter__buttons">
                                <button type="submit" className="item-filter__btn btn-main">применить</button>
                                <button type="reset" className="item-filter__btn btn-main btn-main-dark">отменить
                                    фильтр
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="shopping-sale__desctop">
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
                            <div className="shopping__column shopping__column ">
                                <div className="shopping__item shopping__1 shopping__1-1 active"> </div>
                                <div className="shopping__item shopping__2"> <span
                                    className="span__wrapper span__wrapper-1">1</span>
                                </div>
                                <div className="shopping__item shopping__id shopping__id-top-1">12345678</div>
                                <div className="shopping__item shopping__date">2021-11-01</div>
                                <div className="shopping__item shopping__price">1234 грн</div>
                                <div className="shopping__item shopping__delivery">обрабатывается</div>
                                <div className="shopping__item shopping__payment">оплачен</div>
                                <div className="shopping__item shopping__action">
                                    <NavLink to="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                             className="shopping__icon">
                                        <img src={action01} alt="card"/></NavLink>
                                    <NavLink to={"/"} className="shopping__icon">
                                        <img src={act02} alt="close"/></NavLink>
                                    <NavLink to={"/"} className="shopping__icon">
                                        <img src={act03} alt="edit"/></NavLink>
                                    <NavLink to={"/"} className="shopping__icon">
                                        <img src={act04} alt="print"/></NavLink>
                                    <button className="shopping__icon shopping__icon-info-top-1">
                                        <img src={info} alt="info"/></button>


                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-1" style={{display:"block"}}>{/*this*/}
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"> </div>
                                    <div className="hide-shopping__label hide-shopping__label-top"> </div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src={omega_4} alt="omega_4"/>
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
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
                    {/*<div className="shopping-sale__top">
                        <div className="shopping-sale__body">
                            <div className="shopping__column shopping__column-top">
                                <div className="shopping-sale__item-top shopping-sale-top__1"></div>
                                <div className="shopping-sale__item-top shopping-sale-top__2"></div>
                                <div className="shopping-sale__item-top shopping-sale-top__id">ID</div>
                                <div className="shopping-sale__item-top shopping-sale-top__date">ДАТА СОЗДАНИЯ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__price">СТОИМОСТЬ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__delivery">СТАТУС ДОСТАВКИ
                                </div>
                                <div className="shopping-sale__item-top shopping-sale-top__payment">СТАТУС ОПЛАТЫ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__action">ДЕЙСТВИЯ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__type">ВИД ЗАКАЗА</div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-1"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-1">1</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-1">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                       className="shopping__icon"><img
                                        src="img/icons/actions/action01.svg" alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>
                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-1">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-1">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-2"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-2">2</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-2">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-2">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-2">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-3"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-3">3</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-3">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-3">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-3">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-4"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-4">4</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-4">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-4">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-4">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-5"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-5">5</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-5">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-5">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-5">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-6"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-6">6</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-6">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-6">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-6">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-7"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-7">7</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-top-7">12345678</div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-top-7">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-7">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
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
                    </div>*/}
                    <div className="shopping__title">
                        Список оформления другими дистрибьюторами
                    </div>
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
                            <div className="shopping__column shopping__column ">
                                <div className="shopping__item shopping__1 shopping__1-1 active"> </div>
                                <div className="shopping__item shopping__2"> <span
                                    className="span__wrapper span__wrapper-1">1</span>
                                </div>
                                <div className="shopping__item shopping__id shopping__id-top-1">12345678</div>
                                <div className="shopping__item shopping__date">2021-11-01</div>
                                <div className="shopping__item shopping__price">1234 грн</div>
                                <div className="shopping__item shopping__delivery">обрабатывается</div>
                                <div className="shopping__item shopping__payment">оплачен</div>
                                <div className="shopping__item shopping__action">
                                    <NavLink to="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                             className="shopping__icon">
                                        <img src={action01} alt="card"/></NavLink>
                                    <NavLink to={"/"} className="shopping__icon">
                                        <img src={act02} alt="close"/></NavLink>
                                    <NavLink to={"/"} className="shopping__icon">
                                        <img src={act03} alt="edit"/></NavLink>
                                    <NavLink to={"/"} className="shopping__icon">
                                        <img src={act04} alt="print"/></NavLink>
                                    <button className="shopping__icon shopping__icon-info-top-1">
                                        <img src={info} alt="info"/></button>


                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-top-1" style={{display:"block"}}>{/*this*/}
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"> </div>
                                    <div className="hide-shopping__label hide-shopping__label-top"> </div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src={omega_4} alt="omega_4"/>
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
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
                    {/*<div className="shopping-sale__bottom">
                        <div className="shopping-sale__body">
                            <div className="shopping__column shopping__column-top">
                                <div className="shopping-sale__item-top shopping-sale-top__1"></div>
                                <div className="shopping-sale__item-top shopping-sale-top__2"></div>
                                <div className="shopping-sale__item-top shopping-sale-top__id">ID</div>
                                <div className="shopping-sale__item-top shopping-sale-top__date">ДАТА СОЗДАНИЯ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__price">СТОИМОСТЬ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__delivery">СТАТУС ДОСТАВКИ
                                </div>
                                <div className="shopping-sale__item-top shopping-sale-top__payment">СТАТУС ОПЛАТЫ</div>
                                <div className="shopping-sale__item-top shopping-sale-top__action">ДЕЙСТВИЯ</div>
                                <div className="shopping-sale__item-top shopping-sale__type">ВИД ЗАКАЗА</div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-1"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-1">1</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-1">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-1">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-1">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-2"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-2">2</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-2">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-2">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-2">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-3"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-3">3</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-3">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-3">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-3">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-4"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-4">4</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-4">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-4">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-4">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-5"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-5">5</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-5">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-5">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-5">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-6"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-6">6</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-6">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-6">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-6">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping__column shopping__column">
                                <div className="shopping-sale__item shopping-sale__1 shopping__1-bottom-7"></div>
                                <div className="shopping-sale__item shopping-sale__2"><span
                                    className="span__wrapper span__wrapper-7">7</span></div>
                                <div className="shopping-sale__item shopping-sale__id shopping__id-bottom-7">12345678
                                </div>
                                <div className="shopping-sale__item shopping-sale__date">2021-11-01</div>
                                <div className="shopping-sale__item shopping-sale__price">1234 грн</div>
                                <div className="shopping-sale__item shopping-sale__delivery">обрабатывается</div>
                                <div className="shopping-sale__item shopping-sale__payment">оплачен</div>
                                <div className="shopping-sale__item shopping-sale__action">
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/action01.svg"
                                                                                alt="card"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms02.svg"
                                                                                alt="close"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms03.svg"
                                                                                alt="edit"></a>
                                    <a href="#" className="shopping__icon"><img src="img/icons/actions/actioms04.svg"
                                                                                alt="print"></a>


                                </div>
                                <div className="shopping-sale__item shopping-sale__type">отложенный
                                    <button className="shopping__icon shopping__icon-info shopping__icon-info-bottom-7">
                                        <img
                                            src="img/icons/actions/info.svg" alt="info"></button>
                                </div>
                            </div>
                            <div className="shopping__hide hide-shopping hide-shopping-bottom-7">
                                <div className="hide-shopping__column hide-shopping__column-top">
                                    <div className="hide-shopping__icon hide-shopping__icon-top"></div>
                                    <div className="hide-shopping__label hide-shopping__label-top"></div>
                                    <div className="hide-shopping__quantiti hide-shopping__quantiti-top">КОЛИЧЕСТВО
                                    </div>
                                    <div className="hide-shopping__price hide-shopping__price-top">СТОИМОСТЬ</div>
                                    <div className="hide-shopping__points hide-shopping__points-top">БАЛЛЫ</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__column">
                                    <div className="hide-shopping__icon"><img src="img/omega_4.webp" alt="omega_4">
                                    </div>
                                    <div className="hide-shopping__label">Комплекс Омега+</div>
                                    <div className="hide-shopping__quantiti">2</div>
                                    <div className="hide-shopping__price">288 грн</div>
                                    <div className="hide-shopping__points">125 Б</div>
                                </div>
                                <div className="hide-shopping__bottom bottom-hide-shopping">
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего баллов:</div>
                                        <div className="bottom-hide-shopping__points">406 б</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">размер кешбека:</div>
                                        <div className="bottom-hide-shopping__points">500 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__item">
                                        <div className="bottom-hide-shopping__label">всего денег:</div>
                                        <div className="bottom-hide-shopping__points">1000 грн</div>
                                    </div>
                                    <div className="bottom-hide-shopping__total">
                                        <div className="bottom-hide-shopping__total-label">(из них оплачено бонусами)
                                        </div>
                                        <div className="bottom-hide-shopping__total-point">500 грн</div>
                                    </div>
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
                    </div>*/}
                </div>
                {/*<div className="shopping-sale__mobile mobile-shopping">
                    <div className="mobile-shopping__top">
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-1"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-1">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-2"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-2">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-3"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-3">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-4"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-4">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-5"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-5">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__total total-mobile-shopping">
                            <div className="total-mobile-shopping__item">
                                <div className="total-mobile-shopping__sum">СУММА В ГРН:</div>
                                <div className="total-mobile-shopping__num">2880 грн</div>
                            </div>
                            <div className="total-mobile-shopping__item">
                                <div className="total-mobile-shopping__sum">КОЛИЧЕСТВО:</div>
                                <div className="total-mobile-shopping__num">6</div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-shopping__title">СПИСОК ОФОРМЛЕНИЯ
                        ДРУГИМИ ДИСТРИБЬЮТЕРАМИ
                    </div>
                    <div className="mobile-shopping__bottom">
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-bottom-1"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-bottom-1">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-bottom-2"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hid-bottome-2">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-bottom-3"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-bottom-3">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-bottom-4"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-bottom-4">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__unit">
                            <div className="mobile-shopping__header header-mobile-shopping">
                                <div className="header-mobile-shopping__id">12345</div>
                                <div className="header-mobile-shopping__date">2021-11-01</div>
                                <div className="header-mobile-shopping__sum">1234 грн</div>
                                <div className="header-mobile-shopping__info header-mobile-shopping__info-bottom-5"><img
                                    src="img/icons/actions/info.svg" alt="info">
                                </div>
                            </div>
                            <div className="mobile-shopping__body">
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__delivery">СТАТУС ДОСТАВКИ</div>
                                    <div className="mobile-shopping__deliverystatus">обрабатывается</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__payment">СТАТУС ОПЛАТЫ</div>
                                    <div className="mobile-shopping__paymentstatus">оплачен</div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__actions">ДЕЙСТВИЯ</div>
                                    <div className="mobile-shopping__actions-row">
                                        <a href="https://www.youtube.com/watch?v=m9adTAhvPNY"
                                           className="shopping__icon"><img
                                            src="img/icons/actions/action01.svg" alt="card"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms02.svg"
                                            alt="close"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms03.svg"
                                            alt="edit"></a>
                                        <a href="#" className="shopping__icon"><img
                                            src="img/icons/actions/actioms04.svg"
                                            alt="print"></a>
                                    </div>
                                </div>
                                <div className="mobile-shopping__item">
                                    <div className="mobile-shopping__type">ВИД ЗАКАЗА</div>
                                    <div className="mobile-shopping__typetstatus">отложенный</div>
                                </div>
                            </div>
                            <div className="mobile-shopping-hide mobile-shopping-hide-bottom-5">
                                <div className="mobile-shopping-hide__body">
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                    <div className="mobile-shopping-hide__item">
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__icon"><img src="img/omega_4.webp"
                                                                                             alt="omega_4">
                                            </div>
                                            <div className="mobile-shopping-hide__title">Комплекс Омега+</div>
                                        </div>
                                        <div className="mobile-shopping-hide__column">
                                            <div className="mobile-shopping-hide__old-price"> 203 грн</div>
                                            <div className="mobile-shopping-hide__new-price"> 180 грн</div>
                                        </div>
                                    </div>
                                    <div className="mobile-shopping-hide__row">
                                        <div className="mobile-shopping-hide__quantiti">кол-во: <span>2</span></div>
                                        <div className="mobile-shopping-hide__points">баллы: <span>10</span></div>
                                    </div>
                                </div>
                                <div className="mobile-shopping-hide__total total-mobile-shopping-hide">
                                    <div className="total-mobile-shopping-hide__item">
                                        всего баллов:
                                        <span> 406 б</span>
                                    </div>
                                    <div className="total-mobile-shopping-hide__item">
                                        размер кешбека:
                                        <span> 500 грн</span>
                                    </div>

                                    <div className="total-mobile-shopping-hide__item">
                                        всего денег:
                                        <span>1000 грн</span>
                                    </div>
                                    <div
                                        className="total-mobile-shopping-hide__item total-mobile-shopping-hide__item-light">
                                        (из них оплачено бонусами):
                                        <span>500 грн</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-shopping__total total-mobile-shopping">
                            <div className="total-mobile-shopping__item">
                                <div className="total-mobile-shopping__sum">СУММА В ГРН:</div>
                                <div className="total-mobile-shopping__num">2880 грн</div>
                            </div>
                            <div className="total-mobile-shopping__item">
                                <div className="total-mobile-shopping__sum">КОЛИЧЕСТВО:</div>
                                <div className="total-mobile-shopping__num">6</div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    );
};

export default MyOrdersSale;