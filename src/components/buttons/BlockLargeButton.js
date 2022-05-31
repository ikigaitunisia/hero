import React from "react";

function BlockLargeButton(props) {
  return (
    <button
      type={props.type ? props.type : "button"}
      onClick={props.onClick ? props.onClick : null}
      className="btn btn-primary btn-block btn-lg"
    >
      {props.value}
    </button>
  );
}

export default BlockLargeButton;
