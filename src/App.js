import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, LandingPage, Login, Signup } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="home" element={<Homepage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default App;
