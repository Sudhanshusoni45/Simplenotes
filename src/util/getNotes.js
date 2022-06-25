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
      // sending a demo note here
      noteDispatch({
        type: "INITIALIZE",
        payload: {
          notes: [
            {
              title: "Demo Note",
              note: "<p>This is a demo note</p>",
              createdAt: new Date().toLocaleString(),
            },
          ],
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { getNotes };
