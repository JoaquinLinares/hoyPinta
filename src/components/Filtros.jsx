import React from "react";
import { FILTROS_CONFIG } from "../data/comidas";
import styles from "../styles/Filtros.module.css";

function Filtros({ filtros, onFiltroChange }) {
  const handlePill = (grupo, valor) => {
    
    const nuevoValor = filtros[grupo] === valor ? null : valor;
    onFiltroChange(grupo, nuevoValor);
  };

  return (
    <div className={styles.card}>
      <p className={styles.titulo}>Filtros</p>
      {Object.entries(FILTROS_CONFIG).map(([grupo, config]) => (
        <div key={grupo} className={styles.grupo}>
          <span className={styles.grupoLabel}>{config.label}</span>
          <div className={styles.pills}>
            {config.opciones.map((opcion) => (
              <button
                key={opcion.value}
                className={`${styles.pill} ${
                  filtros[grupo] === opcion.value ? styles.pillActivo : ""
                }`}
                onClick={() => handlePill(grupo, opcion.value)}
                aria-pressed={filtros[grupo] === opcion.value}
              >
                {opcion.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filtros;