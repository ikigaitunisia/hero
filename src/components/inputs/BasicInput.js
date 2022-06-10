import React from "react";

function BasicInput(props) {
  return (
    <div className="form-group basic">
      <div className="input-wrapper">
        {props.label && (
          <label className="label" htmlFor={props.id}>
            {props.label}
          </label>
        )}
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <i className="clear-input">
          <ion-icon name="close-circle"></ion-icon>
        </i>
      </div>
    </div>
  );
}

export default BasicInput;
