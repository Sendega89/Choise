import React from 'react';
import UserInfo from "../../Components/User/UserInfo";
import {NavLink} from "react-router-dom";
import Qualification from "../../Components/Slider/Qualification";
import QualificationChart from "../../Components/Charts/QualificationChart";
import QualificationChartTeamValue from "../../Components/Charts/QualificationChartTeamValue";
import QualificationChartTeamBeginer from "../../Components/Charts/QualificationChartTeamBeginer";
const PersonalDynamic = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">ЛИЧНая Динамика</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__user user">
                <div className="user__row">
           <UserInfo />
            <div className="user__column">
                <div className="user__actions actions-user">
                    <div className="actions-user__column-dinamic">
                        <a href="#" className="actions-user__item-dinamic">
                            <div className="actions-user__title-dinamic">Ближайшая квалификация</div>
                            <div className="actions-user__icon-dinamic mark">ms</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="page__chart chart">
                <div className="chart__header header-chart">
                    <div className="header-chart__row">
                        <div className="header-chart__column">
                            <div className="header-chart__volume name">Командный обьем</div>
                            <div className="header-chart__rate">5,345 Б <span>+25%</span></div>
                        </div>
                        <div className="header-chart__column">
                            <div className="header-chart__data data-chart">
                                <div className="data-chart__item data-chart__item-current">поточный месяц</div>
                                <div className="data-chart__item">предыдущий месяц</div>
                                <div className="data-chart__form">
                                    <form action="#" className="form-chart">
                                        <select name="period" className="form-chart__select"
                                                defaultValue={"АВГУСТ, 2022"}>
                                            <option value="АВГУСТ, 2022" >АВГУСТ, 2022</option>
                                            <option value="СЕНТЯБРЬ, 2022">СЕНТЯБРЬ, 2022</option>
                                            <option value="ОКТЯБРЬ, 2022">ОКТЯБРЬ, 2022</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="header-chart__indicators">
                                <div className="header-chart__indicator">Средний показатель</div>
                                <div className="header-chart__point">250 (5 <span>Б</span>)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart__main main-chart">
                    <QualificationChart />
                </div>
            </div>
            <div className="page__qualification-dinamic qualification-dinamic">
                <div className="qualification-dinamic__title title">До следующей <br/> квалификации вам надо:</div>
                <Qualification />
            </div>
            <div className="page__volume volume">
                <div className="volume__row">
                    <div className="volume__column">
                        <div className="volume__title">Командный обьем</div>
                        <div className="volume__chart-left left-chart">
                            <QualificationChartTeamValue />

                        </div>
                    </div>
                    <div className="volume__column">
                        <div className="volume__top-right">
                            <div className="volume__title ">Команда (новички)</div>
                            <div className="volume__stats">
                                <div className="volume__stat volume__stat-deleted">удалено</div>
                                <div className="volume__stat">зарегистрировано</div>
                            </div>
                        </div>
                        <div className="volume__chart-right right-chart">
                            <QualificationChartTeamBeginer />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__teamleaders teamleaders">
                <div className="teamleaders__title name">Лидеры команды</div>
                <div className="teamleaders__filter filter">
                    <button className="filter__btn btn-main btn-main-plus"><span> </span> добавить фильтр</button>
                    <div className="filter__form form-filter">
                        <form action="#" className="form-filter">
                            <select name="volume"
                                    className="form-filter__select"
                                    defaultValue={"ЛИЧНОГО ОБЬЕМА"}>
                                <option value="ЛИЧНОГО ОБЬЕМА">ЛИЧНОГО ОБЬЕМА</option>
                                <option value="ЛИЧНОГО ОБЬЕМА">ЛИЧНОГО ОБЬЕМА</option>
                                <option value="ЛИЧНОГО ОБЬЕМА">ЛИЧНОГО ОБЬЕМА</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="teamleaders__row">
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleaders__column">
                        <div className="teamleaders__item item-team">
                            <div className="item-team__column">
                                <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                            </div>
                            <div className="item-team__column">
                                <div className="item-team__point">2250 Б</div>
                            </div>
                        </div>
                    </div>
                    <div className="teamleader-hidden-columns">
                        <div className="teamleaders__column">
                            <div className="teamleaders__item item-team">
                                <div className="item-team__column">
                                    <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                                </div>
                                <div className="item-team__column">
                                    <div className="item-team__point">2250 Б</div>
                                </div>
                            </div>
                        </div>
                        <div className="teamleaders__column">
                            <div className="teamleaders__item item-team">
                                <div className="item-team__column">
                                    <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                                </div>
                                <div className="item-team__column">
                                    <div className="item-team__point">2250 Б</div>
                                </div>
                            </div>
                        </div>
                        <div className="teamleaders__column">
                            <div className="teamleaders__item item-team">
                                <div className="item-team__column">
                                    <div className="item-team__name">Кривошапко Елена<span>2 линия</span></div>
                                </div>
                                <div className="item-team__column">
                                    <div className="item-team__point">2250 Б</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button data-show="true" className="teamleaders__btn btn-main">смотреть БОЛЬШЕ</button>
            </div>
            <div className="page__history history">
                <div className="history__row">
                    <div className="history__column">
                        <div className="history__title name">История квалификаций</div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">менеджер</div>
                        </div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">менеджер групы</div>
                        </div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">менеджер</div>
                        </div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">менеджер сети</div>
                        </div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">менеджер сети</div>
                        </div>
                        <button className="history__btn btn-main">ПОКАЗАТЬ</button>
                    </div>
                    <div className="history__column">
                        <div className="history__title name">История маркетингплана</div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">1</div>
                        </div>
                        <div className="history__item">
                            <div className="history__date">с 2021-03 по 2021-05</div>
                            <div className="history__label">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDynamic;