"use client";

import { useEffect, useState } from "react";
import Tablero from "./components/Tablero";
import Marcador from "./components/Marcador";
import PantallaFinal from "./components/PantallaFinal";

const TAMANO = 4; // grilla 4x4 -> 8 pares
const PARES = (TAMANO * TAMANO) / 2;

function crearTablero() {
  const valores = Array.from({ length: PARES }, (_, i) => i + 1);
  const mazo = [...valores, ...valores]
    .sort(() => Math.random() - 0.5)
    .map((valor, index) => ({
      id: index,
      valor,
      dadaVuelta: false,
      encontrada: false,
    }));
  return mazo;
}

export default function Home() {
  const [tablero, setTablero] = useState(crearTablero);
  const [movimientos, setMovimientos] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [jugando, setJugando] = useState(false);
  const [evaluando, setEvaluando] = useState(false);

  const volteadas = tablero.filter((f) => f.dadaVuelta && !f.encontrada);
  const gano = tablero.every((f) => f.encontrada);

  // Timer: arranca con el primer clic y se frena al ganar
  useEffect(() => {
    if (!jugando || gano) return;

    const intervalo = setInterval(() => {
      setTiempo((t) => t + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [jugando, gano]);

  // Evaluar el par cuando hay dos fichas dadas vuelta
  useEffect(() => {
    if (volteadas.length !== 2) return;

    setEvaluando(true);
    const [a, b] = volteadas;

    if (a.valor === b.valor) {
      setTablero((prev) =>
        prev.map((f) =>
          f.id === a.id || f.id === b.id ? { ...f, encontrada: true } : f
        )
      );
      setMovimientos((m) => m + 1);
      setEvaluando(false);
    } else {
      const timeout = setTimeout(() => {
        setTablero((prev) =>
          prev.map((f) =>
            f.id === a.id || f.id === b.id ? { ...f, dadaVuelta: false } : f
          )
        );
        setMovimientos((m) => m + 1);
        setEvaluando(false);
      }, 800);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tablero]);

  function darVuelta(id) {
    if (evaluando) return;
    if (volteadas.length >= 2) return;

    if (!jugando) setJugando(true);

    setTablero((prev) =>
      prev.map((f) => (f.id === id ? { ...f, dadaVuelta: true } : f))
    );
  }

  function nuevaPartida() {
    setTablero(crearTablero());
    setMovimientos(0);
    setTiempo(0);
    setJugando(false);
    setEvaluando(false);
  }

  return (
    <main className="contenedor">
      <header className="encabezado">
        <h1>memory</h1>
        <button className="boton-nueva" onClick={nuevaPartida}>
          Nueva partida
        </button>
      </header>

      <Tablero
        tablero={tablero}
        onDarVuelta={darVuelta}
        bloqueado={evaluando || volteadas.length >= 2}
        tamano={TAMANO}
      />

      <Marcador tiempo={tiempo} movimientos={movimientos} />

      {gano && (
        <PantallaFinal
          tiempo={tiempo}
          movimientos={movimientos}
          onJugarDeNuevo={nuevaPartida}
        />
      )}
    </main>
  );
}
