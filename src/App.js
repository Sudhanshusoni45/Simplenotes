import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, LandingPage, Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="home" element={<Homepage />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
