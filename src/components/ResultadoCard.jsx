import React from "react";
import styles from "../styles/ResultadoCard.module.css";

const TAG_LABELS = {
  tipo: {
    carne: "Carne",
    pollo: "Pollo",
    verdura: "Verdura",
    pasta: "Pasta",
    huevo: "Huevo",
    fiambre: "Fiambre",
  },
  tiempo: { rapido: "Rápido", lento: "Con tiempo" },
  dif: { simple: "Simple", elaborado: "Elaborado" },
  precio: { barato: "Económico", caro: "Con presupuesto" },
};

function ResultadoCard({ comida, sinResultados }) {
  if (sinResultados) {
    return (
      <div className={styles.card}>
        <div className={styles.vacio}>
          <span className={styles.vacioEmoji}>🔍</span>
          <p>No hay comidas con esos filtros.</p>
          <p className={styles.vacioSub}>Probá cambiando alguna opción.</p>
        </div>
      </div>
    );
  }

  if (!comida) {
    return (
      <div className={styles.card}>
        <div className={styles.vacio}>
          <span className={styles.vacioEmoji}>👇</span>
          <p>Tocá el botón y te decimos qué comer hoy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles.cardActivo}`}>
      <div className={styles.header}>
        <span className={styles.emoji}>{comida.emoji}</span>
        <h2 className={styles.nombre}>{comida.nombre}</h2>
      </div>
      <div className={styles.tags}>
        {["tipo", "tiempo", "dif", "precio"].map((key) => (
          <span key={key} className={`${styles.tag} ${styles[`tag-${comida[key]}`]}`}>
            {TAG_LABELS[key][comida[key]]}
          </span>
        ))}
      </div>
      <p className={styles.desc}>{comida.desc}</p>
    </div>
  );
}

export default ResultadoCard;