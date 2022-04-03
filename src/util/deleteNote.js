import axios from "axios";

const deleteNote = async ({ _id, token, noteDispatch }) => {
  try {
    const url = `/api/notes/${_id}`;

    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.delete(url, config);
    console.log("response:", response);
    const { notes } = response.data;
    console.log("notes:", notes);
    if (response.status === 200) {
      noteDispatch({ type: "DELETE", payload: { notes: notes } });
    }
  } catch (err) {
    console.log(err);
  }
};

export { deleteNote };
