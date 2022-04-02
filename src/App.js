import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, LandingPage, Login, NoteEditor, Signup } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="home" element={<Homepage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="noteeditor" element={<NoteEditor />}></Route>
    </Routes>
  );
}

export default App;
