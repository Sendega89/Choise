import React, {useState} from 'react';
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { NavLink} from "react-router-dom";
import side from "../../assets/img/side.webp";
import side_action from "../../assets/img/side_action.webp";
import side_action_phome from "../../assets/img/side_action_phome.webp";


const ProSideBar = () => {
    //const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    const [activeBusiness,setActiveBusiness] = useState(false);
    const [activeEducation,setActiveEducation] = useState(false);

    return (
        <aside className="page__side animate__animated animate__fadeInLeft">
            <Sidebar>
                <Menu className="page-menu menu-page ">
                    <SubMenu active={activeBusiness} className="menu-page__list" onOpenChange={()=>{
                        setActiveBusiness(!activeBusiness)
                    }} routerLink={
                        <NavLink to={"/personal_cabinet"} />
                    } className={`menu-page__link menu-page__link-01 menu-page__link-arrow `}
                             label={"Мой бизнес"}>
                        <MenuItem  routerLink={
                            <NavLink to={"my_team"} className="menu-page__sub-link"/>}>Моя
                            команда</MenuItem>
                        <MenuItem routerLink={<NavLink to={"my_bonus"} className="menu-page__sub-link"/>}>Мое
                            вознагрождение</MenuItem>
                        <MenuItem routerLink={<NavLink to={"my_accounts"} className="menu-page__sub-link"/>}>Мои
                            счета</MenuItem>
                        <MenuItem routerLink={<NavLink to={"my_orders"} className="menu-page__sub-link"/>}>Мои
                            заказы</MenuItem>
                        <MenuItem routerLink={<NavLink to={"my_dynamic"} className="menu-page__sub-link"/>}>Моя
                            динамика</MenuItem>
                    </SubMenu>
                    <MenuItem className="menu-page__link menu-page__link-02"
                              routerLink={<NavLink to={"/messages"}/>}>Сообщения</MenuItem>
                    <MenuItem className="menu-page__link menu-page__link-03"
                              routerLink={<NavLink to={"/partner_registration"}/>}>Регистрация партнера/<br/>
                        клиента</MenuItem>
                    <MenuItem className="menu-page__link menu-page__link-04"
                              routerLink={<NavLink to={"/marketing"}/>}>Маркетинг план и
                        промоушн</MenuItem>
                    <MenuItem className="menu-page__link menu-page__link-05"
                              routerLink={<NavLink to={"/news"}/>}>Новости</MenuItem>
                    <MenuItem className="menu-page__link menu-page__link-06"
                              routerLink={<NavLink to={"/company_leaders"}/>}>Лидеры компании</MenuItem>
                    <SubMenu onOpenChange={()=>setActiveEducation(!activeEducation)} active={activeEducation} className="menu-page__list"
                                className="menu-page__link menu-page__link-07 menu-page__link-arrow"
                             label={"Обучение"}>
                        <MenuItem className="menu-page__item"  routerLink={<NavLink to={"/education"}/>}>Модуль 1 - Новичок</MenuItem>
                        <MenuItem className="menu-page__item" routerLink={<NavLink to={"my_bonus"} className="menu-page__sub-link"/>}>Модуль 2 - Активный партнер</MenuItem>
                        <MenuItem className="menu-page__item" routerLink={<NavLink to={"my_accounts"} className="menu-page__sub-link"/>}>Модуль 3 - Менеджер</MenuItem>
                        <MenuItem className="menu-page__item" routerLink={<NavLink to={"my_orders"} className="menu-page__sub-link"/>}>Модуль 4 - Лидер группы</MenuItem>
                        <MenuItem className="menu-page__item" routerLink={<NavLink to={"my_dynamic"} className="menu-page__sub-link"/>}>Модуль 5 - Лидер организации</MenuItem>
                    </SubMenu>
                    <MenuItem className="menu-page__link menu-page__link-08"
                              routerLink={<NavLink to={"/media"} />}>Медиабаза</MenuItem>
                    <MenuItem className="menu-page__link menu-page__link-09"
                              routerLink={<NavLink to={"/personal_cabinet_update"} />}>Личный профиль</MenuItem>
                    <button className="menu-page__btn btn-side">Выйти</button>
                </Menu>
            </Sidebar>
            <div data-da=".page__content,850.98,1" className="page__body">
                <div className="page__column">
                    <div className="page__bonus bonus-side">
                        <div className="bonus-side__label">Ваш бонус</div>
                        <div className="bonus-side__price">150<span> </span></div>
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

export default ProSideBar;