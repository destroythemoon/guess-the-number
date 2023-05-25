import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState<number | string>("");
  const [randomNum, setRandomNum] = useState<number>(Math.floor(Math.random() * 100));
  const [message, setMessage] = useState("");

  function refresher() {
    setRandomNum(Math.floor(Math.random() * 100));
    setMessage("");
  }

  function validator(passedNum: number | string) {
    if (typeof(passedNum) === "string") {
      passedNum = +passedNum;
    }

    if (randomNum == passedNum) {
      setMessage("Congrats! You've won... umh nothing.\n But well done!")
    }

    else if (Math.abs(randomNum - passedNum) <= 5) {
      setMessage("You're very close!")
    }

    else if (Math.abs(randomNum - passedNum) <= 10) {
      setMessage("You're close!")
    }
    
    else {
      setMessage("Too far")
    }
  }

  const handleChange = (event: any) => {
    const re = /^[0-9\b]+$/;
  
    const value = event.target.value;

    if (value === '' || re.test(value)) {
      setName(value);
   }
  };

  return (
    <div className="random">
      <form className="form" onSubmit={(event) => {validator(name); setName(""); event.preventDefault();}}>
        <p>Try to guess the number in a 1-100 range</p>
        <input type="text" onChange={handleChange} value={name}></input>
        <button className="button">Check!</button>
        <button type="button" onClick={() => {refresher()}}>Restart</button>
        <p className="text">{message}</p>
      </form>
    </div>
  )
}

export default App
