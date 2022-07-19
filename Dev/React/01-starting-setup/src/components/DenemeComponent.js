import ButtonComponent from "./ButtonComponent";
import UserForm from "./UserForm";
import "./DenemeComponent.css";
import React, { useState } from "react";
function DenemeComponent(props) {
  const [title, setTitle] = useState(props.title);

  function changeHandler() {
    console.log(title);
    setTitle(Math.random);
  }

  const myFunction = (myString) => {
    setTitle(myString);
  };

  return (
    <div>
      
      <h2>{title}</h2>
      <p>{props.amount}</p>
      <p>{props.date.toISOString()}</p>
      <ButtonComponent changeHandler={changeHandler} />
      <UserForm myFunction={myFunction} title={title} />
    </div>
  );
}

export default DenemeComponent;
