import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components";
import {
  Archives,
  Homepage,
  LandingPage,
  Login,
  NoteEditor,
  Profilepage,
  Signup,
  Trash,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route
        path="home"
        element={
          <RequiresAuth>
            <Homepage />
          </RequiresAuth>
        }
      ></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="noteeditor" element={<NoteEditor />}></Route>
      <Route path="noteeditor/:noteId" element={<NoteEditor />}></Route>
      <Route path="archives" element={<Archives />}></Route>
      <Route path="trash" element={<Trash />}></Route>
      <Route path="profile" element={<Profilepage />}></Route>
    </Routes>
  );
}

export default App;
