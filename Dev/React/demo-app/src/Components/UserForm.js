import React, { useState } from "react";
import { Button } from "@mui/material";
import "./UserForm.css";
import GridComponent from "./GridComponent";

const UserForm = () => {
  const [usedID, usedIDHandler] = useState("");
  const [dorukID,usedDorukHandler]= useState(usedID);
  
  const idChangeHandler = (event) => {
    usedIDHandler(event.target.value);
    console.log(event.target.value);
    };

  const textChanger = () => {
    usedDorukHandler(usedID);
    console.log(dorukID + "doruk id ");
  };

  return (
    <form>
      <div className="myBackground">
        <div>
          <label>Enter ID</label>
          <input type="text" placeholder="Enter ID" onChange={idChangeHandler}/>
        </div>
        <div>
          <GridComponent id={usedID}/>
        </div>
        <div>
          <Button  onClick={textChanger}>Submit</Button> 
        </div>
      </div>
    </form>
  );
};

export default UserForm;
