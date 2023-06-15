import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PairSumFinder = () => {
  const [inputValue, setInputValue] = useState('');
  const [pairs, setPairs] = useState([]);
  const [maxDiff, setMaxDiff] = useState(null);
  const [minDiff, setMinDiff] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const findPairs = () => {
    const targetSum = parseInt(inputValue, 10);
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1); // Numbers from 1 to 20

    const resultPairs = [];
    let maxDifference = Number.MIN_SAFE_INTEGER;
    let minDifference = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === targetSum) {
          resultPairs.push([numbers[i], numbers[j]]);
          const difference = Math.abs(numbers[i] - numbers[j]);
          maxDifference = Math.max(maxDifference, difference);
          minDifference = Math.min(minDifference, difference);
        }
      }
    }

    setPairs(resultPairs);
    setMaxDiff(maxDifference);
    setMinDiff(minDifference);
  };

  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-4 offset-md-4">
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter a number"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={findPairs}>
              Find Pairs
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 offset-md-4">
          {pairs.length > 0 && (
            <div>
              <h4>Pairs:</h4>
              <ul>
                {pairs.map((pair, index) => (
                  <li key={index}>{`${pair[0]} + ${pair[1]} = ${inputValue}`}</li>
                ))}
              </ul>
              <p>Maximum Difference: {maxDiff}</p>
              <p>Minimum Difference: {minDiff}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PairSumFinder;
