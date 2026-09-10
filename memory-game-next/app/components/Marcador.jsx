"use client";

function formatearTiempo(segundosTotales) {
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;
  return `${minutos}:${segundos.toString().padStart(2, "0")}`;
}

export default function Marcador({ tiempo, movimientos }) {
  return (
    <footer className="marcador">
      <div className="tarjeta">
        <span>Tiempo</span>
        <strong>{formatearTiempo(tiempo)}</strong>
      </div>
      <div className="tarjeta">
        <span>Movimientos</span>
        <strong>{movimientos}</strong>
      </div>
    </footer>
  );
}

export { formatearTiempo };
