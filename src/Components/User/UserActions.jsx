import React from 'react';
import {NavLink} from "react-router-dom";
import user_icon_01 from "../../assets/img/icons/actions-user_icon_01.svg";
import user_icon_02 from "../../assets/img/icons/actions-user_icon_02.svg";
import user_icon_03 from "../../assets/img/icons/actions-user_icon_03.svg";

const UserActions = () => {
    return <div className="user__column">
        <div className="user__actions actions-user">
            <div className="actions-user__column">
                <NavLink to={"/receipt"} className="actions-user__item">
                    <div className="actions-user__icon actions-user__icon-brown"><img
                        src={user_icon_01} alt="actions-user_icon"/></div>
                    <div className="actions-user__title">Мой чек</div>
                </NavLink>
            </div>
            <div className="actions-user__column">
                <NavLink to={"/my_team"} className="actions-user__item">
                    <div className="actions-user__icon actions-user__icon-green"><img
                        src={user_icon_02} alt="actions-user_icon"/></div>
                    <div className="actions-user__title">Моя команда</div>
                </NavLink>
            </div>
            <div className="actions-user__column">
                <NavLink to={"/my_accounts"} className="actions-user__item">
                    <div className="actions-user__icon actions-user__icon-blue"><img
                        src={user_icon_03} alt="actions-user_icon"/></div>
                    <div className="actions-user__title">Мои счета</div>
                </NavLink>
            </div>
        </div>
    </div>

};

export default UserActions;