import React, { useState, useMemo } from 'react';

const FatorialCalculator = () => {
  const [numero, setNumero] = useState(1);

  const calcularFatorial = (n) => {
    if (n < 0) return 'Inválido';
    return n === 0 || n === 1 ? 1 : n * calcularFatorial(n - 1);
  };

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        min="0"
      />
      <h3>{numero}!= {fatorial}</h3>
    </div>
  );
};

export default FatorialCalculator;