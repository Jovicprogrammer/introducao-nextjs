'use client'
import { useState } from "react"
export default function ThemeToggle() {

    const [corFundo, trocaCorFundo] = useState('white');

    const primaryColor = '#f0f0f0';  // cor 1
    const secondaryColor = '#222222';  // cor 2

  const trocarCor = () => {
    trocaCorFundo(!corFundo);
  };
    return (
    <div
      style={{
        backgroundColor: corFundo ? primaryColor : secondaryColor,
        color: corFundo ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.4s ease, color 0.4s ease'
      }}
    >
      <h1>Cor atual: {corFundo ? 'clara' : 'escura'}</h1>
      <button
        onClick={trocarCor}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: corFundo ? '#333' : '#eee',
          color: corFundo ? '#fff' : '#000'
        }}
      >
        Trocar Cor
      </button>
    </div>
  );

}