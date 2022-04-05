import axios from "axios";

const addNewNote = async ({
  note,
  token,
  noteDispatch,
  navigate,
  noteBgColor,
  title,
}) => {
  try {
    const url = "/api/notes";
    const config = {
      headers: {
        authorization: token,
      },
    };
    const data = { note: { note, noteBgColor, title: title } };
    const response = await axios.post(url, data, config);
    if (response.status === 201) {
      const { notes } = response.data;
      noteDispatch({ type: "ADD_NOTE", payload: { notes: notes } });
      navigate("/home");
    }
  } catch (err) {
    console.error(err);
  }
};

export { addNewNote };
