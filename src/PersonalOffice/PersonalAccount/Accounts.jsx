import React from 'react';

const MyAccounts = () => {
    return (
            <div className="page__content">
                <div className="page__box">
                    <div className="page__title title">МОИ СЧЕТА</div>
                    <a href="index.html" className="page__back">Назад в офис <span></span></a>
                </div>
                <div className="page__user user">
                    <div className="user__row">
                        <div className="user__column">
                            <div className="user__item item-user">
                                <div className="item-user__column">
                                    <div className="item-user__photo ibg"><img src="img/user_photo.webp"
                                                                               alt="user_photo"/></div>
                                    <div className="item-user__label">Ukraine, Kyiv</div>
                                </div>
                                <div className="item-user__column">
                                    <div className="item-user__name name">Анна Бондаренко</div>
                                    <a href="tel:0951458725" className="item-user__phone">095-1458725</a>
                                    <div className="item-user__mark mark">MG</div>
                                </div>
                            </div>
                        </div>
                        <div className="user__column">
                            <div className="user-reward">
                                <div className="user-reward__top">
                                    <div className="user-reward__icon"></div>
                                    <div className="user-reward__label">Мое вознаграждение</div>
                                </div>
                                <div className="user-reward__sum">65 368 <span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page__accounts accounts">
                    <div className="accounts__row">
                        <div className="accounts__column">
                            <div className="accounts-stat">
                                <div className="accounts__title name">Мои счета</div>
                                <a href="#" className="accounts__item item-accounts">
                                    <div className="item-accounts__icon"><img src="img/accounts/flag.svg" alt="flag"/>
                                    </div>
                                    <div className="item-accounts__system">Украинская система <p>Счет/грн</p>
                                    </div>
                                    <div className="item-accounts__money">65 368 <span></span></div>
                                </a>
                                <a href="#" className="accounts__item item-accounts">
                                    <div className="item-accounts__icon">
                                        <img src="img/accounts/flag_eur.svg"
                                                                              alt="flag"/></div>
                                    <div className="item-accounts__system">Европейская система <p>Счет/euro</p>
                                    </div>
                                    <div className="item-accounts__money item-accounts__money-euro">200 <span></span>
                                    </div>
                                </a>
                                <button className="accounts__btn btn-main">ПОСМОТРЕТЬ ТРАНЗАКЦИИ</button>
                            </div>
                        </div>
                        <div className="accounts__column">
                            <div className="accounts-reward">
                                <a href="#" className="accounts-reward__item accounts-reward__item-money">
                                    Вывод вознаграждения
                                    {/*{<!-- <input id="outReward" placeholder="Вывод вознаграждения" type="text" name="outReward"
                                        class="accounts-reward__input"> -->}*/}
                                </a>
                                <a href="#" className="accounts-reward__item accounts-reward__item-transfer">
                                    Перевод
                                    {/*{ <!-- <input id="outReward" placeholder="Перевод" type="text" name="outReward"
                                        class="accounts-reward__input"> -->}*/}
                                </a>
                                <a href="#" className="accounts-reward__item accounts-reward__item-convert">
                                    Конвертация
                                    {/*{ <!-- <input id="outReward" placeholder="Конвертация" type="text" name="outReward"
                                        class="accounts-reward__input"> -->}*/}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page__bonus bonus">
                    <div className="bonus__body">
                        <div className="bonus__title">ПОЗДРАВЛЯЕМ!</div>
                        <div className="bonus__reward">В этом месяце вам начислено премию <span>3000</span></div>
                        <div className="bonus__text">За исполнения условий бонусной программы</div>
                        <div className="bonus__remains">До следующей премии тебе осталось 300 Б</div>
                    </div>
                    <div className="bonus__bg ibg">
                        <img src="img/accounts/bg.webp" alt="background"/></div>
                    <div className="bonus__bgphone ibg">
                        <img src="img/accounts/bg_phone.png" alt="background"/></div>
                </div>
                <div className="page__optima optima">
                    <div className="optima__title name">Насчитано OPTIMA</div>
                    <div className="optima__top">
                        <button className="optima__btn btn-main">АВГУСТ</button>
                        <div className="optima__total">4 271</div>
                    </div>
                    <div className="optima__items">
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">1</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">2</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">3</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">4</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">5</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                    </div>
                    <div className="optima-hide__items">
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">1</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">2</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">3</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">4</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                        <div className="optima__item item-optima">
                            <div className="item-optima__number">5</div>
                            <div className="item-optima__person">Кривошапко Елена</div>
                            <div className="item-optima__money">2 400</div>
                            <div className="item-optima__reward">720</div>
                        </div>
                    </div>
                    <button className="optima__btn optima__btn-alloptima optima__btn-bottom btn-main">ВСЕ OPTIMA
                    </button>
                </div>
                <div className="page__person-value person-value">
                    <div className="person-value__unit">
                        <div className="person-value__title name">Насчитано за личный обьем</div>
                        <div className="person-value__top">
                            <button className="person-value__btn btn-main">АВГУСТ</button>
                            <div className="person-value__total">4 271</div>
                        </div>
                        <div className="person-value__item item-person-value">
                            <div className="item-person-value__number">1</div>
                            <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                            <div className="item-person-value__reward">25 600</div>
                        </div>
                    </div>
                    <div className="person-value-hide__units">
                        <div className="person-value__unit">
                            <div className="person-value__title name">Насчитано за личный обьем</div>
                            <div className="person-value__top">
                                <button className="person-value__btn btn-main">АВГУСТ</button>
                                <div className="person-value__total">4 271</div>
                            </div>
                            <div className="person-value__item item-person-value">
                                <div className="item-person-value__number">1</div>
                                <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                                <div className="item-person-value__reward">25 600</div>
                            </div>
                            <div className="person-value__item item-person-value">
                                <div className="item-person-value__number">1</div>
                                <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                                <div className="item-person-value__reward">25 600</div>
                            </div>
                        </div>
                        <div className="person-value__unit">
                            <div className="person-value__title name">Насчитано за личный обьем</div>
                            <div className="person-value__top">
                                <button className="person-value__btn btn-main">АВГУСТ</button>
                                <div className="person-value__total">4 271</div>
                            </div>
                            <div className="person-value__item item-person-value">
                                <div className="item-person-value__number">1</div>
                                <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                                <div className="item-person-value__reward">25 600</div>
                            </div>
                            <div className="person-value__item item-person-value">
                                <div className="item-person-value__number">1</div>
                                <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                                <div className="item-person-value__reward">25 600</div>
                            </div>
                            <div className="person-value__item item-person-value">
                                <div className="item-person-value__number">1</div>
                                <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                                <div className="item-person-value__reward">25 600</div>
                            </div>
                        </div>
                        <div className="person-value__unit">
                            <div className="person-value__title name">Насчитано за личный обьем</div>
                            <div className="person-value__top">
                                <button className="person-value__btn btn-main">АВГУСТ</button>
                                <div className="person-value__total">4 271</div>
                            </div>
                            <div className="person-value__item item-person-value">
                                <div className="item-person-value__number">1</div>
                                <div className="item-person-value__volume">Твой товарооборот этого месяца</div>
                                <div className="item-person-value__reward">25 600</div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="person-value__btn person-value__btn-units person-value__btn-bottom btn-main">АРХИВ
                        ЗАКАЗОВ
                    </button>
                </div>
            </div>

            );
};

export default MyAccounts;