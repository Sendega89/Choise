import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {useState} from "react";

function App() {
    const [burger,setBurger] = useState(false)
    return (

<div className={`wrapper ${burger && "lock"}`}>
    <Header burger={burger} setBurger={setBurger}/>
    <Main/>
    <Footer/>
</div>

    )
}

export default App;
