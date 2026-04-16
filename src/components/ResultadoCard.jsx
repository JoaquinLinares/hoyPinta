import React from "react";
import styles from "../styles/ResultadoCard.module.css";

const TAG_LABELS = {
  tipo:   { carne:"Carne", pollo:"Pollo", verdura:"Veggie", pasta:"Pasta", huevo:"Huevo", pescado:"Pescado", fiambre:"Fiambre" },
  tiempo: { rapido:"Rápido", medio:"Moderado", lento:"Con tiempo" },
  dif:    { simple:"Simple", intermedio:"Intermedio", elaborado:"Elaborado" },
  precio: { barato:"Económico", medio:"Moderado", caro:"Con presupuesto" },
};

const TAG_CLASS = {
  tipo:   { carne:"tag-carne", pollo:"tag-pollo", verdura:"tag-verdura", pasta:"tag-pasta", huevo:"tag-huevo", pescado:"tag-pescado", fiambre:"tag-fiambre" },
  tiempo: { rapido:"tag-rapido", medio:"tag-medio", lento:"tag-lento" },
  dif:    { simple:"tag-simple", intermedio:"tag-intermedio", elaborado:"tag-elaborado" },
  precio: { barato:"tag-barato", medio:"tag-medio2", caro:"tag-caro" },
};

export default function ResultadoCard({ comida, sinResultados, filtrosActivos }) {
  if (sinResultados) {
    const hayFiltros = filtrosActivos && Object.values(filtrosActivos).some((v) => v && v.length > 0);
    return (
      <div className={styles.card}>
        <div className={styles.vacio}>
          <span className={styles.vacioEmoji}>🔍</span>
          <p>No hay comidas con esos filtros.</p>
          {hayFiltros && (
            <p style={{ fontSize: "0.8rem", marginTop: "4px" }}>
              Probá desactivar algún filtro para ver más opciones.
            </p>
          )}
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
        {["tipo", "tiempo", "dif", "precio"].map((k) => (
          <span key={k} className={`${styles.tag} ${styles[TAG_CLASS[k][comida[k]]]}`}>
            {TAG_LABELS[k][comida[k]]}
          </span>
        ))}
      </div>
      <p className={styles.desc}>{comida.desc}</p>
    </div>
  );
}
