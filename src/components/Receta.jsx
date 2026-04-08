import React, { useState } from "react";
import styles from "../styles/Receta.module.css";

function Receta({ comida }) {
  const [abierta, setAbierta] = useState(false);

  if (!comida) return null;

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggleBtn}
        onClick={() => setAbierta((prev) => !prev)}
        aria-expanded={abierta}
      >
        {abierta ? "Ocultar receta" : "Ver receta completa"}
        <span className={`${styles.chevron} ${abierta ? styles.chevronAbierto : ""}`}>
          ›
        </span>
      </button>

      {abierta && (
        <div className={styles.panel}>
          <h3 className={styles.titulo}>Receta: {comida.nombre}</h3>

          <div className={styles.seccion}>
            <p className={styles.seccionTitulo}>Ingredientes</p>
            <ul className={styles.lista}>
              {comida.ingredientes.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className={styles.seccion}>
            <p className={styles.seccionTitulo}>Preparación</p>
            <ol className={styles.pasos}>
              {comida.pasos.map((paso, i) => (
                <li key={i}>
                  <span className={styles.numeroBadge}>{i + 1}</span>
                  <span>{paso}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default Receta;