import LogIn from "./components/LogIn";
import { Route, Routes, HashRouter as BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { NotificationContainer } from "react-notifications";
import "./styles/global.css";

function App() {
  return (
    <div>
      <NotificationContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path={"/login"} element={<LogIn />}></Route>
          <Route path={"/"} element={<LogIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
