import './App.css';
import React from 'react';
import Formulario from './components/UseRef';
import Relogio from './components/UseEffect';
import FatorialCalculator from './components/UseMemo';
import TodoList from './components/UseCallback';

const App = () => {
  return (
    <div class>
      <h1>Exercícios React-hooks</h1>
      <h2>1. UseRef - Formulário:</h2>
      <Formulario />

      <h2>2. UseEffect - Relógio e Mensagem:</h2>
      <Relogio />
      
      <h2>3. UseMemo - Calculadora de Fatorial:</h2>
      <FatorialCalculator />

      <h2>4. UseCallback - To do list:</h2>
      <TodoList>
      </TodoList>
    </div>
  );
};

export default App;