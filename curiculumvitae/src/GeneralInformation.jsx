import {useState} from 'react';

export default function InputText({name}){

  const [firstName, setFirstName]=useState(''); // declare a state variable

  return (
    <div className="SmallInputText">
      <label className="SmallInputLabel">
        {name}        
        <input className="input" value={firstName} onChange = { e => setFirstName(e.target.value)}
        />
      </label>
    </div>
  );
}
