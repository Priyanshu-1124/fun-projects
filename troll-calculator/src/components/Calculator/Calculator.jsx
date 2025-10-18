import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {

  const [output, setOutput] = useState("")

  return (
    <div className="container">

      <div className="output-area">
        <p className="result">{output}</p>
      </div>

      <div className="button-grid">
        <div>
          <button onClick={()=>setOutput("")}>C</button>
          <button onClick={()=>setOutput(output.slice(0, output.length-1))}>bksp</button>
          <button onClick={()=>setOutput(output+'(')}>(</button>
          <button onClick={()=>setOutput(output+')')}>)</button>
        </div>

        <div>
          <button onClick={()=>setOutput(output+'7')}>7</button>
          <button onClick={()=>setOutput(output+'8')}>8</button>
          <button onClick={()=>setOutput(output+'9')}>9</button>
          <button onClick={()=>setOutput(output+'/')}>/</button>
        </div>

        <div>
          <button onClick={()=>setOutput(output+'4')}>4</button>
          <button onClick={()=>setOutput(output+'5')}>5</button>
          <button onClick={()=>setOutput(output+'6')}>6</button>
          <button onClick={()=>setOutput(output+'x')}>x</button>
        </div>

        <div>
          <button onClick={()=>setOutput(output+'1')}>1</button>
          <button onClick={()=>setOutput(output+'2')}>2</button>
          <button onClick={()=>setOutput(output+'3')}>3</button>
          <button onClick={()=>setOutput(output+'-')}>-</button>
        </div>

        <div>
          <button onClick={()=>setOutput(output+'0')}>0</button>
          <button onClick={()=>setOutput(output+'.')}>.</button>
          <button>=</button>
          <button onClick={()=>setOutput(output+'+')}>+</button>
        </div>
      </div>

    </div>
  );
};

export default Calculator;
