import React from "react";
import styles from "../styles/SpinButton.module.css";

export default function SpinButton({ onClick, historialCount }) {
  return (
    <div className={styles.wrap}>
      {historialCount > 0 && (
        <p className={styles.nota}>
          Ya viste {historialCount} comida{historialCount !== 1 ? "s" : ""} — las recientes aparecen menos
        </p>
      )}
      <button className={styles.btn} onClick={onClick}>
        ¿Qué pinta hoy?
      </button>
    </div>
  );
}
