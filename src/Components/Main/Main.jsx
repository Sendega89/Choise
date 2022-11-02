import React from 'react';
import {Routes, Route} from "react-router-dom";
import PersonalOfficeMain from "../../PersonalOffice/Main/PersonalOffiseMain";
import MyAccounts from "../../PersonalOffice/PersonalAccount/Accounts";
import ProSideBar from "../Navigation/ProSideBar";
import PersonalDynamic from "../../PersonalOffice/PersonalDynamic/PersonalDynamic";
import Education from "../../PersonalOffice/Education/Education";
import MyTeam from "../../PersonalOffice/MyTeam/MyTeam";
import PersonalInfoUpdate from "../../PersonalOffice/PersonalInfoUpdate/PersonalInfoUpdate";
import Receipt from "../../PersonalOffice/Receipt/Receipt";
import Media from "../../PersonalOffice/Media/Media";
import Marketing from "../../PersonalOffice/Marketing/Marketing";
import Beginer from "../../PersonalOffice/Education/Beginer";


const Main = () => {
    return <main className="page">
        <div className="page__container container">
            <ProSideBar />
            <Routes>
                <Route path="/personal_cabinet"
                       element={<PersonalOfficeMain/>}/>
                <Route path={"my_team"}
                element={<MyTeam/>}/>
                <Route path={"my_bonus"}/>
                <Route path={"/my_accounts"}
                       element={<MyAccounts/>}/>
                <Route path={"my_orders"}/>
                <Route path={"my_dynamic"}
                element={<PersonalDynamic />}/>
                <Route path={"/education"}
                element={<Education />}/>
                <Route path={"/personal_cabinet_update"}
                element={<PersonalInfoUpdate />}/>
                <Route path={"/receipt"}
                element={<Receipt />}/>
                <Route path={"/media"}
                       element={<Media />}/>
                <Route path={"/marketing"}
                       element={<Marketing />}/>
                <Route path={"/education_module_1"}
                       element={<Beginer />}/>


            </Routes>
        </div>
    </main>
};

export default Main;