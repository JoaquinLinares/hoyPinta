import React, { useState } from "react";
import { INGREDIENTES_BY_ID } from "../data/ingredientes";
import IngredientePicker from "./IngredientePicker";
import styles from "../styles/HeladeraView.module.css";

function BarraCoincidencia({ porcentaje }) {
  const clase =
    porcentaje >= 80 ? styles.alta : porcentaje >= 50 ? styles.media : styles.baja;
  return (
    <div className={styles.barWrap}>
      <div className={styles.barTrack}>
        <div className={`${styles.barFill} ${clase}`} style={{ width: `${porcentaje}%` }} />
      </div>
      <span className={styles.barLabel}>{porcentaje}% disponible</span>
    </div>
  );
}

function RecetaResultado({ resultado, seleccionados, tipo }) {
  const [expanded, setExpanded] = useState(false);
  const { comida, faltantesRequeridos, porcentaje } = resultado;

  // Clasifica ingredientes: disponible o no
  const ingConEstado = comida.ingredientes_ids.map((id) => ({
    id,
    label: INGREDIENTES_BY_ID[id]?.label || id,
    disponible: seleccionados.includes(id),
  }));

  return (
    <div
      className={`${styles.recetaCard} ${expanded ? styles.expanded : ""}`}
      onClick={() => setExpanded((p) => !p)}
      role="button"
      aria-expanded={expanded}
    >
      <div className={styles.recetaTop}>
        <span className={styles.recetaEmoji}>{comida.emoji}</span>
        <div className={styles.recetaInfo}>
          <p className={styles.recetaNombre}>{comida.nombre}</p>
          <p className={styles.recetaDesc}>{comida.desc}</p>
          <BarraCoincidencia porcentaje={porcentaje} />
        </div>
      </div>

      {tipo === "casi" && faltantesRequeridos.length > 0 && (
        <div className={styles.faltantes}>
          <span className={styles.faltantesLabel}>Te falta:</span>
          {faltantesRequeridos.join(", ")}
        </div>
      )}

      {expanded && (
        <div className={styles.recetaDetalle} onClick={(e) => e.stopPropagation()}>
          <div>
            <p className={styles.detalleSecTitulo}>Ingredientes</p>
            <ul className={styles.ingList}>
              {comida.ingredientes_texto.map((texto, i) => {
                const est = ingConEstado[i];
                return (
                  <li key={i} className={est?.disponible ? styles.ingDisponible : ""}>
                    {est?.disponible ? "✓ " : ""}{texto}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className={styles.detalleSecTitulo}>Preparación</p>
            <ol className={styles.pasosList}>
              {comida.pasos.map((paso, i) => (
                <li key={i}>
                  <span className={styles.numBadge}>{i + 1}</span>
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

export default function HeladeraView({
  ingredientesSeleccionados,
  onToggle,
  onLimpiar,
  resultados,
  filtros,
}) {
  const { completas, casiListas } = resultados;
  const tieneIngredientes = ingredientesSeleccionados.length > 0;

  return (
    <div className={styles.wrap}>
      {/* Picker de ingredientes */}
      <div className={styles.card}>
        <p className={styles.cardTitle}>¿Qué tenés en la heladera?</p>
        <p className={styles.cardHint}>
          Seleccioná los ingredientes que tenés disponibles y te mostramos qué podés cocinar.
          Los condimentos básicos (sal, aceite, ajo) se asumen disponibles.
        </p>
        <IngredientePicker
          seleccionados={ingredientesSeleccionados}
          onToggle={onToggle}
          onLimpiar={onLimpiar}
        />
      </div>

      {/* Resultados */}
      {tieneIngredientes && (
        <div className={styles.card}>
          {/* Recetas completas */}
          {completas.length > 0 && (
            <div className={styles.seccion}>
              <div className={styles.seccionHeader}>
                <span className={`${styles.seccionBadge} ${styles.badgeCompleta}`}>
                  Podés hacer ya
                </span>
                <span className={styles.seccionCount}>{completas.length} receta{completas.length !== 1 ? "s" : ""}</span>
              </div>
              {completas.map((r) => (
                <RecetaResultado
                  key={r.comida.id}
                  resultado={r}
                  seleccionados={ingredientesSeleccionados}
                  tipo="completa"
                />
              ))}
            </div>
          )}

          {completas.length > 0 && casiListas.length > 0 && (
            <div className={styles.divider} />
          )}

          {/* Casi listas */}
          {casiListas.length > 0 && (
            <div className={styles.seccion}>
              <div className={styles.seccionHeader}>
                <span className={`${styles.seccionBadge} ${styles.badgeCasi}`}>
                  Casi lista
                </span>
                <span className={styles.seccionCount}>Faltan 1-3 ingredientes</span>
              </div>
              {casiListas.slice(0, 6).map((r) => (
                <RecetaResultado
                  key={r.comida.id}
                  resultado={r}
                  seleccionados={ingredientesSeleccionados}
                  tipo="casi"
                />
              ))}
            </div>
          )}

          {/* Sin resultados */}
          {completas.length === 0 && casiListas.length === 0 && (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🤔</span>
              <p className={styles.emptyTitle}>No encontramos recetas con esos ingredientes</p>
              <p className={styles.emptySub}>
                {Object.values(filtros).some((v) => v && v.length > 0)
                  ? "Probá relajando algún filtro activo, o agregá más ingredientes."
                  : "Agregá más ingredientes para obtener mejores resultados."}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Estado inicial */}
      {!tieneIngredientes && (
        <div className={styles.card}>
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🧊</span>
            <p className={styles.emptyTitle}>Seleccioná lo que tenés</p>
            <p className={styles.emptySub}>
              Usá el buscador o las categorías de arriba para elegir tus ingredientes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
