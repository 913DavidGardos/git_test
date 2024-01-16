import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const COLORS = ["pink", "green", "blue", "yellow", "purple"];
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };
  return (
    <div className="App" 
         style={
          {
            backgroundColor,
          }
         }>
    {
    COLORS.map((color) => (
      <button type="button" key={
      color
      }
      onClick={
        onButtonClick(color)
      }
      className={
        backgroundColor === color ? 'selected' : ''
      }>
    {color}
    </button>
))}
  </div>
  );
}
