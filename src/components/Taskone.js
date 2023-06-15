import React, { useState } from 'react';

function Taskone() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    if (inputValue !== '') {
      const newNumbers = [...numbers, parseInt(inputValue)];
      setNumbers(newNumbers);
      setInputValue('');
    }
  };

  const arrangeInWaveForm = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const waveFormArray = [];

    for (let i = 0; i < sortedNumbers.length; i += 2) {
      if (i + 1 < sortedNumbers.length) {
        waveFormArray.push(sortedNumbers[i + 1], sortedNumbers[i]);
      } else {
        waveFormArray.push(sortedNumbers[i]);
      }
    }

    return waveFormArray;
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center mt-3">Wave Form Array</h1>
      <div className="mb-3">
        <input
          type="number"
          className="form-control mt-3"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button className="btn btn-primary mt-2" onClick={handleAddNumber}>
          Add Number
        </button>
      </div>
      {numbers.length > 0 && (
        <div>
          <h2 className="text-center">Wave Form Array:</h2>
          <ul className="list-group">
            {arrangeInWaveForm().map((number, index) => (
              <li key={index} className="list-group-item">
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Taskone;
