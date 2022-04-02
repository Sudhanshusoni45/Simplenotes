const addNewNote = async (note, token, noteDispatch) => {
  try {
    const url = "/api/notes";
    const config = {
      headers: {
        authorization: token,
      },
    };
    const data = { note };
    const response = await axios.post(url, data, config);
    if (response.status === 201) {
      const { notes } = response.data;
      noteDispatch({ type: "ADD_NOTE", payload: { notes: notes } });
    }
    console.log("response from createNote:", response);
  } catch (err) {
    console.log(err);
  }
};

export { addNewNote };
