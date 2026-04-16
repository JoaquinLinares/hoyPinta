import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>hoy<span className={styles.pinta}>Pinta</span></h1>
      <p className={styles.tagline}>¿Qué comés hoy? Dejá que el azar decida.</p>
    </header>
  );
}
