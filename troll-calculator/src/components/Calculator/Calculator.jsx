import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="container">

      <div className="output-area">
        <p className="result"></p>
      </div>

      <div className="button-grid">
        <div>
          <button>C</button>
          <button>bksp</button>
          <button>(</button>
          <button>)</button>
        </div>

        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>÷</button>
        </div>

        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>x</button>
        </div>

        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>

        <div>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>+</button>
        </div>
      </div>
      
    </div>
  );
};

export default Calculator;
