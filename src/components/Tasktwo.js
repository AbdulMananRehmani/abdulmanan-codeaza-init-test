import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ArrayInput() {
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e, arraySetter) => {
    const { value } = e.target;
    const numbers = value
      .split(',')
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));

    if (numbers.length > 5) {
      setErrorMsg('You can only enter up to 5 integers.');
      arraySetter(numbers.slice(0, 5));
    } else {
      setErrorMsg('');
      arraySetter(numbers);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center  mb-5">Array Input</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>Array 1</h3>
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleInputChange(e, setArray1)}
            placeholder="Enter up to 5 integers separated by commas"
          />
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          <ul className="list-group mt-2">
            {array1.map((number, index) => (
              <li key={index} className="list-group-item">
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Array 2</h3>
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleInputChange(e, setArray2)}
            placeholder="Enter up to 5 integers separated by commas"
          />
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          <ul className="list-group mt-2">
            {array2.map((number, index) => (
              <li key={index} className="list-group-item">
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Array 3</h3>
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleInputChange(e, setArray3)}
            placeholder="Enter up to 5 integers separated by commas"
          />
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          <ul className="list-group mt-2">
            {array3.map((number, index) => (
              <li key={index} className="list-group-item">
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArrayInput;
