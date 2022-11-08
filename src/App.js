import logo from "./logo.svg";
import "./App.css";

import Home from "./Views/HomeView/Home";
import Details from "./Views/DetailView/Details";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail" element={<Detail/>} /> */}
        <Route path="/details/:id" element={<Details/>}/>

        {/* <Route path="/detail/{id}" element={<Detail/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
