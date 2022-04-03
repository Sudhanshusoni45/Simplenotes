import axios from "axios";
import { useAuth, useNote } from "../context";

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
    console.log(err);
  }
};

export { getNotes };
