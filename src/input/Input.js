import React, { useState, useRef } from "react";

import "./Input.css";
import InputIcon from "./input-icon/InputIcon";

const Input = (props) => {
  const helperText = props.helperText;
  const startIcon = props.startIcon;
  const endIcon = props.endIcon;

  const inputRef = useRef();

  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  let handleFocus = () => {
    // set focus state on focus
    setFocused(true);
  };

  let handleBlur = () => {
    // remove focus state on blur
    setFocused(false);
  };

  const labelStyles = ["standard-label"];
  const inputStyles = ["standard-input"];
  const helperStyles = ["helper-text"];

  if (focused) {
    labelStyles.push("standard-label-focus");
  }

  if (props.error && (!hovered || focused)) {
    labelStyles.push("error-label");
    inputStyles.push("input-error");
    helperStyles.push("error-text");
  }

  let handleMouseOver = () => {
    setHovered(true);
  };

  let handleMouseLeave = () => {
    setHovered(false);
  };

  if (props.disabled) {
    inputStyles.push("disabled-input");
  }

  // set icon style
  if (startIcon) {
    inputStyles.push("start-icon");
  } else if (endIcon) {
    inputStyles.push("end-icon");
  }

  // set input size
  if (props.size === "sm") {
    inputStyles.push("small-input");
  } else if (props.size === "lg") {
    inputStyles.push("large-input");
  }

  if (props.fullWidth) {
    inputStyles.push("full-width-input");
  }

  let rows;
  if (props.multiline) {
    inputStyles.push("multiline-input");
    rows = props.rows ? props.rows : 3;
  }

  // add styles passed in as props for label and input
  const labelCss = props.labelCss ? props.labelCss.split(" ") : [];
  const inputCss = props.inputCss ? props.inputCss.split(" ") : [];

  for (const item of labelCss) {
    labelStyles.push(item);
  }

  for (const item of inputCss) {
    inputStyles.push(item);
  }

  // console.log(`rendering`);
  return !props.multiline ? (
    <div className={startIcon || endIcon ? "icon-grid" : null}>
      <label className={labelStyles.join(" ")}>Label </label>
      <input
        ref={inputRef}
        type="text"
        className={inputStyles.join(" ")}
        placeholder="Placeholder..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        defaultValue={props.value}
      ></input>
      {startIcon ? <InputIcon startIcon={startIcon} /> : null}
      {endIcon ? <InputIcon endIcon={endIcon} /> : null}
      {helperText !== undefined ? (
        <small className={helperStyles.join(" ")}>{helperText}</small>
      ) : null}
    </div>
  ) : (
    <div className={startIcon || endIcon ? "icon-grid" : null}>
      <label className={labelStyles.join(" ")}>Label </label>
      <textarea
        ref={inputRef}
        className={inputStyles.join(" ")}
        rows={rows}
        placeholder="Placeholder..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        defaultValue={props.value}
      ></textarea>
      {startIcon ? <InputIcon startIcon={startIcon} /> : null}
      {endIcon ? <InputIcon endIcon={endIcon} /> : null}
      {helperText !== undefined ? (
        <small className={helperStyles.join(" ")}>{helperText}</small>
      ) : null}
    </div>
  );
};

export default Input;
