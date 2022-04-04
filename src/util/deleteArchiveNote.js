import axios from "axios";

const deleteArchiveNote = async ({ _id, noteDispatch, token }) => {
  try {
    const url = `/api/archives/delete/${_id}`;
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.delete(url, config);
    if (response.status === 200) {
      const { archives } = response.data;
      noteDispatch({
        type: "DELETE_FROM_ARCHIVE",
        payload: { archives: archives },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { deleteArchiveNote };
