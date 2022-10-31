import React from 'react';
import {NavLink} from "react-router-dom";
import UserInfo from "../../Components/User/UserInfo";

const Receipt = () => {
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">МОЙ ЧЕК</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__user user">
                <div className="user__row">
                    <div className="user__column">
                        <UserInfo />
                    </div>
                    <div className="user__column">
                        <div className="user-receipt">
                            <div className="user-receipt__top">
                                <div className="user-receipt__icon"> </div>
                                <div className="user-receipt__label">МПИ/АВГУСТ, 2022</div>
                            </div>
                            <div className="user-receipt__sum">16 335<span>Б</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__receipt receipt">
                <div className="receipt__item item-receipt item-receipt-1 active">
                    <div className="item-receipt__body item-receipt__body-1 active">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">1 УРОВЕНЬ<span>20%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list" style={{display:"block"}}>
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Щипка Оксана <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Васильева Юлия <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">20 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">0 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Кузьмина Яна <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="receipt__item item-receipt item-receipt-2">
                    <div className="item-receipt__body item-receipt__body-2">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">2 УРОВЕНЬ<span>5%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list">
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="receipt__item item-receipt item-receipt-3">
                    <div className="item-receipt__body item-receipt__body-3">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">3 УРОВЕНЬ<span>5%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list">
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="receipt__item item-receipt item-receipt-4">
                    <div className="item-receipt__body item-receipt__body-4">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">4 УРОВЕНЬ<span>5%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list">
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="receipt__item item-receipt item-receipt-5">
                    <div className="item-receipt__body item-receipt__body-5">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">5 УРОВЕНЬ<span>5%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list">
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="receipt__item item-receipt item-receipt-6">
                    <div className="item-receipt__body item-receipt__body-6">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">6 УРОВЕНЬ<span>5%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list">
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="receipt__item item-receipt item-receipt-7">
                    <div className="item-receipt__body item-receipt__body-7">
                        <div className="item-receipt__arrow"> </div>
                        <div className="item-receipt__level">7 УРОВЕНЬ<span>5%</span></div>
                        <div className="item-receipt__values values-receipt">
                            <div className="values-receipt__value">15600 V</div>
                            <div className="values-receipt__divider">/</div>
                            <div className="values-receipt__value">3120 Б</div>
                        </div>
                    </div>
                    <ul className="item-receipt__list">
                        <li className="item-receipt__li ">
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                            <div className="sub-item-receipt__item item-sub">
                                <div className="item-sub__name">Самойлов Евгений <span>20%</span></div>
                                <div className="item-sub__values">
                                    <div className="item-sub__value">2 850 V</div>
                                    <div className="item-sub__divider">/</div>
                                    <div className="item-sub__value">570 Б</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Receipt;