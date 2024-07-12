import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = useCallback(() => {
    if (novaTarefa.trim()) {
      setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
      setNovaTarefa('');
    }
  }, [novaTarefa]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;