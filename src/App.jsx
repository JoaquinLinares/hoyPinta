import React, { useState } from "react";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import ResultadoCard from "./components/ResultadoCard";
import SpinButton from "./components/SpinButton";
import Receta from "./components/Receta";
import { useComidaAleatoria } from "./hooks/useComidaAleatoria";
import "./styles/global.css";

const FILTROS_INICIALES = {
  tipo: null,
  tiempo: null,
  dif: null,
  precio: null,
};

function App() {
  const [filtros, setFiltros] = useState(FILTROS_INICIALES);
  const { comidaActual, historial, sinResultados, obtenerComida } =
    useComidaAleatoria();

  const handleFiltroChange = (grupo, valor) => {
    setFiltros((prev) => ({ ...prev, [grupo]: valor }));
  };

  const handleSpin = () => {
    obtenerComida(filtros);
  };

  return (
    <div className="app-container">
      <div className="app-inner">
        <Header />
        <Filtros filtros={filtros} onFiltroChange={handleFiltroChange} />
        <ResultadoCard comida={comidaActual} sinResultados={sinResultados} />
        <SpinButton onClick={handleSpin} historialCount={historial.length} />
        <Receta comida={comidaActual} />
      </div>
    </div>
  );
}

export default App;