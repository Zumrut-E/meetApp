import { useState } from "react";
import PropTypes from "prop-types";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let value = e.target.value;
    setNumber(value);

    let errorText;
    if (isNaN(value) || value < 0) {
      errorText = "Please enter a valid number";
    } else {
      errorText = "";
    }
    setCurrentNOE(value);
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number" className="number-label">
        Number of Events:
      </label>
      <input
        id="number"
        type="text"
        className="number-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;

NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlert: PropTypes.func.isRequired,
};
