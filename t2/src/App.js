import './styles/main.css';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./utils/scrolToTop";



function App() {
  return (

            <div className="App">

                    <Router>
                        <ScrollToTop />
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/Contacts' element={<Contacts />} />
                            <Route path='/Project/:id' element={<Project />} />
                            <Route path='/Projects' element={<Projects />} />
                        </Routes>
                        <Footer />
                    </Router>

            </div>

  );
}

export default App;
