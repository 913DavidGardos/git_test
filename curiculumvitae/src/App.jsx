import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputText from './GeneralInformation.jsx'
import Education from './EducationalExperience.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li><InputText name="First Name"/> </li>
        <li><InputText name="Last Name"/> </li>
        <li><InputText name="Email"/> </li>
        <li><InputText name="Phone Number"/> </li>
      </ul>
      <ul>
        <li> <Education /> </li>
      </ul>
    </>

  )
}

export default App
