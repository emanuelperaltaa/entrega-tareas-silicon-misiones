"use client";

import { formatearTiempo } from "./Marcador";

export default function PantallaFinal({ tiempo, movimientos, onJugarDeNuevo }) {
  return (
    <div className="pantalla-final">
      <div className="tarjeta-final">
        <h2>¡Lo lograste!</h2>
        <p>Encontraste todos los pares.</p>

        <div className="resumen-final">
          <div className="tarjeta">
            <span>Tiempo</span>
            <strong>{formatearTiempo(tiempo)}</strong>
          </div>
          <div className="tarjeta">
            <span>Movimientos</span>
            <strong>{movimientos}</strong>
          </div>
        </div>

        <button className="boton-jugar-de-nuevo" onClick={onJugarDeNuevo}>
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}
