import React, { useState } from 'react';
import '../scss/GuestInfoInput.scss';
import { useHistory } from 'react-router-dom';
function GuestInfoInput() {
  const [name, setName] = useState(null);
  const [valid, setValid] = useState(true);
  const history = useHistory();

  let notValidStyle = {};
  if (!name && !valid) {
    notValidStyle = { borderColor: 'red' };
  }
  return (
    <div className='guest-info-input'>
      <div className='background'></div>
      <form action=''>
        <div className='input-container'>
          <input
            type='text'
            id='Name'
            style={notValidStyle}
            required
            tabIndex='1000'
            onChange={e => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label htmlFor='Name'>Name*</label>
          {!name && !valid && (
            <h3 className='input-valid'>
              <i className='fa fa-exclamation-triangle'></i> Enter Guest Name
            </h3>
          )}
        </div>
        <p>
          *As a Guest, you may display your work but you cannot set up a payment
          system.
        </p>
        <input
          type='submit'
          value='Continue'
          tabIndex='2 000'
          onClick={e => {
            e.preventDefault();
            if (name) history.push('/Guest/' + name);
            else setValid(false);
            console.log(valid);
          }}
        />
      </form>
    </div>
  );
}

export default GuestInfoInput;
