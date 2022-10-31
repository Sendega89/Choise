import React, {useState} from 'react';
import UserInfo from "../../Components/User/UserInfo";
import {NavLink} from "react-router-dom";
import inst from  "../../assets/img/social/inst.svg";
import face from  "../../assets/img/social/face.svg";
import "nouislider/distribute/nouislider.css";
import 'rc-slider/assets/index.css';
import Range from "rc-slider";

const MyTeam = () => {
  const [clientInfo, setClientInfo]  = useState(false);
  const [filterMenu, setFilterMenu]  = useState(false);
  const [showLineManager, setShowLineManager ] = useState(false);
  const [showByQualification, setShowByQualification ] = useState(false);
  const teamList = [{
      id:1,
      teacher_id:1,
      line:1,
      status:1,
      name:"Светлана",
      surname:"Иваненко",
      patronymic:"Петровна",
      create_it:"06.08.2021",
      personal_volume:"150",
      network_volume:"1250",
      qualification:"MN",
      clients:"35",
      managers:"80",
      city:"Украина, Киев",
      phone:"+38 095 888 56 27",
      social_links:[""],

  }]
    return (
        <div className="page__content">
            <div className="page__box">
                <div className="page__title title">моя команда</div>
                <NavLink to="/personal_cabinet" className="page__back">Назад в офис <span> </span></NavLink>
            </div>
            <div className="page__user user">
                <div className="user__row">
                    <UserInfo />
                    <div className="user__column">
                        <div className="user__actions actions-user-team">
                            <div className="actions-user-team__column">
                                <NavLink to="/" className="actions-user-team__item">
                                    <div className="actions-user-team__icon actions-user-team__icon-brown">8</div>
                                    <div className="actions-user-team__title">Вся
                                        команда
                                    </div>
                                </NavLink>
                            </div>
                            <div className="actions-user-team__column">
                                <NavLink to="/" className="actions-user-team__item">
                                    <div className="actions-user-team__icon actions-user-team__icon-green">6</div>
                                    <div className="actions-user-team__title">Менеджеры</div>
                                </NavLink>
                            </div>
                            <div className="actions-user-team__column">
                                <NavLink to="/" className="actions-user-team__item">
                                    <div className="actions-user-team__icon actions-user-team__icon-blue">2</div>
                                    <div className="actions-user-team__title">Клиенты
                                        Optima
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__options options">
                <div className="options__row">
                    <div className="options__column">
                        <div className="options__item options__item-red">не активированный
                            контракт
                        </div>
                    </div>
                    <div className="options__column">
                        <div className="options__item options__item-brown">згорает контракт</div>
                    </div>
                    <div className="options__column">
                        <div className="options__item options__item-green">менеджер
                            в квалификации
                        </div>
                    </div>
                    <div className="options__column">
                        <div className="options__item options__item-blue">участник марафона</div>
                    </div>
                </div>
            </div>
            <div className="page__filter-team filter-team">
                <div className="filter-team__header">
                    <div onClick={()=>setFilterMenu(!filterMenu)} className={`filter-team__btn-plus btn-main btn-main-plus ${!filterMenu?"":"active"}`}>
                        <span> </span>{!filterMenu?"добавить фильтр":"закрыть"}

                    </div>
                    <div className="filter-team__btn-find btn-main btn-main-find">поиск менеджера</div>
                </div>
                <div className={`filter-team__filter-item item-filter ${!filterMenu ? "" : "active"}`}>
                    <div className="item-filter__wrapper">
                        <form action="#" className="item-filter__form form-filter">
                            <div className="form-filter__item form-filter__item-select">
                                <select name="period"
                                        className="form-filter__select form-filter__select-hide"
                                        defaultValue="АВГУСТ, 2022">
                                    <option value="АВГУСТ, 2022" >АВГУСТ, 2022</option>
                                    <option value="СЕНТЯБРЬ, 2022">СЕНТЯБРЬ, 2022</option>
                                    <option value="ОКТЯБРЬ, 2022">ОКТЯБРЬ, 2022</option>
                                </select>
                            </div>


                            <div className="form-filter__item form-filter__item-range">
                                <div className="form-filter__label">По личному бренду</div>
                                <div className="form-filter__row">
                                    <div className="range-filter">

                                        <div className="range-filter__values values-range-filter">
                                            <div className="values-range-filter__column">
                                                <div className="values-range-filter__input">
                                                    <input id="price-start" placeholder="0" autoComplete="off"
                                                           type="text"
                                                           name="range" className="input"/>
                                                </div>
                                            </div>
                                            <div className="values-range-filter__column">
                                                <div className="values-range-filter__input">
                                                    <input id="price-end" placeholder="25" autoComplete="off"
                                                           type="text"
                                                           name="range" className="input"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/*<div className="range-filter__slider">*/}
                                            <Range style={{
                                                width:"40%"
                                            }} range={[0,25]}
                                                   handleStyle={[
                                                {
                                                color:'#b5c775',
                                                backgroundColor:"#fff",
                                                border:"none",
                                                boxShadow:"0 0 5px #bcbbbb",
                                               "&::after":{
                                                   content: "",
                                                   borderRadius: "100%",
                                                       width: 10,
                                                       height: 10,
                                                       backgroundColor: "#b5c775",
                                                       position: "absolute",
                                                       top: "50%",
                                                       left: "50%",
                                                       transform: "translate(-50%, -50%)"
                                                }
                                            },
                                                {
                                                    color:'#b5c775',
                                                    backgroundColor: "#fff",
                                                    border:"none",
                                                    boxShadow:"0 0 5px #bcbbbb"}]}
                                                   trackStyle={{
                                                    color:"#b5c775",
                                                    backgroundColor:"#b5c775",
                                                   }}
                                                   dotStyle={{
                                                       color:"b5c775",

                                                   }}/>

                                    </div>
                                </div>
                            </div>

                            <div className="form-filter__item form-filter__item-range">
                                <div className="form-filter__label">По обьему команды</div>
                                <div className="form-filter__row">
                                    <div className="range-filter range-filter-2">
                                        <div className="range-filter__values values-range-filter">
                                            <div className="values-range-filter__column">
                                                <div className="values-range-filter__input">
                                                    <input id="volume-start" placeholder="0" autoComplete="off"
                                                           type="text"
                                                           name="range" className="input"/>
                                                </div>
                                            </div>
                                            <div className="values-range-filter__column">
                                                <div className="values-range-filter__input">
                                                    <input id="volume-end" placeholder="25" autoComplete="off"
                                                           type="text"
                                                           name="range" className="input"/>
                                                </div>
                                            </div>
                                        </div>

                                      {/*  <div className="range-filter__slider-2">*/}
                                            <Range style={{
                                                width:"40%"
                                            }} range={[0, 25]}
                                                   handleStyle={[
                                                       {
                                                           color:'#b5c775',
                                                           backgroundColor:"#fff",
                                                           border:"none",
                                                           boxShadow:"0 0 5px #bcbbbb",
                                                           "&::after":{
                                                               content: "",
                                                               borderRadius: "100%",
                                                               width: 10,
                                                               height: 10,
                                                               backgroundColor: "#b5c775",
                                                               position: "absolute",
                                                               top: "50%",
                                                               left: "50%",
                                                               transform: "translate(-50%, -50%)"
                                                           }
                                                       },
                                                       {
                                                           color:'#b5c775',
                                                           backgroundColor: "#fff",
                                                           border:"none",
                                                           boxShadow:"0 0 5px #bcbbbb"}]}
                                                   trackStyle={{
                                                       color:"#b5c775",
                                                       backgroundColor:"#b5c775",
                                                   }}
                                                   dotStyle={{
                                                       color:"b5c775",

                                                   }}/>

                                    </div>
                                </div>
                            </div>


                            <div className="form-filter__item form-filter__item-checkbox1">
                                <div className="checkbox1">
                                    <input id="showManager"  type="checkbox" name="manager"
                                           className="checkbox1__input1"/>
                                        <label htmlFor="showManager"
                                               className={`checkbox1__label1 ${showLineManager ? "active" : ""}`}
                                        onClick={()=>setShowLineManager(!showLineManager)}>Показать менеджеров
                                            линии</label>
                                </div>
                                <ul className={`checkbox1__list1 ${showLineManager?"active":""}`}>
                                    <li className="checkbox1__item1">
                                        <label htmlFor="showManager1" className="checkbox1__label-list1">менеджер
                                            1</label>
                                        <input id="showManager1" type="checkbox" name="manager1"
                                               className="checkbox1__input-list1"/>

                                    </li>
                                    <li className="checkbox1__item1">
                                        <label htmlFor="showManager2" className="checkbox1__label-list1">менеджер
                                            2</label>
                                        <input id="showManager2" type="checkbox" name="manager2"
                                               className="checkbox1__input-list2"/>

                                    </li>
                                </ul>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox2">
                                <div className="checkbox2">
                                    <input id="showQualification" type="checkbox" name="qualification"
                                           className="checkbox2__input2"/>
                                        <label htmlFor="showQualification"
                                               className={`checkbox2__label2 ${showByQualification ? "active" : ""}`}
                                        onClick={()=>setShowByQualification(!showByQualification)}>По
                                            квалификации</label>
                                </div>
                                <ul className={`checkbox2__list2 ${showByQualification?"active":""}`}>
                                    <li className="checkbox2__item2">
                                        <label htmlFor="showQualification1" className="checkbox2__label-list2 ">квалификация
                                            1</label>
                                        <input id="showQualification1" type="checkbox" name="qualification1"
                                               className="checkbox2__input-list2"/>

                                    </li>
                                    <li className="checkbox2__item2">
                                        <label htmlFor="showQualification2" className="checkbox2__label-list2">квалификация
                                            2</label>
                                        <input id="showQualification2" type="checkbox" name="qualification2"
                                               className="checkbox2__input-list2"/>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-filter__item form-filter__item-id1">
                                <label htmlFor="showTeam" className="id1__label1">Показать команду менеджера</label>
                                <input id="showTeam" placeholder="ID" type="text" name="team" className="id1__input1"/>
                            </div>
                            <div className="form-filter__item form-filter__item-id1">
                                <label htmlFor="quitStructure" className="id1__label1">Исключить структуру
                                    менеджера</label>
                                <input id="quitStructure" placeholder="ID" type="text" name="team"
                                       className="id1__input1"/>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox">
                                <div className="checkbox">
                                    <label htmlFor="showOnlyManager" className="checkbox__label">Отображать только
                                        менеджеров</label>
                                    <input id="showOnlyManager"  type="checkbox" name="onlyManager"
                                           className="checkbox__input"/>
                                </div>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox">
                                <div className="checkbox">
                                    <label htmlFor="showOnlyClient" className="checkbox__label">Отображать только
                                        клиентов
                                        Optima</label>
                                    <input id="showOnlyClient" type="checkbox" name="onlyClient"
                                           className="checkbox__input"/>
                                </div>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox">
                                <div className="checkbox">
                                    <label htmlFor="burn" className="checkbox__label">Сгорающие контракты</label>
                                    <input id="burn" type="checkbox" name="burn" className="checkbox__input"/>
                                </div>
                            </div>
                            <div className="form-filter__item form-filter__item-checkbox">
                                <div className="checkbox">
                                    <label htmlFor="notActive" className="checkbox__label">Не активированные
                                        контракты</label>
                                    <input id="notActive" type="checkbox" name="notActive" className="checkbox__input"/>
                                </div>
                            </div>
                            <div className="form-filter__item form-filter__item-select2">
                                <div className="item-select2__label">По дате регистрации</div>
                                <select name="mounth"
                                        className="form-filter__select2"
                                        defaultValue="АВГУСТ, 2022">
                                    <option value="АВГУСТ">АВГУСТ</option>
                                    <option value="СЕНТЯБРЬ">СЕНТЯБРЬ</option>
                                    <option value="ОКТЯБРЬ">ОКТЯБРЬ</option>
                                </select>
                            </div>
                            <div className="form-filter__item form-filter__item-id1">
                                <label htmlFor="showCountry" className="id1__label1">По стране</label>
                                <input id="showCountry" placeholder="Украина" type="text" name="country"
                                       className="id1__input1"/>
                            </div>
                            <div className="form-filter__item form-filter__item-id1">
                                <label htmlFor="showCity" className="id1__label1">По городу</label>
                                <input id="showCity" placeholder="Харьков" type="text" name="city"
                                       className="id1__input1"/>
                            </div>
                            <div className="item-filter__buttons">
                                <button type="submit" className="item-filter__btn btn-main">применить</button>
                                <button type="reset" className="item-filter__btn btn-main btn-main-dark">отменить
                                    фильтр
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="filter-team__body">
                    <div className="filter-team__columns-top filter-team__columns">
                        <span className="filter-team__item-top filter-team-top__filter-span-1"> </span>
                        <span className="filter-team__item-top filter-team-top__filter-span-2"> </span>
                        <span className="filter-team__item-top filter-team-top__line">ЛИНИЯ</span>
                        <span className="filter-team__item-top filter-team-top__name">ФАМИЛИЯ, ИМЯ</span>
                        <span className="filter-team__item-top filter-team-top__id">НОМЕР ID</span>
                        <span className="filter-team__item-top filter-team-top__om">О/М</span>
                        <span className="filter-team__item-top filter-team-top__registration">ДАТА РЕГИСТРАЦИИ</span>
                        <span className="filter-team__item-top filter-team-top__qualification">КВАЛИФИКАЦИЯ</span>
                        <span className="filter-team__item-top filter-team-top__oo">О/О</span>
                        <span className="filter-team__item-top filter-team-top__mo">М/О</span>
                        <span className="filter-team__item-top filter-team-top__city">ГОРОД</span>
                        <span className="filter-team__item-top filter-team-top__contact">КОНТАКТ</span>
                    </div>
                    {teamList.map((p,index)=>
                            <div key={p.id} className="filter-team__columns">
                                <div className={`filter-team__client-info client-info client-info-1 ${clientInfo?"active":""} `}>
                                    <div className="client-info__item">
                                        <div className="client-info__title name name-green">Иваненко Светлана Петровна</div>
                                        <button onClick={()=> setClientInfo(false)} className="client-info__btn btn-main btn-main-dark"><span> </span> закрыть
                                        </button>
                                        <div className="client-info__row">
                                            <div className="client-info__column">
                                                <div className="client-info__unit">Номер ID:<span>095-8885627</span></div>
                                                <div className="client-info__unit">ID наставника:<span>095-8885627</span></div>
                                                <div className="client-info__unit">Дата регистрации:<span>06.08.2021</span>
                                                </div>
                                                <div className="client-info__unit">Личный обьем:<span>150</span></div>
                                                <div className="client-info__unit">Обьем сети:<span>1250</span></div>
                                                <div className="client-info__unit">Квалификация:<span>MN</span></div>
                                            </div>
                                            <div className="client-info__column">
                                                <div className="client-info__unit">Количество клиентов:<span>35</span></div>
                                                <div className="client-info__unit">Количество менеджеров:<span>80</span></div>
                                                <div className="client-info__unit">Город:<span>Украина, Киев</span></div>
                                                <div className="client-info__unit">Личный обьем:<span>150</span></div>
                                                <a href="tel:+380958885627"
                                                   className="client-info__unit client-info__unit-phone">Контакт:<span>+38 095 888 56
														27</span></a>
                                                <div className="client-info__social social-client-info">
                                                    <div className="social-client-info__label">Ссылка на соцсеть:</div>
                                                    <div className="social-client-info__link"><img src={inst}
                                                                                                   alt="instagram"/></div>
                                                    <div className="social-client-info__link"><img src={face}
                                                                                                   alt="facebook"/></div>
                                                </div>
                                                <NavLink to={"/"} className="client-info__show-structure btn-main">ПОСМОТРЕТЬ
                                                    СТРУКТУРУ</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="filter-team__item filter-team__filter-span-1 "><span
                                    className="span__wrapper span__wrapper-1">{index-1}</span></span>
                                <span className="filter-team__item filter-team__filter-span-2"><span
                                    className="span__mark span__mark-green">{p.status}</span></span>
                                <span className="filter-team__item filter-team__line">{p.line}</span>
                                <button onClick={()=> setClientInfo(true)} className="filter-team__item filter-team__name filter-team__name-1">
                                    {p.surname}<br/>
                                    {p.name}
                                </button>
                                <span className="filter-team__item filter-team__id">{p.id}</span>
                                <span className="filter-team__item filter-team__om">{p.qualification}</span>
                                <span className="filter-team__item filter-team__registration">{p.create_it}</span>
                                <span className="filter-team__item filter-team__qualification">{p.qualification}</span>
                                <span className="filter-team__item filter-team__oo">{p.personal_volume}</span>
                                <span className="filter-team__item filter-team__mo">{p.network_volume}</span>
                                <span className="filter-team__item filter-team__city">{p.city}</span>
                                <a href="tel:+380958885627" className="filter-team__item filter-team__contact">{p.phone}</a>
                            </div>
                        )}
                </div>
                <div className="filter-team__footer">
                    <button data-show="true" className="filter-team__btn filter-team__btn-more btn-main">смотреть
                        БОЛЬШЕ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;