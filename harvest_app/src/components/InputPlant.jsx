import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputPlant() {
  const [plantName, setplantName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`plantName: ${plantName}`);
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center min-vh-100'>
        <div className='col-md-4'>
        <h2 className='row d-flex justify-content-center'>
            Input Plant
        </h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Plant Name :</label>
              <input
                type='text'
                value={plantName}
                onChange={(event) => setplantName(event.target.value)}
                className='form-control'
              />
            </div>
            <div className="d-grid">
                <button type='submit' className='btn btn-primary mt-3'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputPlant;
