import React, { useState } from "react";
import styles from "../styles/Receta.module.css";

export default function Receta({ comida }) {
  const [open, setOpen] = useState(false);
  if (!comida) return null;

  return (
    <div className={styles.wrap}>
      <button className={styles.toggleBtn} onClick={() => setOpen((p) => !p)} aria-expanded={open}>
        {open ? "Ocultar receta" : "Ver receta completa"}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}>›</span>
      </button>
      {open && (
        <div className={styles.panel}>
          <h3 className={styles.titulo}>Receta: {comida.nombre}</h3>
          <div className={styles.seccion}>
            <p className={styles.seccionTitulo}>Ingredientes</p>
            <ul className={styles.lista}>
              {comida.ingredientes_texto.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </div>
          <div className={styles.seccion}>
            <p className={styles.seccionTitulo}>Preparación</p>
            <ol className={styles.pasos}>
              {comida.pasos.map((paso, i) => (
                <li key={i}>
                  <span className={styles.num}>{i + 1}</span>
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
