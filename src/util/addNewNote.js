import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const addNewNote = async ({ note, token, noteDispatch, navigate }) => {
  try {
    const url = "/api/notes";
    const config = {
      headers: {
        authorization: token,
      },
    };
    const data = { note: { note } };
    const response = await axios.post(url, data, config);
    if (response.status === 201) {
      const { notes } = response.data;
      noteDispatch({ type: "ADD_NOTE", payload: { notes: notes } });
      navigate("/home");
    }
    console.log("response from createNote:", response);
  } catch (err) {
    console.log(err);
  }
};

export { addNewNote };
