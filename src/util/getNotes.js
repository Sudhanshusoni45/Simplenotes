import axios from "axios";

const getNotes = async ({ token, noteDispatch }) => {
  try {
    const url = "/api/notes";
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.get(url, config);
    if (response.status === 200) {
      const { notes } = response.data;
      noteDispatch({ type: "INITIALIZE", payload: { notes: notes } });
    }
  } catch (err) {
    console.error(err);
  }
};

export { getNotes };
