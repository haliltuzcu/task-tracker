import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "bootstrap";
import styled from "styled-components";
import { Buton } from "./Button";
import { useState } from "react";

const AddTask = ({ data, setData }) => {
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

//   console.log(time);
//   console.log(text);

  const saveTask = ( e ) => {
    e.preventDefault();
    console.log(data);
    setData([
      ...data,
      {
        id: data.length + 1,
        time: time,
        text: text,
      },
    ]);
   
    console.log(data);
};
//   console.log(data);
  return (
    <form onSubmit={saveTask}>
      <label>Task</label>
      <InputGroup className="mb-3 w-50">
        <Form.Control
          aria-label="First name"
          onChange={(e) => setText(e.target.value)}
        />
      </InputGroup>
      <label>Day & Time</label>
      <div className="col-12 col-sm-6 col-md-3 border-3 p-1">
        <input
          type="datetime-local"
          name="dateGider"
          id="dateGider"
          className="form-control text-opacity-50"
          required
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <br />
      <Buton
       
        className="w-50"
        style={{ backgroundColor: "purple" }}
      >
        Save Task
      </Buton>
    </form>
  );
};

export default AddTask;
