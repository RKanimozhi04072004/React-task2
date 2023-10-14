import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [equalClickCount, setEqualClickCount] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
        try {
          const calculatedResult = eval(input);
          setResult(calculatedResult.toString());
          setHistory((prevHistory) => [...prevHistory, `${input}=${calculatedResult}`]);
          setInput('');
          setEqualClickCount(equalClickCount + 1);
  
          if (equalClickCount >= 3) {
           
            const updatedHistory = [...history];
            updatedHistory.shift(); 
            setHistory(updatedHistory);
  
            setEqualClickCount(3); 
          }
        } catch (error) {
          setResult('');
        }
      }else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'D') {
      setInput((prevInput) => prevInput.slice(0, -1));
      setEqualClickCount(0);
    } else if (value === 'AC') {
      if (history.length > 0) {
      
        const updatedHistory = [...history];
        updatedHistory.pop(); 
        setHistory(updatedHistory);
      }
    } else {
      setInput((prevInput) => prevInput + value);
      setResult(0);
    }
  };

  const containerStyle = {
    background: 'linear-gradient(to left, #03e5b7 30%, #037ade 94%)',
    height: '100vh',
    padding: '100px',
  };

  return (
    <div style={containerStyle} className="container">
      <div className="calculator">
        <div className="output">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
          <div className="history">
            {history.map((calculation, index) => (
              <p key={index}>{calculation}</p>
            ))}
          </div>
        </div>
        <br />
        <table>
          <tbody>
            <tr>
              <td><button onClick={() => handleButtonClick('7')}>7</button></td>
              <td><button onClick={() => handleButtonClick('8')}>8</button></td>
              <td><button onClick={() => handleButtonClick('9')}>9</button></td>
              <td><button onClick={() => handleButtonClick('+')}>+</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleButtonClick('4')}>4</button></td>
              <td><button onClick={() => handleButtonClick('5')}>5</button></td>
              <td><button onClick={() => handleButtonClick('6')}>6</button></td>
              <td><button onClick={() => handleButtonClick('/')}>/</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleButtonClick('1')}>1</button></td>
              <td><button onClick={() => handleButtonClick('2')}>2</button></td>
              <td><button onClick={() => handleButtonClick('3')}>3</button></td>
              <td><button onClick={() => handleButtonClick('*')}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleButtonClick('0')}>0</button></td>
              <td><button onClick={() => handleButtonClick('.')}>.</button></td>
              <td><button onClick={() => handleButtonClick('=')}>=</button></td>
              <td><button onClick={() => handleButtonClick('-')}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => handleButtonClick('AC')}>AC</button></td>
              <td><button onClick={() => handleButtonClick('D')}>D</button></td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;

