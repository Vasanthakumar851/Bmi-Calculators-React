import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState();
  const [bmistatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function calculateBmi() {
    if (height && weight) {
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter + heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("UnderWeight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25.9 && bmiValue < 29.0) {
        setBmiStatus("OverWeight");
      } else {
        setBmiStatus("Obese");
        setErrorMessage("");
      }
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please Enter Valid Number for height and Weight");
    }
  }
  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmiStatus("");
    setBmi(null);

    setErrorMessage("");
  };
  return (
    <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1>BMI CALCULATORS</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="input-container">
          <label for="height">Height (cm):</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label for="weight">Weight (kg):</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
        </div>
        {bmi !== null && (
          <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmistatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
