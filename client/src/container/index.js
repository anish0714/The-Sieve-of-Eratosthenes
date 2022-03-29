import React, { useState } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Action
import { getMedian } from "../actions/appAction";

const MyApp = ({ getMedian, appReducer: { result, error } }) => {
  const [inputVal, setInputVal] = useState(null);
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  //   const [result, setResult] = useState(null);
  //   const [error, setError] = useState(null);

  const handleInputVal = (e) => {
    setInputVal(e.target.value);
    e.target.value ? setIsButtonDisable(false) : setIsButtonDisable(true);
  };

  return (
    <div className="container">
      <h1>MEDIAN OF PRIME NUMBER</h1>
      <div>
        <input
          type="number"
          placeholder="enter a positive integer"
          onChange={handleInputVal}
        />
      </div>

      <button disabled={isButtonDisable} onClick={() => getMedian(inputVal)}>
        Get Median
      </button>
      {result && (
        <div className="result_error">
          <h4>Result:</h4> <p>{result}</p>
        </div>
      )}
      {error && (
        <div className="result_error">
          <h4>Error:</h4> <p>{error}</p>
        </div>
      )}
    </div>
  );
};

MyApp.propTypes = {
  appReducer: PropTypes.object.isRequired,
  getMedian: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appReducer: state.appReducer,
});

export default connect(mapStateToProps, { getMedian })(MyApp);
