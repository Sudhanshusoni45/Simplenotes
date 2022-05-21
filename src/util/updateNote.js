import axios from "axios";

const updateNote = () => {
    try{
        const url =`/api/notes/${noteId}`
        const response = await axios.post(url)
        console.log('response:', response)
    }catch(error){console.error(error);}
};

export { updateNote };
