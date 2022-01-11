import React from "react";

const ResetButton = (props) => {
    if (props.display) {
      return (
        <button  
          className="btn btn-primary spacer-bottom"
          onClick={props.resetAction}>
          New word
        </button>
      );
    } else {
      return (
        <div />
      );
    }
};
  
export default ResetButton;