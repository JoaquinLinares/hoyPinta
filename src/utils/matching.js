/**
 * matching.js
 * Motor de coincidencia de ingredientes.
 * Evalúa qué tan "cocinables" son las recetas con los ingredientes disponibles.
 */

import { INGREDIENTES_BY_ID } from "../data/ingredientes";

/**
 * Categorías consideradas "opcionales" (condimentos básicos que se asume que todos tienen).
 * Las recetas no penalizan por falta de estos.
 */
const CATEGORIAS_OPCIONALES = new Set(["condimento", "aceite_grasa"]);

/**
 * Evalúa una receta contra la lista de ingredientes disponibles del usuario.
 *
 * @param {Object} comida - La receta del dataset
 * @param {string[]} disponibles - Array de ingredienteIds que el usuario tiene
 * @returns {{
 *   porcentaje: number,       // 0-100, qué % de ingredientes tiene
 *   tieneRequeridos: boolean, // si tiene todos los ingredientes NO opcionales
 *   faltantes: string[],      // labels de ingredientes que faltan
 *   faltantesRequeridos: string[], // solo los que no son opcionales
 *   disponiblesMatch: string[], // ids que matchearon
 * }}
 */
export function evaluarCoincidencia(comida, disponibles) {
  const disponiblesSet = new Set(disponibles);

  const faltantes = [];
  const faltantesRequeridos = [];
  const disponiblesMatch = [];

  for (const ingId of comida.ingredientes_ids) {
    const ing = INGREDIENTES_BY_ID[ingId];
    if (!ing) continue;

    if (disponiblesSet.has(ingId)) {
      disponiblesMatch.push(ingId);
    } else {
      const label = ing?.label || ingId;
      faltantes.push(label);
      if (!CATEGORIAS_OPCIONALES.has(ing?.categoria)) {
        faltantesRequeridos.push(label);
      }
    }
  }

  const totalRelevantes = comida.ingredientes_ids.filter((id) => {
    const ing = INGREDIENTES_BY_ID[id];
    return ing && !CATEGORIAS_OPCIONALES.has(ing.categoria);
  }).length;

  const tieneRequeridos = faltantesRequeridos.length === 0;

  // Porcentaje sobre ingredientes relevantes (excluye opcionales)
  const relevantesDisponibles = disponiblesMatch.filter((id) => {
    const ing = INGREDIENTES_BY_ID[id];
    return ing && !CATEGORIAS_OPCIONALES.has(ing.categoria);
  }).length;

  const porcentaje =
    totalRelevantes === 0
      ? 100
      : Math.round((relevantesDisponibles / totalRelevantes) * 100);

  return {
    porcentaje,
    tieneRequeridos,
    faltantes,
    faltantesRequeridos,
    disponiblesMatch,
  };
}

/**
 * Clasifica las recetas según la disponibilidad de ingredientes.
 *
 * @param {Object[]} comidas - Dataset completo
 * @param {string[]} disponibles - IDs de ingredientes disponibles
 * @param {Object} filtros - Filtros activos
 * @returns {{
 *   completas: Array,  // Se pueden hacer YA
 *   casiListas: Array, // Faltan 1-2 ingredientes no opcionales
 * }}
 */
export function clasificarPorIngredientes(comidas, disponibles, filtros) {
  if (disponibles.length === 0) return { completas: [], casiListas: [] };

  // Aplicar filtros primero
  const filtradas = aplicarFiltros(comidas, filtros);

  const resultados = filtradas.map((comida) => ({
    comida,
    ...evaluarCoincidencia(comida, disponibles),
  }));

  // Ordenar por porcentaje descendente
  resultados.sort((a, b) => b.porcentaje - a.porcentaje);

  const completas = resultados.filter((r) => r.tieneRequeridos && r.porcentaje >= 50);
  const casiListas = resultados.filter(
    (r) => !r.tieneRequeridos && r.faltantesRequeridos.length <= 3 && r.porcentaje >= 40
  );

  return { completas, casiListas };
}

/**
 * Aplica los filtros activos al dataset.
 * Soporta arrays (multi-selección) o valores simples.
 */
export function aplicarFiltros(comidas, filtros) {
  return comidas.filter((c) => {
    for (const [key, val] of Object.entries(filtros)) {
      if (!val || (Array.isArray(val) && val.length === 0)) continue;
      const valores = Array.isArray(val) ? val : [val];
      if (!valores.includes(c[key])) return false;
    }
    return true;
  });
}
