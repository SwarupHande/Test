import { useState } from "react";
import "./App.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [steps, setSteps] = useState(1)
  const [message,setMessage] = useState(messages[steps-1]);
  const [isOpen,setIsOpen] = useState(true);
  const next = () => {
    if(steps<3){
      setSteps(steps + 1);
      setMessage(messages[steps+1])
    }
    else{
      alert("Completed")
    }
    console.log(steps)
  }
  const prev = () => {
    if(steps>1){
      setSteps(steps - 1);
    }
    else{
      alert("Click on Next button to Move Further");
    }
    console.log(steps)
  }
  return (
    <>
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
    {isOpen && (<div className="steps">
      <div className="numbers">
        <div className={steps>=1? "active" : ""}>1</div>
        <div className={steps>=2? "active" : ""}>2</div>
        <div className={steps>=3? "active" : ""}>3</div>
      </div>

      <p className="message">Step {steps}: {messages[steps-1]}</p>
      <div className="buttons">
        <button style={{background:'blue', color:'white' }} onClick={prev}>Prev</button>
        <button style={{background:'blue', color:'white' }} onClick={next}>Next</button>
      </div>
    </div>)}
    </>
  );
}

export default App;
