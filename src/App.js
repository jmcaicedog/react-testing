import React from 'react';
import './style.css';
import { Display } from "react-7-segment-display";
import {useState} from "react";

export default function App() {
  const [value,setValue] = useState("1980");
  const handlePlus = () =>{
    setValue((parseInt(value)+1).toString())
  }
  const handleMinus = () =>{
    setValue((parseInt(value)-1).toString())
  }
  return (
    <div style={{backgroundColor:"#000000", display:"flex", flexDirection:"column"}}> 
      <h1>CARZA S.A.</h1>
      <Display height="150" count="4" value={value} />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
