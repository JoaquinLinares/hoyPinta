/**
 * useIngredientes.js
 * Maneja el estado de ingredientes seleccionados por el usuario
 * y el resultado del matching contra el dataset.
 */

import { useState, useMemo } from "react";
import { COMIDAS } from "../data/comidas";
import { clasificarPorIngredientes } from "../utils/matching";

export function useIngredientes(filtros) {
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);

  const toggleIngrediente = (id) => {
    setIngredientesSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const quitarIngrediente = (id) => {
    setIngredientesSeleccionados((prev) => prev.filter((i) => i !== id));
  };

  const limpiarIngredientes = () => setIngredientesSeleccionados([]);

  const resultados = useMemo(
    () => clasificarPorIngredientes(COMIDAS, ingredientesSeleccionados, filtros),
    [ingredientesSeleccionados, filtros]
  );

  return {
    ingredientesSeleccionados,
    toggleIngrediente,
    quitarIngrediente,
    limpiarIngredientes,
    resultados,
  };
}
