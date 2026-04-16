import React from "react";
import styles from "../styles/TabBar.module.css";

export default function TabBar({ activeTab, onChange }) {
  return (
    <div className={styles.bar}>
      <button
        className={`${styles.tab} ${activeTab === "azar" ? styles.active : ""}`}
        onClick={() => onChange("azar")}
      >
        <span className={styles.icon}>🎲</span> Azar
      </button>
      <button
        className={`${styles.tab} ${activeTab === "heladera" ? styles.active : ""}`}
        onClick={() => onChange("heladera")}
      >
        <span className={styles.icon}>🧊</span> Qué tengo
      </button>
    </div>
  );
}
