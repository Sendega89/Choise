import React from 'react';
import Navigation from "../Navigation/Navigation";
import User from "../User/User";
import {Outlet} from "react-router-dom"

const Main = () => {
    return <main className="page">
        <div className="page__container container">
            <Navigation />
<Outlet></Outlet>
        </div>
    </main>
};

export default Main;