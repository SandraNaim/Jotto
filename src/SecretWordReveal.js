import React from "react";

const SecretWordReveal = (props) => {
    if (props.display) {
      return (
        <div className="alert alert-primary">
            <span>
                The secret word was: { props.secretWord } <br/> You are a looser ^-^
            </span>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
};
  
export default SecretWordReveal;