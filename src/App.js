import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, LandingPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="home" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
