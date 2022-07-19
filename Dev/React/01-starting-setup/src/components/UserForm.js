import React, { useState } from "react";

const UserForm = (props) => {
  const [usedTitle, usedTitleHandler] = useState("");

  const titleChangeHandler = (event) => {
    usedTitleHandler(event.target.value);
    console.log(props.title + "" + "this is props title");
    props.myFunction(event.target.value);

  };

  return (
    <form>
      <div>
        <div>
          <label>Text</label>
          <input name="titleInput1" type="text" onChange={titleChangeHandler} />
        </div>
        <div>
          <label>Number</label>
          <input type="date" />
        </div>
        <div>
          <label>Merhaba</label>
          <input type="number" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
