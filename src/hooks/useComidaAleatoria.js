/**
 * useComidaAleatoria.js
 * Hook con historial ponderado: las comidas recientes tienen menor probabilidad
 * de salir de nuevo (weighting), evitando resets arbitrarios.
 */

import { useState, useCallback } from "react";
import { COMIDAS } from "../data/comidas";
import { aplicarFiltros } from "../utils/matching";

const MAX_HISTORIAL = 12;

function elegirPonderado(pool, historial) {
  if (pool.length === 0) return null;

  // Asignar pesos: más bajo = más reciente en historial = menos probable
  const pesos = pool.map((comida) => {
    const posicion = historial.indexOf(comida.id);
    if (posicion === -1) return 10; // no está en historial: peso máximo
    // peso decrece según cuán reciente es: más reciente = posicion más alta
    const recencia = historial.length - posicion;
    return Math.max(1, 10 - recencia * 2);
  });

  const totalPeso = pesos.reduce((a, b) => a + b, 0);
  let aleatorio = Math.random() * totalPeso;

  for (let i = 0; i < pool.length; i++) {
    aleatorio -= pesos[i];
    if (aleatorio <= 0) return pool[i];
  }

  return pool[pool.length - 1];
}

export function useComidaAleatoria() {
  const [comidaActual, setComidaActual] = useState(null);
  const [historial, setHistorial] = useState([]); // array de ids (más reciente al final)
  const [sinResultados, setSinResultados] = useState(false);

  const obtenerComida = useCallback(
    (filtros) => {
      const pool = aplicarFiltros(COMIDAS, filtros);

      if (pool.length === 0) {
        setSinResultados(true);
        return;
      }

      setSinResultados(false);
      const elegida = elegirPonderado(pool, historial);

      if (!elegida) return;

      setHistorial((prev) => {
        const sinActual = prev.filter((id) => id !== elegida.id);
        const nuevo = [...sinActual, elegida.id];
        return nuevo.slice(-MAX_HISTORIAL);
      });

      setComidaActual(elegida);
    },
    [historial]
  );

  const resetear = useCallback(() => {
    setComidaActual(null);
    setHistorial([]);
    setSinResultados(false);
  }, []);

  return {
    comidaActual,
    historial,
    sinResultados,
    obtenerComida,
    resetear,
  };
}
