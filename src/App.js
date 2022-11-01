import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
import { useContext, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
