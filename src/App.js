import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Archives,
  Homepage,
  LandingPage,
  Login,
  NoteEditor,
  Signup,
  Trash,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="home" element={<Homepage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="noteeditor" element={<NoteEditor />}></Route>
      <Route path="noteeditor/:noteId" element={<NoteEditor />}></Route>
      <Route path="archives" element={<Archives />}></Route>
      <Route path="trash" element={<Trash />}></Route>
    </Routes>
  );
}

export default App;
