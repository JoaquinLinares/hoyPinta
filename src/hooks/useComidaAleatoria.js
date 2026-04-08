import { useState, useCallback } from "react";
import { COMIDAS } from "../data/comidas";

const MAX_HISTORIAL = 8;

export function useComidaAleatoria() {
  const [comidaActual, setComidaActual] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [sinResultados, setSinResultados] = useState(false);

  const obtenerComida = useCallback(
    (filtros) => {
      
      let pool = COMIDAS.filter((c) => {
        if (filtros.tipo && c.tipo !== filtros.tipo) return false;
        if (filtros.tiempo && c.tiempo !== filtros.tiempo) return false;
        if (filtros.dif && c.dif !== filtros.dif) return false;
        if (filtros.precio && c.precio !== filtros.precio) return false;
        return true;
      });

      if (pool.length === 0) {
        setSinResultados(true);
        return;
      }

      setSinResultados(false);
      
      let disponibles = pool.filter((c) => !historial.includes(c.id));
      
      if (disponibles.length === 0) {
        const nuevoHistorial = comidaActual ? [comidaActual.id] : [];
        setHistorial(nuevoHistorial);
        disponibles = pool.filter((c) => !nuevoHistorial.includes(c.id));
      }
      
      const elegida = disponibles[Math.floor(Math.random() * disponibles.length)];
      
      setHistorial((prev) => {
        const nuevo = comidaActual ? [...prev, comidaActual.id] : prev;
        return nuevo.length > MAX_HISTORIAL ? nuevo.slice(-MAX_HISTORIAL) : nuevo;
      });

      setComidaActual(elegida);
    },
    [comidaActual, historial]
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