import "./square.css";
import React, { useState } from "react";

export default function Square(props) {
  return (
    <button className="square" onClick={() => props.onclick()}>
      {props.value}
    </button>
  );
}
