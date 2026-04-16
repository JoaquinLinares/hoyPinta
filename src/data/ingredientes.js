/**
 * ingredientes.js
 *
 * Sistema de ingredientes normalizado con categorías y aliases.
 * Cada ingrediente tiene un ID canónico, su categoría y una lista de
 * strings que se consideran equivalentes (para matching flexible).
 *
 * Categorías:
 *   carne_vaca | carne_cerdo | pollo | pescado | fiambre | huevo |
 *   lacteo | pasta_arroz | legumbre | verdura | tuberculo | fruta |
 *   condimento | aceite_grasa | conserva | harina | otro
 */

export const INGREDIENTES_CATALOG = [
  // ─── CARNES DE VACA ──────────────────────────────────────────
  { id: "nalga", categoria: "carne_vaca", label: "Nalga / milanesa", aliases: ["nalga", "milanesa", "milanesas", "carne para milanesa"] },
  { id: "carne_picada", categoria: "carne_vaca", label: "Carne picada", aliases: ["carne picada", "carne molida", "picada"] },
  { id: "asado_tira", categoria: "carne_vaca", label: "Tira de asado", aliases: ["tira de asado", "asado de tira", "costillar", "tira"] },
  { id: "falda", categoria: "carne_vaca", label: "Falda", aliases: ["falda", "carne de falda"] },
  { id: "matambre", categoria: "carne_vaca", label: "Matambre", aliases: ["matambre"] },
  { id: "bife_chorizo", categoria: "carne_vaca", label: "Bife de chorizo", aliases: ["bife de chorizo", "bife", "bifes"] },
  { id: "roast_beef", categoria: "carne_vaca", label: "Cuadril / roast beef", aliases: ["cuadril", "roast beef", "colita de cuadril"] },
  { id: "osobuco", categoria: "carne_vaca", label: "Osobuco", aliases: ["osobuco", "ossobuco"] },
  { id: "vacio", categoria: "carne_vaca", label: "Vacío", aliases: ["vacío", "vacio"] },
  { id: "paleta_vaca", categoria: "carne_vaca", label: "Paleta", aliases: ["paleta", "paleta de vaca"] },
  { id: "higado", categoria: "carne_vaca", label: "Hígado", aliases: ["hígado", "higado"] },

  // ─── CARNES DE CERDO ─────────────────────────────────────────
  { id: "chorizo_colorado", categoria: "carne_cerdo", label: "Chorizo colorado", aliases: ["chorizo colorado", "chorizo", "chorizos"] },
  { id: "bondiola", categoria: "carne_cerdo", label: "Bondiola", aliases: ["bondiola", "bondiola de cerdo"] },
  { id: "panceta", categoria: "carne_cerdo", label: "Panceta", aliases: ["panceta", "panceta ahumada"] },
  { id: "costilla_cerdo", categoria: "carne_cerdo", label: "Costillas de cerdo", aliases: ["costillas de cerdo", "costilla cerdo", "costillitas"] },
  { id: "lomo_cerdo", categoria: "carne_cerdo", label: "Lomo de cerdo", aliases: ["lomo de cerdo", "lomo cerdo"] },
  { id: "pata_chancho", categoria: "carne_cerdo", label: "Pata de chancho", aliases: ["pata de chancho", "pata chancho", "codillo"] },
  { id: "morcilla", categoria: "carne_cerdo", label: "Morcilla", aliases: ["morcilla"] },

  // ─── POLLO ───────────────────────────────────────────────────
  { id: "pechuga_pollo", categoria: "pollo", label: "Pechuga de pollo", aliases: ["pechuga", "pechugas", "pechuga de pollo", "suprema"] },
  { id: "muslo_pollo", categoria: "pollo", label: "Muslo / cuarto de pollo", aliases: ["muslo", "muslos", "cuarto de pollo", "cuartos", "muslo de pollo"] },
  { id: "pollo_entero", categoria: "pollo", label: "Pollo entero", aliases: ["pollo entero", "pollo"] },
  { id: "alita_pollo", categoria: "pollo", label: "Alitas de pollo", aliases: ["alitas", "alas de pollo", "alitas de pollo"] },
  { id: "pollo_desmenuzado", categoria: "pollo", label: "Pollo cocido / desmenuzado", aliases: ["pollo desmenuzado", "pollo cocido", "pollo deshuesado"] },

  // ─── PESCADO / MARISCOS ──────────────────────────────────────
  { id: "merluza", categoria: "pescado", label: "Merluza", aliases: ["merluza", "merluza fileteada"] },
  { id: "atun_lata", categoria: "pescado", label: "Atún en lata", aliases: ["atún", "atun", "atún en lata", "lata de atún"] },
  { id: "salmon", categoria: "pescado", label: "Salmón", aliases: ["salmón", "salmon"] },
  { id: "gambas", categoria: "pescado", label: "Langostinos / gambas", aliases: ["langostinos", "gambas", "camarones"] },
  { id: "calamar", categoria: "pescado", label: "Calamar", aliases: ["calamar", "calamares"] },
  { id: "sardinas", categoria: "pescado", label: "Sardinas en lata", aliases: ["sardinas", "lata de sardinas"] },

  // ─── FIAMBRE / EMBUTIDOS ─────────────────────────────────────
  { id: "jamon_cocido", categoria: "fiambre", label: "Jamón cocido", aliases: ["jamón cocido", "jamon cocido", "jamón", "jamon"] },
  { id: "jamon_crudo", categoria: "fiambre", label: "Jamón crudo / serrano", aliases: ["jamón crudo", "jamon crudo", "jamón serrano"] },
  { id: "salame", categoria: "fiambre", label: "Salame", aliases: ["salame", "salamín", "salami"] },
  { id: "mortadela", categoria: "fiambre", label: "Mortadela", aliases: ["mortadela", "mortadella"] },

  // ─── HUEVO ───────────────────────────────────────────────────
  { id: "huevo", categoria: "huevo", label: "Huevos", aliases: ["huevo", "huevos"] },

  // ─── LÁCTEOS ─────────────────────────────────────────────────
  { id: "leche", categoria: "lacteo", label: "Leche", aliases: ["leche"] },
  { id: "manteca", categoria: "lacteo", label: "Manteca", aliases: ["manteca", "mantequilla"] },
  { id: "crema", categoria: "lacteo", label: "Crema de leche", aliases: ["crema", "crema de leche", "nata"] },
  { id: "queso_rallado", categoria: "lacteo", label: "Queso rallado", aliases: ["queso rallado", "reggianito", "parmesano", "queso duro rallado"] },
  { id: "mozzarella", categoria: "lacteo", label: "Mozzarella", aliases: ["mozzarella", "mozarela", "muzarela"] },
  { id: "queso_cremoso", categoria: "lacteo", label: "Queso cremoso / cuartirolo", aliases: ["queso cremoso", "cuartirolo", "queso cuartirolo"] },
  { id: "ricota", categoria: "lacteo", label: "Ricota", aliases: ["ricota", "ricotta"] },
  { id: "yogur", categoria: "lacteo", label: "Yogur", aliases: ["yogur", "yogurt"] },

  // ─── PASTA / ARROZ / CEREALES ────────────────────────────────
  { id: "fideos_secos", categoria: "pasta_arroz", label: "Fideos secos", aliases: ["fideos", "pasta", "tallarines", "spaghetti", "espaguetis", "penne", "rigatoni", "fideos cortos", "fideos largos"] },
  { id: "arroz", categoria: "pasta_arroz", label: "Arroz", aliases: ["arroz"] },
  { id: "polenta", categoria: "pasta_arroz", label: "Polenta", aliases: ["polenta"] },
  { id: "pan_rallado", categoria: "pasta_arroz", label: "Pan rallado", aliases: ["pan rallado", "pan rayado", "breadcrumbs"] },
  { id: "avena", categoria: "pasta_arroz", label: "Avena", aliases: ["avena"] },
  { id: "quinoa", categoria: "pasta_arroz", label: "Quinoa", aliases: ["quinoa", "quinua"] },

  // ─── LEGUMBRES ───────────────────────────────────────────────
  { id: "lentejas", categoria: "legumbre", label: "Lentejas", aliases: ["lentejas"] },
  { id: "porotos", categoria: "legumbre", label: "Porotos", aliases: ["porotos", "porotos negros", "porotos blancos", "frijoles", "alubias"] },
  { id: "garbanzos", categoria: "legumbre", label: "Garbanzos", aliases: ["garbanzos"] },
  { id: "maiz_blanco", categoria: "legumbre", label: "Maíz blanco / mote", aliases: ["maíz blanco", "maiz blanco", "mote"] },

  // ─── VERDURAS ────────────────────────────────────────────────
  { id: "cebolla", categoria: "verdura", label: "Cebolla", aliases: ["cebolla", "cebollas"] },
  { id: "ajo", categoria: "verdura", label: "Ajo", aliases: ["ajo", "dientes de ajo", "ajos"] },
  { id: "tomate", categoria: "verdura", label: "Tomate fresco", aliases: ["tomate", "tomates"] },
  { id: "tomate_lata", categoria: "verdura", label: "Tomate en lata / triturado", aliases: ["tomate triturado", "tomates triturados", "tomate en lata", "lata de tomate", "puré de tomate", "passata"] },
  { id: "morron", categoria: "verdura", label: "Morrón / pimiento", aliases: ["morrón", "morron", "pimiento", "pimiento rojo", "pimiento verde"] },
  { id: "espinaca", categoria: "verdura", label: "Espinaca", aliases: ["espinaca", "espinacas"] },
  { id: "acelga", categoria: "verdura", label: "Acelga", aliases: ["acelga", "acelgas"] },
  { id: "lechuga", categoria: "verdura", label: "Lechuga", aliases: ["lechuga"] },
  { id: "albahaca", categoria: "verdura", label: "Albahaca", aliases: ["albahaca"] },
  { id: "perejil", categoria: "verdura", label: "Perejil", aliases: ["perejil"] },
  { id: "apio", categoria: "verdura", label: "Apio", aliases: ["apio"] },
  { id: "zanahoria", categoria: "verdura", label: "Zanahoria", aliases: ["zanahoria", "zanahorias"] },
  { id: "zapallo", categoria: "verdura", label: "Zapallo / calabaza", aliases: ["zapallo", "calabaza", "zapallito"] },
  { id: "berenjena", categoria: "verdura", label: "Berenjena", aliases: ["berenjena"] },
  { id: "zucchini", categoria: "verdura", label: "Zucchini / zapallito largo", aliases: ["zucchini", "zapallito largo", "calabacín"] },
  { id: "cebolla_de_verdeo", categoria: "verdura", label: "Cebolla de verdeo", aliases: ["cebolla de verdeo", "verdeo", "cebollita de verdeo", "scallion"] },
  { id: "choclo", categoria: "verdura", label: "Choclo", aliases: ["choclo", "maíz", "maiz", "corn"] },
  { id: "brócoli", categoria: "verdura", label: "Brócoli", aliases: ["brócoli", "brocoli", "broccoli"] },
  { id: "coliflor", categoria: "verdura", label: "Coliflor", aliases: ["coliflor"] },
  { id: "hongos", categoria: "verdura", label: "Hongos / champiñones", aliases: ["hongos", "champiñones", "champignones", "champiñon", "portobello"] },
  { id: "puerro", categoria: "verdura", label: "Puerro", aliases: ["puerro"] },
  { id: "arvejas", categoria: "verdura", label: "Arvejas", aliases: ["arvejas", "guisantes", "arvejas en lata"] },

  // ─── TUBÉRCULOS ──────────────────────────────────────────────
  { id: "papa", categoria: "tuberculo", label: "Papa", aliases: ["papa", "papas", "patata"] },
  { id: "batata", categoria: "tuberculo", label: "Batata", aliases: ["batata", "boniato", "camote"] },
  { id: "mandioca", categoria: "tuberculo", label: "Mandioca", aliases: ["mandioca", "yuca"] },

  // ─── FRUTAS ──────────────────────────────────────────────────
  { id: "limon", categoria: "fruta", label: "Limón", aliases: ["limón", "limon", "jugo de limón"] },
  { id: "naranja", categoria: "fruta", label: "Naranja", aliases: ["naranja", "naranja exprimida"] },
  { id: "manzana", categoria: "fruta", label: "Manzana", aliases: ["manzana"] },
  { id: "banana", categoria: "fruta", label: "Banana", aliases: ["banana", "plátano"] },
  { id: "pasas", categoria: "fruta", label: "Pasas de uva", aliases: ["pasas", "pasas de uva", "uvas pasas"] },

  // ─── CONDIMENTOS / ESPECIAS ──────────────────────────────────
  { id: "sal", categoria: "condimento", label: "Sal", aliases: ["sal", "sal gruesa", "sal fina"] },
  { id: "pimienta", categoria: "condimento", label: "Pimienta", aliases: ["pimienta", "pimienta negra"] },
  { id: "oregano", categoria: "condimento", label: "Orégano", aliases: ["orégano", "oregano"] },
  { id: "comino", categoria: "condimento", label: "Comino", aliases: ["comino"] },
  { id: "pimenton", categoria: "condimento", label: "Pimentón / paprika", aliases: ["pimentón", "pimenton", "paprika"] },
  { id: "nuez_moscada", categoria: "condimento", label: "Nuez moscada", aliases: ["nuez moscada"] },
  { id: "azucar", categoria: "condimento", label: "Azúcar", aliases: ["azúcar", "azucar"] },
  { id: "vinagre", categoria: "condimento", label: "Vinagre", aliases: ["vinagre", "vinagre de vino"] },
  { id: "romero", categoria: "condimento", label: "Romero", aliases: ["romero"] },
  { id: "laurel", categoria: "condimento", label: "Laurel", aliases: ["laurel"] },
  { id: "curry", categoria: "condimento", label: "Curry", aliases: ["curry"] },
  { id: "canela", categoria: "condimento", label: "Canela", aliases: ["canela"] },
  { id: "aji_molido", categoria: "condimento", label: "Ají molido", aliases: ["ají molido", "aji molido", "chile molido"] },
  { id: "mostaza", categoria: "condimento", label: "Mostaza", aliases: ["mostaza"] },
  { id: "ketchup", categoria: "condimento", label: "Ketchup", aliases: ["ketchup", "catsup"] },
  { id: "salsa_soja", categoria: "condimento", label: "Salsa de soja", aliases: ["salsa de soja", "soja", "soy sauce"] },

  // ─── ACEITES / GRASAS ────────────────────────────────────────
  { id: "aceite", categoria: "aceite_grasa", label: "Aceite (girasol / maíz)", aliases: ["aceite", "aceite de girasol", "aceite de maíz"] },
  { id: "aceite_oliva", categoria: "aceite_grasa", label: "Aceite de oliva", aliases: ["aceite de oliva", "oliva"] },

  // ─── CONSERVAS / ENLATADOS ───────────────────────────────────
  { id: "aceitunas", categoria: "conserva", label: "Aceitunas", aliases: ["aceitunas", "olivas"] },
  { id: "tapas_empanada", categoria: "otro", label: "Tapas de empanada", aliases: ["tapas de empanada", "tapas empanada", "tapas"] },
  { id: "tapas_pascualina", categoria: "otro", label: "Tapas de pascualina", aliases: ["tapas de pascualina", "pascualina"] },
  { id: "caldo_cubo", categoria: "condimento", label: "Caldo (cubo / tetrabrik)", aliases: ["caldo", "caldo de pollo", "caldo de carne", "cubito", "cubitos de caldo"] },

  // ─── HARINAS / PANADERÍA ─────────────────────────────────────
  { id: "harina", categoria: "harina", label: "Harina", aliases: ["harina", "harina 0000", "harina común"] },
  { id: "harina_integral", categoria: "harina", label: "Harina integral", aliases: ["harina integral"] },
  { id: "levadura", categoria: "harina", label: "Levadura", aliases: ["levadura", "levadura seca", "levadura fresca"] },
  { id: "pan_lactal", categoria: "otro", label: "Pan / pan lactal", aliases: ["pan", "pan lactal", "pan de molde", "pan de campo"] },

  // ─── VARIOS ──────────────────────────────────────────────────
  { id: "piñones_nueces", categoria: "otro", label: "Piñones / nueces", aliases: ["piñones", "nueces", "nuez"] },
  { id: "caldo_verdura", categoria: "condimento", label: "Caldo de verdura", aliases: ["caldo de verdura"] },
];

/**
 * Mapa de búsqueda rápida: alias → ingredienteId
 * Se construye una sola vez al importar.
 */
export const ALIAS_MAP = (() => {
  const map = {};
  for (const ing of INGREDIENTES_CATALOG) {
    for (const alias of ing.aliases) {
      map[alias.toLowerCase()] = ing.id;
    }
  }
  return map;
})();

/**
 * Mapa id → objeto ingrediente para lookups O(1)
 */
export const INGREDIENTES_BY_ID = Object.fromEntries(
  INGREDIENTES_CATALOG.map((i) => [i.id, i])
);

/**
 * Normaliza un string libre → ingredienteId o null
 * Busca coincidencias exactas primero, luego parciales.
 */
export function normalizarIngrediente(texto) {
  const t = texto.toLowerCase().trim();
  if (ALIAS_MAP[t]) return ALIAS_MAP[t];
  // Búsqueda parcial: si el texto contiene algún alias
  for (const [alias, id] of Object.entries(ALIAS_MAP)) {
    if (t.includes(alias) || alias.includes(t)) return id;
  }
  return null;
}
