import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
const Note = (props) => {
  const deleteNote = (id) => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1> {props.title}</h1>

        <p> {props.content}</p>
        <Button onClick={deleteNote}>
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
};
export default Note;
