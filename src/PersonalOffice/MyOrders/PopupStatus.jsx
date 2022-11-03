import React from 'react';
import {Link} from "react-router-dom";

const PopupStatus = () => {
    return (
        <div id="popup-1" className="popup popup-1 open">
            <div className="popup__body">
                <div className="popup__content">
                    <Link to="/my_orders_sale" className="popup__close close-popup ">x</Link>
                    <div className="popup__item item-top-popup">
                        <div className="item-top-popup__title">Статус вашего заказа</div>
                        <div className="item-top-popup__row">
                            <div className="item-top-popup__column">
                                <div className="item-top-popup__unit unit-popup">
                                    <div className="unit-popup__row-top">
                                        <div className="unit-popup__number">1</div>
                                        <div className="unit-popup__line"> </div>
                                    </div>
                                    <div className="unit-popup__create">Создание заказа</div>
                                    <div className="unit-popup__date">20.09.2021 22:15:39</div>
                                </div>
                            </div>
                            <div className="item-top-popup__column">
                                <div className="item-top-popup__unit unit-popup">
                                    <div className="unit-popup__row-top">
                                        <div className="unit-popup__number">2</div>
                                        <div className="unit-popup__line"> </div>
                                    </div>
                                    <div className="unit-popup__create">Редактирование</div>
                                    <div className="unit-popup__date">20.09.2021 22:15:39</div>
                                </div>
                            </div>
                            <div className="item-top-popup__column">
                                <div className="item-top-popup__unit unit-popup">
                                    <div className="unit-popup__row-top">
                                        <div className="unit-popup__number">3</div>
                                        <div className="unit-popup__line"> </div>
                                    </div>
                                    <div className="unit-popup__create">Подтверждение клиентом</div>
                                    <div className="unit-popup__date">20.09.2021 22:15:39</div>
                                </div>
                            </div>
                            <div className="item-top-popup__column">
                                <div className="item-top-popup__unit unit-popup">
                                    <div className="unit-popup__row-top">
                                        <div className="unit-popup__number">4</div>
                                        <div className="unit-popup__line"> </div>
                                    </div>
                                    <div className="unit-popup__create">Оплата заказа</div>
                                    <div className="unit-popup__date">20.09.2021 22:15:39</div>
                                </div>
                            </div>
                            <div className="item-top-popup__column">
                                <div className="item-top-popup__unit unit-popup">
                                    <div className="unit-popup__row-top">
                                        <div className="unit-popup__number">5</div>
                                        <div className="unit-popup__line unit-popup__line-gray"> </div>
                                    </div>
                                    <div className="unit-popup__create">Подтверждение логистикой</div>
                                    <div className="unit-popup__date">20.09.2021 22:15:39</div>
                                </div>
                            </div>
                            <div className="item-top-popup__column">
                                <div className="item-top-popup__unit unit-popup">
                                    <div className="unit-popup__row-top">
                                        <div className="unit-popup__number unit-popup__number-gray">6</div>
                                    </div>
                                    <div className="unit-popup__create">Отправка логистикой</div>
                                    <div className="unit-popup__date">20.09.2021 22:15:39</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popup__item item-top-popup item-top-popup-bottom">

                        <div className="item-top-popup__title">Информация о заказе</div>
                        <div className="item-top-popup__id">ID 12345</div>
                        <div className="item-top-popup-bottom__row">
                            <div className="item-top-popup-bottom__column">
                                <div className="item-top-popup-bottom__item item-bottom-popup">
                                    <div className="item-bottom-popup__unit">Дата проведения: <span>19.09.2021</span>
                                    </div>
                                    <div className="item-bottom-popup__unit">Дата
                                        создания: <span>20.09.2021 22:15:39</span></div>
                                    <div className="item-bottom-popup__unit">Статус
                                        доставки: <span>обрабатывается</span></div>
                                    <div className="item-bottom-popup__unit">Статус оплаты: <span>оплачен:</span></div>
                                    <div className="item-bottom-popup__unit">Вид оплаты: <span>карточка</span></div>
                                    <div className="item-bottom-popup__unit">Способ доставки: <span>новая почта</span>
                                    </div>
                                    <div className="item-bottom-popup__unit">Город доставки: <span>Харьков</span></div>
                                    <div className="item-bottom-popup__unit">Отделение/Адрес: <span>отделение</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-top-popup-bottom__column">
                                <div className="item-top-popup-bottom__item item-bottom-popup">
                                    <div className="item-bottom-popup__unit">Адрес доставки: <span>отделение №10</span>
                                    </div>
                                    <div className="item-bottom-popup__unit">Время доставки: <span>20.09.2021</span>
                                    </div>
                                    <div className="item-bottom-popup__unit">ФИО
                                        получателя: <span>Иванов Иван Иванович</span></div>
                                    <div className="item-bottom-popup__unit">Телефон получателя: <span>0938883366</span>
                                    </div>
                                    <div className="item-bottom-popup__unit">ТТН: <span>11144455522288894</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item-top-popup__buttons">
                            <div className="item-top-popup__btn btn-main btn-main-dark">Удалить</div>
                            <Link to="/popup_reduction" className="item-top-popup__btn btn-main popup-link">редактировать</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupStatus;