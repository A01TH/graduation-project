import "./App.scss";
import Login from "./components/auth/Login";
import Navbar from "./components/navbar/Navbar";
import GetStarted from "./Pages/GetStarted/GetStarted";
function App() {
  return (
    <div className="App">
      <Navbar />
      <GetStarted />
    </div>
  );
}

export default App;
