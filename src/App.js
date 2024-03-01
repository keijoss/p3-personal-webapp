// import logo from'./logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Education } from "./components/Education"; 


function App(){
    return(
        <div className = "App">
            <NavBar />
            <Banner />
            <About />
            <Education/>
        </div>
    );
}

export default App;