import "./App.css";
import Header from "./components/Page/Header/Header";
import Page from "./components/Page/Page";
import Reg from "./components/Reg/Reg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/registration" element={<Reg />} />
      </Routes>
    </div>
  );
}

export default App;
