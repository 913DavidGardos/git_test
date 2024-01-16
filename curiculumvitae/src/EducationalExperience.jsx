import {useState} from 'react'

function InputEducation({label}){
  const [input, setInput] = useState('');

  return (
    <div className="SchoolNameDiv">
      <label className="SchoolNameLabel">
        {label} 
        <input className="SchoolNameInput" value={input} onChange = { e => setInput(e.target.value)}
        />
      </label>
    </div>
  );
}



export default function Education(){
  return(
    <>
      <InputEducation label="School Name" />
      <InputEducation label="title of study" />
      <InputEducation label="date of study" />
    </>
  );
}
