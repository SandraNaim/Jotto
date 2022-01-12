import React from "react";

const OwnSecretWordButton = (props) => {
    if (props.display) {
      return (
        <button  
          className="btn btn-primary spacer-bottom"
          onClick={props.enterNewWord}>
          Enter your own secret word
        </button>
      );
    } else {
      return (
        <div />
      );
    }
};
  
export default OwnSecretWordButton;