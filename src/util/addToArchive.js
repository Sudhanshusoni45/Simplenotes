import axios from "axios";

const addToArchive = async ({ noteDispatch, token, _id, note }) => {
  console.log("_id:", _id);
  console.log("token:", token);
  try {
    const url = `/api/notes/archives/${_id}`;
    const data = { note: { note } };
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post(url, data, config);
    if (response.status === 201) {
      const { notes } = response.data;
      const { archives } = response.data;
      noteDispatch({
        type: "ADD_TO_ARCHIVE",
        payload: { archives: archives, notes: notes },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export { addToArchive };
