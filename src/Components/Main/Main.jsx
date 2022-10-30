import React from 'react';
import {Routes, Route} from "react-router-dom";
import PersonalOfficeMain from "../../PersonalOffice/Main/PersonalOffiseMain";
import MyAccounts from "../../PersonalOffice/PersonalAccount/Accounts";
import ProSideBar from "../Navigation/ProSideBar";
import PersonalDynamic from "../../PersonalOffice/PersonalDynamic/PersonalDynamic";


const Main = () => {
    return <main className="page">
        <div className="page__container container">
            <ProSideBar />
            <Routes>
                <Route path="/personal_cabinet"
                       element={<PersonalOfficeMain/>}/>
                <Route path={"my_team"}/>
                <Route path={"my_bonus"}/>
                <Route path={"/my_accounts"}
                       element={<MyAccounts/>}/>
                <Route path={"my_orders"}/>
                <Route path={"my_dynamic"}
                element={<PersonalDynamic />}/>


            </Routes>
        </div>
    </main>
};

export default Main;