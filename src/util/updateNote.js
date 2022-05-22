import axios from "axios";

const updateNote = async ({
  noteId,
  token,
  noteDispatch,
  note,
  noteProperties,
}) => {
  try {
    const { title, noteBgColor } = noteProperties;
    const url = `/api/notes/${noteId}`;
    const data = { note: { note, title, noteBgColor } };
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post(url, data, config);
    console.log("response:", response);
    if (response.status === 201) {
      const { notes } = response.data;
      noteDispatch({ type: "UPDATE_NOTE", payload: { notes } });
    }
  } catch (error) {
    console.error(error);
  }
};

export { updateNote };
