import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());
  const [mensagemVisivel, setMensagemVisivel] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);

    const timeout = setTimeout(() => {
      setMensagemVisivel(true);
      setTimeout(() => {
        setMensagemVisivel(false);
      }, 3000);
    }, 1000); 

    return () => {
      clearInterval(intervalo);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h1>Horário: {horaAtual}</h1>
      {mensagemVisivel && <p>Aparece e desaparece!</p>}
    </div>
  );
};

export default Relogio;