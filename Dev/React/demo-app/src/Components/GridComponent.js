import { Button, useStepContext } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "./GridComponent.css";
import axios from "axios";


const GridComponent = (props) => {

    const [data,setData] = useState([]);

    const GetShoesData = ()=>{
       axios.get("https://.www.localhost:7061/api/shoe",{
        headers: {"Access-Control-Allow-Origin": "*"},
        responseType :"json"
       
      }).then((res)=>{
      console.log(res.data);
      setData(res.data);   
      })

    }

    useEffect(()=>{
      GetShoesData();
    },[])

  







  const columns = [
  { field: "id" },
  { field: "shoeSize", width: 150 },
  {field : "shoeAdress",width : 150},
  {field : "isRight",width:150}];

  const shoeRows = data.map((row)=>({
    id:row.id,
    shoeSize:row.shoeSize,
    shoeAdress : row.shoeAdress,
    isRight : row.isRight
  }))

  const [idCounter,handleIdCounter] = useState(1);

  const createRandomRow = () => {
    handleIdCounter(idCounter+1);
    return { id: idCounter, name: props.id };
  };

  
  const [rows, setRows] = useState(() => [createRandomRow(),]);
  

    const handleAddRow = () => {
      setRows((prevRows) => [...prevRows, createRandomRow()]);
      console.log(rows);
    };



    return (
      <div >
        <div style={{ height: 350, width: 350 }}>
          <DataGrid rows={shoeRows} columns={columns} />
        </div> 
        <div style={{ padding: 40 }}>
          <Button onClick={handleAddRow}>Deneme Button</Button>
        </div>
      </div>
    );
  };
export default GridComponent;
