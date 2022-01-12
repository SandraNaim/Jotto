import React, { useState } from "react";

export const EnterWordForm = ({ formAction }) => {
  const [secretWord, setSecretWord] = useState("");

  const submitForm = (evt) => {
    evt.preventDefault();
    if (secretWord.length > 0) {
      formAction(secretWord);
    }
  };

  return (
    <div>
      <p>
        Enter a secret word for someone else to guess!
      </p>
      <form className="form-inline">
        <input
          className="mb-2 mx-sm-3"
          type="text"
          value={secretWord}
          onChange={(evt) => setSecretWord(evt.target.value)}
          placeholder="enter secret word"
        />
        <button
          onClick={submitForm}
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterWordForm;
