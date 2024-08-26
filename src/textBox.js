import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import './ThemeToggle.css';  


function TextBox() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleConvertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  return (
    <div className="container">
      <ThemeToggle />
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Enter text below
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleOnChange}
      />
      <button onClick={handleConvertToUpperCase} className="btn btn-primary">
        Convert
      </button>
    </div>
  );
}
export default TextBox;


