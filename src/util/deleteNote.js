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
  } catch (err) {
    console.log(err);
  }
};

export { deleteNote };
