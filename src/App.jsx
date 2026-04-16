import React, { useState } from "react";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import Filtros from "./components/Filtros";
import ResultadoCard from "./components/ResultadoCard";
import SpinButton from "./components/SpinButton";
import Receta from "./components/Receta";
import HeladeraView from "./components/HeladeraView";
import { useComidaAleatoria } from "./hooks/useComidaAleatoria";
import { useIngredientes } from "./hooks/useIngredientes";
import "./styles/global.css";

const FILTROS_INICIALES = { tipo: [], tiempo: [], dif: [], precio: [] };

export default function App() {
  const [tab, setTab] = useState("azar");
  const [filtros, setFiltros] = useState(FILTROS_INICIALES);
  const [filtrosExpandidos, setFiltrosExpandidos] = useState(true);

  const { comidaActual, historial, sinResultados, obtenerComida } = useComidaAleatoria();
  const { ingredientesSeleccionados, toggleIngrediente, limpiarIngredientes, resultados } =
    useIngredientes(filtros);

  const handleFiltroChange = (grupo, valor) => {
    setFiltros((prev) => ({ ...prev, [grupo]: valor }));
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    // Al cambiar a "qué tengo", colapsar filtros por defecto
    setFiltrosExpandidos(newTab === "azar");
  };

  return (
    <div className="app-wrap">
      <div className="app-inner">
        <Header />
        <TabBar activeTab={tab} onChange={handleTabChange} />
        <Filtros
          filtros={filtros}
          onFiltroChange={handleFiltroChange}
          expandido={filtrosExpandidos}
          onToggleExpand={() => setFiltrosExpandidos((p) => !p)}
        />

        {tab === "azar" ? (
          <>
            <ResultadoCard
              comida={comidaActual}
              sinResultados={sinResultados}
              filtrosActivos={filtros}
            />
            <SpinButton onClick={() => obtenerComida(filtros)} historialCount={historial.length} />
            <Receta comida={comidaActual} />
          </>
        ) : (
          <HeladeraView
            ingredientesSeleccionados={ingredientesSeleccionados}
            onToggle={toggleIngrediente}
            onLimpiar={limpiarIngredientes}
            resultados={resultados}
            filtros={filtros}
          />
        )}
      </div>
    </div>
  );
}
