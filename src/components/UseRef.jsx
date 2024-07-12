import React, { useRef } from 'react';

const Formulario = () => {
  const inputRef = useRef();

  const limparCampo = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Digite algo..."
      />
      <button onClick={limparCampo}>Limpar</button>
    </div>
  );
};

export default Formulario;