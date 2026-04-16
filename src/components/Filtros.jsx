import React from "react";
import { FILTROS_CONFIG } from "../data/comidas";
import styles from "../styles/Filtros.module.css";

export default function Filtros({ filtros, onFiltroChange, expandido, onToggleExpand }) {
  const toggle = (grupo, valor) => {
    const actuales = filtros[grupo] || [];
    const nuevo = actuales.includes(valor)
      ? actuales.filter((v) => v !== valor)
      : [...actuales, valor];
    onFiltroChange(grupo, nuevo);
  };

  const isActive = (grupo, valor) => (filtros[grupo] || []).includes(valor);

  const hayFiltrosActivos = Object.values(filtros).some((v) => v && v.length > 0);

  return (
    <div className={styles.card}>
      <button className={styles.header} onClick={onToggleExpand} aria-expanded={expandido}>
        <div className={styles.headerLeft}>
          <p className={styles.titulo}>Filtros</p>
          {!expandido && hayFiltrosActivos && (
            <span className={styles.activoBadge}>activos</span>
          )}
        </div>
        <span className={`${styles.chevron} ${expandido ? styles.chevronOpen : ""}`}>›</span>
      </button>

      {expandido && (
        <div className={styles.body}>
          {Object.entries(FILTROS_CONFIG).map(([grupo, config]) => (
            <div key={grupo} className={styles.grupo}>
              <span className={styles.grupoLabel}>{config.label}</span>
              <div className={styles.pills}>
                {config.opciones.map((op) => (
                  <button
                    key={op.value}
                    className={`${styles.pill} ${isActive(grupo, op.value) ? styles.active : ""}`}
                    onClick={() => toggle(grupo, op.value)}
                    aria-pressed={isActive(grupo, op.value)}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}