import React from 'react';
import {Link} from "react-router-dom";

const PopupRedactionOrder = () => {
    return (
        <div id="popup-2" className="popup popup-2 open">
            <div className="popup__body">
                <div className="popup__content">
                    <Link to="/my_orders_sale" className="popup__close close-popup">x</Link>
                    <div className="popup__item-edit item-edit">
                        <div className="item-edit__titl">Редактировать заказ</div>
                        <form action="#" className="item-edit__form">
                            <div className="item-edit__row">
                                <div className="item-edit__column item-edit__colum1">
                                    <div className="item-edit__item">
                                        <label htmlFor="contact" className="item-edit__label">Изменить контакт
                                            получателя</label>
                                        <input id="contact" placeholder="Введите новый контакт" type="text"
                                               name="contact"
                                               className="item-edit__input"/>
                                    </div>
                                    <div className="item-edit__item">
                                        <label className="item-edit__label">Изменить способ доставки</label>
                                        <div className="item-edit__unit">
                                            <div className="item-edit__options">
                                                <div className="item-edit-options__item">
                                                    <input id="departmentNp" checked type="radio" value="departmentNp"
                                                           name="shipping"
                                                           className="item-edit-options__input"/>
                                                        <label htmlFor="departmentNp"
                                                               className="item-edit-options__label item-edit-options__label-wrap"><span>Доставка в
														отделение Новой почты</span></label>
                                                </div>
                                                <div className="item-edit-options__item">
                                                    <input id="selfKyiv" type="radio" value="selfKyiv" name="shipping"
                                                           className="item-edit-options__input"/>
                                                        <label htmlFor="selfKyiv"
                                                               className="item-edit-options__label"><span>Самовывоз в Киеве с
														логистического
														центра компании</span></label>
                                                </div>
                                                <div className="item-edit-options__item">
                                                    <input id="curierKyiv" type="radio" value="curierKyiv"
                                                           name="shipping"
                                                           className="item-edit-options__input"/>
                                                        <label htmlFor="curierKyiv"
                                                               className="item-edit-options__label item-edit-options__label-wrap"><span>Доставка
														курьером по Киеву</span></label>
                                                </div>
                                                <div className="item-edit-options__item">
                                                    <input id="departmentNotNp" type="radio" value="departmentNotNp"
                                                           name="shipping"
                                                           className="item-edit-options__input"/>
                                                        <label htmlFor="departmentNotNp"
                                                               className="item-edit-options__label item-edit-options__label-wrap"><span>Другая
														служба доставки</span></label>
                                                </div>
                                            </div>
                                            <input id="city" placeholder="Город" type="text" name="city"
                                                   className="item-edit__input item-edit__input-gray"/>
                                                <input id="department" placeholder="Отделение" type="text"
                                                       name="department"
                                                       className="item-edit__input item-edit__input-gray"/>
                                                    <input id="address" placeholder="Адрес" type="text" name="address"
                                                           className="item-edit__input item-edit__input-gray"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-edit__column">
                                    <div data-da=".item-edit__column,850.98,1" className="item-edit__item">
                                        <label htmlFor="name" className="item-edit__label">Изменить имя
                                            получателяя</label>
                                        <input id="name" placeholder="Выберите имя получателя" type="text" name="name"
                                               className="item-edit__input"/>
                                    </div>
                                    <div className="item-edit__item">
                                        <label htmlFor="paymentType" className="item-edit__label">Изменить способ
                                            оплаты</label>
                                        <input id="paymentType" placeholder="Выберите способ оплаты" type="text"
                                               name="paymentType"
                                               className="item-edit__input"/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="item-edit__button btn-main">сохранить изменения</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupRedactionOrder;