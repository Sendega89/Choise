import './scss/style.scss';
import "./assets/fonts/stylesheet.css"
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
