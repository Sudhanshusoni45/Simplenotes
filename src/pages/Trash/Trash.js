import { useState } from "react";
import { NoteCard } from "../../components/index";
const Trash = () => {
  return trashedNotes.map(({ _id }) => (
    <li>
      <NoteCard _id={_id} inTrash={true} />
    </li>
  ));
};

export { Trash };
