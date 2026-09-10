import { useState } from "react";
import "./App.css";

// Genera una contraseña al azar según la longitud y el set de caracteres permitido
function generarPassword(longitud, permitidos) {
  let resultado = "";
  for (let i = 0; i < longitud; i++) {
    resultado += permitidos[Math.floor(Math.random() * permitidos.length)];
  }
  return resultado;
}

// Calcula el nivel de fortaleza según cantidad de tipos de caracteres y longitud
function calcularFortaleza(tiposMarcados, longitud) {
  let puntos = tiposMarcados;
  if (longitud >= 12) puntos += 1;

  if (puntos <= 1) return "Muy débil";
  if (puntos === 2) return "Débil";
  if (puntos === 3) return "Media";
  return "Fuerte";
}

function App() {
  const [longitud, setLongitud] = useState(10);
  const [conMayusculas, setConMayusculas] = useState(true);
  const [conMinusculas, setConMinusculas] = useState(true);
  const [conNumeros, setConNumeros] = useState(true);
  const [conSimbolos, setConSimbolos] = useState(false);

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fortaleza, setFortaleza] = useState("");
  const [copiado, setCopiado] = useState(false);

  function handleGenerar() {
    const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
    const NUMEROS = "0123456789";
    const SIMBOLOS = "!@#$%^&*";

    let permitidos = "";
    let tiposMarcados = 0;

    if (conMayusculas) {
      permitidos += MAYUSCULAS;
      tiposMarcados++;
    }
    if (conMinusculas) {
      permitidos += MINUSCULAS;
      tiposMarcados++;
    }
    if (conNumeros) {
      permitidos += NUMEROS;
      tiposMarcados++;
    }
    if (conSimbolos) {
      permitidos += SIMBOLOS;
      tiposMarcados++;
    }

    // Validación: nivel 2 del TP
    if (tiposMarcados === 0 || longitud === 0) {
      setError("Marcá al menos una opción");
      return;
    }
    setError("");

    const nuevaPassword = generarPassword(longitud, permitidos);
    setPassword(nuevaPassword);
    setFortaleza(calcularFortaleza(tiposMarcados, longitud));
  }

  function handleCopiar() {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <main className="app">
      <h1>Generador de contraseñas</h1>

      <section className="tarjeta">
        {/* Visor */}
        <div className="visor">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="P4$5W0rD!"
            className="visor-input"
          />
          <button onClick={handleCopiar} className="btn-copiar">
            📋 Copiar
          </button>
          {copiado && <span className="copiado-msg">¡Copiado!</span>}
        </div>

        {/* Formulario de opciones */}
        <div className="formulario">
          <div className="fila-slider">
            <span>Longitud</span>
            <span className="longitud-numero">{longitud}</span>
            <input
              type="range"
              min="0"
              max="20"
              value={longitud}
              onChange={(e) => setLongitud(Number(e.target.value))}
            />
          </div>

          <label className="opcion">
            <input
              type="checkbox"
              checked={conMayusculas}
              onChange={(e) => setConMayusculas(e.target.checked)}
            />
            Incluir mayúsculas
          </label>

          <label className="opcion">
            <input
              type="checkbox"
              checked={conMinusculas}
              onChange={(e) => setConMinusculas(e.target.checked)}
            />
            Incluir minúsculas
          </label>

          <label className="opcion">
            <input
              type="checkbox"
              checked={conNumeros}
              onChange={(e) => setConNumeros(e.target.checked)}
            />
            Incluir números
          </label>

          <label className="opcion">
            <input
              type="checkbox"
              checked={conSimbolos}
              onChange={(e) => setConSimbolos(e.target.checked)}
            />
            Incluir símbolos
          </label>

          <div className="fortaleza">
            <span>FORTALEZA</span>
            <span>{fortaleza || "-"}</span>
          </div>

          {error && <p className="error">{error}</p>}

          <button onClick={handleGenerar} className="btn-generar">
            GENERAR →
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
