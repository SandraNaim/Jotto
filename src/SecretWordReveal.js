import React from "react";
import { PropTypes } from 'prop-types';

const SecretWordReveal = (props) => {
    if (props.display) {
      return (
        <div data-test="component-secret-word-reveal" className="alert alert-primary">
            <span data-test="reveal-message">
                The secret word was: { props.secretWord } <br/> You are a loser ^_^
            </span>
        </div>
      );
    } else {
      return (
        <div data-test="component-secret-word-reveal"/>
      );
    }
};

SecretWordReveal.propTypes = {
  display: PropTypes.bool.isRequired,
  secretWord: PropTypes.string,
};
  
export default SecretWordReveal;