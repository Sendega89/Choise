import React from 'react';
import Navigation from "../Navigation/Navigation";
import {Routes, Route} from "react-router-dom";
import PersonalOfficeMain from "../../PersonalOffice/PersonalOffice/PersonalOffiseMain";
import MyAccounts from "../../PersonalOffice/PersonalAccount/Accounts";
import ProSideBar from "../Navigation/ProSideBar";


const Main = () => {
    return <main className="page">
        <div className="page__container container">
            {/*<Navigation/>*/}
            <ProSideBar />
            <Routes>
                <Route path="/personal_cabinet"
                       element={<PersonalOfficeMain/>}/>
                <Route path={"my_team"}/>
                <Route path={"my_bonus"}/>
                <Route path={"/my_accounts"}
                       element={<MyAccounts/>}/>
                <Route path={"my_orders"}/>
                <Route path={"my_dynamic"}/>


            </Routes>
        </div>
    </main>
};

export default Main;