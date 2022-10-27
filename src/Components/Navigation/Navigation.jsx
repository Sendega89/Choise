import React, {useState} from 'react';
import side from '../../assets/img/side.webp';
import side_action from '../../assets/img/side_action.webp';
import side_action_phome from '../../assets/img/side_action_phome.webp';


const Navigation = () => {
const [activeMenu,setActiveMenu] = useState(false);

    return (
        <aside className="page__side animate__animated animate__fadeInLeft">
            <nav data-da=".menu__body,850.98" className="page-menu menu-page">
                <a href="#" className="menu-page__link menu-page__link-01 menu-page__link-arrow">Мой
                    бизнес<span></span></a>
                <ul className="menu-page__list">
                    <li className="menu-page__item">
                        <a href="#" className="menu-page__sub-link">Моя команда</a>
                    </li>
                    <li className="menu-page__item">
                        <a href="#" className="menu-page__sub-link active">Мое вознагрождение</a>
                    </li>
                    <li className="menu-page__item">
                        <a href="#" className="menu-page__sub-link">Мои счета</a>
                    </li>
                    <li className="menu-page__item">
                        <a href="#" className="menu-page__sub-link">Мои заказы</a>
                    </li>
                    <li className="menu-page__item">
                        <a href="#" className="menu-page__sub-link">Моя динамика</a>
                    </li>
                </ul>
                <a href="#" className="menu-page__link menu-page__link-02">Сообщения</a>
                <a href="#" className="menu-page__link menu-page__link-03">Регистрация партнера/
                    клиента</a>
                <a href="#" className="menu-page__link menu-page__link-04">Маркетинг план и
                    промоушн</a>
                <a href="#" className="menu-page__link menu-page__link-05">Новости</a>
                <a href="#" className="menu-page__link menu-page__link-06">Лидеры компании</a>
                <a href="#"
                   className="menu-page__link menu-page__link-07 menu-page__link-arrow"
                onClick={()=>setActiveMenu(!activeMenu)}
                >Обучение<span></span></a>
                    <ul className="menu-page__list" >
                        <li className="menu-page__item">
                            <a href="#" className="menu-page__sub-link">Модуль 1 - Новичок</a>
                        </li>
                        <li className="menu-page__item">
                            <a href="#" className="menu-page__sub-link">Модуль 2 - Активный партнер</a>
                        </li>
                        <li className="menu-page__item">
                            <a href="#" className="menu-page__sub-link">Модуль 3 - Менеджер</a>
                        </li>
                        <li className="menu-page__item">
                            <a href="#" className="menu-page__sub-link">Модуль 4 - Лидер группы</a>
                        </li>
                        <li className="menu-page__item">
                            <a href="#" className="menu-page__sub-link">Модуль 5 - Лидер организации</a>
                        </li>
                    </ul>


                <a href="#" className="menu-page__link menu-page__link-08">Медиабаза</a>
                <a href="#" className="menu-page__link menu-page__link-09">Личный профиль </a>
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