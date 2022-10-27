import React from 'react';
import user_photo from '../../assets/img/user_photo.webp';
import user_icon_01 from  '../../assets/img/icons/actions-user_icon_01.svg';
import user_icon_02 from  '../../assets/img/icons/actions-user_icon_02.svg';
import user_icon_03 from  '../../assets/img/icons/actions-user_icon_03.svg';


const User = () => {
    return (
        <div className="page__user user">
            <div className="user__row">
                <div className="user__column">
                    <div className="user__item item-user">
                        <div className="item-user__column">
                            {/* <div className="item-user__photo ibg">*/}
                            <div className="item-user__photo ">
                                <img src={user_photo} alt="user_photo"/>
                            </div>
                            <div className="item-user__label">Ukraine, Kyev</div>
                        </div>
                        <div className="item-user__column">
                            <div className="item-user__name name">Анна Бондаренко</div>
                            <a href="tel:0951458725" className="item-user__phone">095-1458725</a>
                            <div className="item-user__mark mark">MG</div>
                        </div>
                    </div>
                </div>
                <div className="user__column">
                    <div className="user__actions actions-user">
                        <div className="actions-user__column">
                            <a href="/" className="actions-user__item">
                                <div className="actions-user__icon actions-user__icon-brown"><img
                                    src={user_icon_01} alt="actions-user_icon"/></div>
                                <div className="actions-user__title">Мой чек</div>
                            </a>
                        </div>
                        <div className="actions-user__column">
                            <a href="/" className="actions-user__item">
                                <div className="actions-user__icon actions-user__icon-green"><img
                                    src={user_icon_02} alt="actions-user_icon"/></div>
                                <div className="actions-user__title">Моя команда</div>
                            </a>
                        </div>
                        <div className="actions-user__column">
                            <a href="/" className="actions-user__item">
                                <div className="actions-user__icon actions-user__icon-blue"><img
                                    src={user_icon_03} alt="actions-user_icon"/></div>
                                <div className="actions-user__title">Мои счета</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;