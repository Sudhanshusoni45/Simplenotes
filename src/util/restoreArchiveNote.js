import axios from "axios";

const restoreArchiveNote = async ({ _id, token, noteDispatch }) => {
  console.log("token:", token);
  console.log("_id:", _id);
  try {
    const url = `/api/archives/restore/${_id}`;
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.post(url, {}, config);
    if (response.status === 200) {
      const { notes } = response.data;
      const { archives } = response.data;
      noteDispatch({
        type: "RESTORE_ARCHIVE_NOTE",
        payload: { notes: notes, archives: archives },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { restoreArchiveNote };
