import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
import { useContext, useEffect } from "react";
import NotFound from "./Pages/NotFound/NotFound";
import TopChallengers from "./Pages/TopChallengers/TopChallengers";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
