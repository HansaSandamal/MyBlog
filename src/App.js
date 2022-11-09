import logo from "./logo.svg";
import "./App.css";

// import Home from "./Views/HomeView/Home";
import Home from "./containers/HomeView/HomeView.js";
import Details from "./Views/DetailView/Details";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
