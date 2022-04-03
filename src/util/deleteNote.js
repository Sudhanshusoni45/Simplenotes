const deleteNote = async (id, token, noteDispatch) => {
  try {
    const url = `/api/note/${id}`;
    const config = {
      headers: {
        authorization: token,
      },
    };
    const response = await axios.delete(url, config);
  } catch (err) {
    console.log(err);
  }
};

export { deleteNote };
