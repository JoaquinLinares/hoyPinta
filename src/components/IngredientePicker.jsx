import React, { useState, useMemo, useRef, useEffect } from "react";
import { INGREDIENTES_CATALOG, INGREDIENTES_BY_ID } from "../data/ingredientes";
import styles from "../styles/IngredientePicker.module.css";

const CAT_LABELS = {
  carne_vaca: "Carne vacuna",
  carne_cerdo: "Cerdo",
  pollo: "Pollo",
  pescado: "Pescado",
  fiambre: "Fiambres",
  huevo: "Huevo",
  lacteo: "Lácteos",
  pasta_arroz: "Pasta y arroz",
  legumbre: "Legumbres",
  verdura: "Verduras",
  tuberculo: "Tubérculos",
  fruta: "Frutas",
  condimento: "Condimentos",
  aceite_grasa: "Aceites",
  conserva: "Conservas",
  harina: "Harinas",
  otro: "Otros",
};

// Agrupados por categoría para la vista de categorías
const GRUPOS = (() => {
  const g = {};
  for (const ing of INGREDIENTES_CATALOG) {
    if (!g[ing.categoria]) g[ing.categoria] = [];
    g[ing.categoria].push(ing);
  }
  return g;
})();

const CATS_PRIORITARIAS = [
  "carne_vaca", "pollo", "carne_cerdo", "huevo",
  "lacteo", "verdura", "tuberculo", "pasta_arroz",
  "legumbre", "pescado", "fiambre",
];

export default function IngredientePicker({ seleccionados, onToggle, onLimpiar }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const sugerencias = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return INGREDIENTES_CATALOG.filter((ing) =>
      ing.label.toLowerCase().includes(q) ||
      ing.aliases.some((a) => a.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [query]);

  const handleSelect = (ing) => {
    onToggle(ing.id);
    setQuery("");
    setOpen(false);
  };

  const isSelected = (id) => seleccionados.includes(id);

  return (
    <div className={styles.wrap}>
      {/* Buscador */}
      <div className={styles.searchBox} ref={ref}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar ingrediente (ej: pollo, papa, atún...)"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
        {open && (
          <div className={styles.dropdown}>
            {sugerencias.length === 0 ? (
              <div className={styles.dropEmpty}>
                {query.length > 1 ? "No encontramos ese ingrediente" : "Empezá a escribir..."}
              </div>
            ) : (
              sugerencias.map((ing) => (
                <button
                  key={ing.id}
                  className={`${styles.dropItem} ${isSelected(ing.id) ? styles.selected : ""}`}
                  onClick={() => handleSelect(ing)}
                >
                  <span>{ing.label}</span>
                  <span className={styles.dropCat}>{CAT_LABELS[ing.categoria]}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Chips de seleccionados */}
      {seleccionados.length > 0 && (
        <>
          <div className={styles.chips}>
            {seleccionados.map((id) => {
              const ing = INGREDIENTES_BY_ID[id];
              if (!ing) return null;
              return (
                <span key={id} className={styles.chip}>
                  {ing.label}
                  <button className={styles.chipRemove} onClick={() => onToggle(id)} aria-label="Quitar">×</button>
                </span>
              );
            })}
          </div>
          <button className={styles.clearBtn} onClick={onLimpiar}>Limpiar todo</button>
        </>
      )}

      {/* Categorías rápidas */}
      <div className={styles.categorias}>
        {CATS_PRIORITARIAS.filter((cat) => GRUPOS[cat]).map((cat) => (
          <div key={cat}>
            <p className={styles.catTitulo}>{CAT_LABELS[cat]}</p>
            <div className={styles.catPills}>
              {GRUPOS[cat].map((ing) => (
                <button
                  key={ing.id}
                  className={`${styles.catPill} ${isSelected(ing.id) ? styles.selected : ""}`}
                  onClick={() => onToggle(ing.id)}
                >
                  {ing.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
