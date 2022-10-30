import React from 'react';
import user_photo from '../../assets/img/user_photo.webp';



const UserInfo = () => {
    return (
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
    );
};

export default UserInfo;