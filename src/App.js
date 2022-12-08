import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [operacao, setOperacao] = useState('Somar')

  function calcular () {
    if (operacao == "Somar") 
      return parseFloat(num1) + parseFloat(num2);
    else if (operacao == "Subtrair") 
      return parseFloat(num1)-parseFloat(num2);
    else if (operacao == "Multiplicar") 
      return parseFloat(num1)*parseFloat(num2);
    else 
      return parseFloat(num1)/parseFloat(num2);
    
  }

  useEffect(() => {
    setResultado(calcular())
  }, [num1, num2, operacao]);

  return (
    <div className="App">
      <h1>Calculadora</h1>

      {console.log(resultado)}

      <label> Primeiro número </label>
      <input
        type='number'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <label> Segundo número </label>
      <input
        type='number'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select onChange={(e) => setOperacao(e.target.value)}>
        <option value='Somar'> Somar </option>
        <option value='Subtrair'> Subtrair </option>
        <option value='Multiplicar'> Multiplicar </option>
        <option value='Dividir'> Dividir </option>
      </select>

      <label> Resultado = {resultado} </label>
    </div>
  );
}

export default App;
