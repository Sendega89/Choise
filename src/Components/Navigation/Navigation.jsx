import React, { useState} from 'react';
import side from '../../assets/img/side.webp';
import side_action from '../../assets/img/side_action.webp';
import side_action_phome from '../../assets/img/side_action_phome.webp';
import {Link, NavLink} from "react-router-dom";


const Navigation = () => {
const [activeMenu,setActiveMenu] = useState(false);
const [activeEducation,setActiveEducation] = useState(false)

    return (
        <aside className="page__side animate__animated animate__fadeInLeft">
            <nav data-da=".menu__body,850.98" className="page-menu menu-page">
                <Link to={"/personal_cabinet"}
                      onClick={()=>setActiveMenu(!activeMenu)}
                      className={`menu-page__link menu-page__link-01 menu-page__link-arrow ${activeMenu && "active"}`}>Мой
                    бизнес<span> </span> </Link>

                <ul className="menu-page__list " style={{display:activeMenu?"block":"none"}}>
                    <li className="menu-page__item">
                        <NavLink to={"/my_business/my_team"} className="menu-page__sub-link">Моя команда</NavLink>
                    </li>
                    <li className="menu-page__item">
                        <NavLink to={"/my_business/my_bonus"} className="menu-page__sub-link">Мое вознагрождение</NavLink>
                    </li>
                    <li className="menu-page__item">
                        <NavLink to={"my_accounts"} className="menu-page__sub-link">Мои счета</NavLink>
                    </li>
                    <li className="menu-page__item">
                        <NavLink to={"/my_business/my_orders"} className="menu-page__sub-link">Мои заказы</NavLink>
                    </li>
                    <li className="menu-page__item">
                        <NavLink to={"my_dynamic"} className="menu-page__sub-link">Моя динамика</NavLink>
                    </li>
                </ul>
                <NavLink to={"/messages"} className="menu-page__link menu-page__link-02">Сообщения</NavLink>
                <NavLink to={"/partner_registration"} className="menu-page__link menu-page__link-03">Регистрация партнера/
                    клиента</NavLink>
                <NavLink to={"/promotion"} className="menu-page__link menu-page__link-04">Маркетинг план и
                    промоушн</NavLink>
                <NavLink to={"/news"} className="menu-page__link menu-page__link-05">Новости</NavLink>
                <NavLink to={"/company_leaders"} className="menu-page__link menu-page__link-06">Лидеры компании</NavLink>
                <NavLink to={"/education"}
                   className="menu-page__link menu-page__link-07 menu-page__link-arrow"
onClick={()=>setActiveEducation(!activeEducation)}
                    >Обучение<span> </span></NavLink>
                    <ul className="menu-page__list" style={{display:activeEducation?"block":"none"}}  >
                        <li className="menu-page__item">
                            <NavLink to={"/beginner"} className="menu-page__sub-link">Модуль 1 - Новичок</NavLink>
                        </li>
                        <li className="menu-page__item">
                            <NavLink to={"/active_partner"} className="menu-page__sub-link">Модуль 2 - Активный партнер</NavLink>
                        </li>
                        <li className="menu-page__item">
                            <NavLink to={"/manager"} className="menu-page__sub-link">Модуль 3 - Менеджер</NavLink>
                        </li>
                        <li className="menu-page__item">
                            <NavLink to={"/lid"} className="menu-page__sub-link">Модуль 4 - Лидер группы</NavLink>
                        </li>
                        <li className="menu-page__item">
                            <NavLink to={"/all_lid"} className="menu-page__sub-link">Модуль 5 - Лидер организации</NavLink>
                        </li>
                    </ul>


                <NavLink to={"/media"} className="menu-page__link menu-page__link-08">Медиабаза</NavLink>
                <NavLink to={"/profile"} className="menu-page__link menu-page__link-09">Личный профиль </NavLink>
                <button className="menu-page__btn btn-side">Выйти</button>
            </nav>
            <div data-da=".page__content,850.98,1" className="page__body">
                <div className="page__column">
                    <div className="page__bonus bonus-side">
                        <div className="bonus-side__label">Ваш бонус</div>
                        <div className="bonus-side__price">150<span></span></div>
                        {/*<div className="bonus-side__bg ibg">*/}
                        <div className="bonus-side__bg">
                            <img src={side} alt="action"/></div>
                    </div>
                </div>
                <div className="page__column">
                    <div className="page__action action-side">
                        <div className="action-side__title">Coming
                            soon
                        </div>
                        {/*<div className="action-side__bg ibg">*/}
                        <div className="action-side__bg">
                            <img src={side_action} alt="action"/></div>
                        {/*<div className="action-side__bgphone ibg">*/}
                        <div className="action-side__bgphone">
                            <img src={side_action_phome} alt="action"/></div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Navigation;