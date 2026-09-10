"use client";

import Ficha from "./Ficha";

export default function Tablero({ tablero, onDarVuelta, bloqueado, tamano }) {
  const claseGrilla = tamano === 6 ? "grilla grilla-6" : "grilla";

  return (
    <section className={claseGrilla}>
      {tablero.map((ficha) => (
        <Ficha
          key={ficha.id}
          ficha={ficha}
          onClick={onDarVuelta}
          bloqueado={bloqueado}
        />
      ))}
    </section>
  );
}
