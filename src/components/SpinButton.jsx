import React from "react";
import styles from "../styles/SpinButton.module.css";

function SpinButton({ onClick, historialCount }) {
  return (
    <div className={styles.wrapper}>
      {historialCount > 0 && (
        <p className={styles.historialNota}>
          Ya viste {historialCount} comida{historialCount > 1 ? "s" : ""} distinta
          {historialCount > 1 ? "s" : ""} hoy
        </p>
      )}
      <button className={styles.btn} onClick={onClick}>
        ¿Qué pinta hoy?
      </button>
    </div>
  );
}

export default SpinButton;