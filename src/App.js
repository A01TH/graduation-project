import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GetStarted from "./Pages/GetStarted/GetStarted";
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
