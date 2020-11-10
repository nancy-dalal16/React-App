import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    //   const value = e.target.value;
    //   const name = e.target.name;
    const { name, value } = e.target;
    setNote((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main_note">
        <input
          type="text"
          name="title"
          onChange={InputEvent}
          value={note.title}
          placeholder="Title"
        />
        <br />
        <textarea
          name="content"
          rows=""
          column=""
          onChange={InputEvent}
          value={note.content}
          placeholder="Write a note..."
        ></textarea>
        <br />
        <Button onClick={addEvent}>
          <AddIcon />
        </Button>
      </div>
    </>
  );
};

export default CreateNote;
