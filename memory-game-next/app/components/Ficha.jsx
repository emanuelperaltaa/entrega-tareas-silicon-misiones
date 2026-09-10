"use client";

export default function Ficha({ ficha, onClick, bloqueado }) {
  const visible = ficha.dadaVuelta || ficha.encontrada;

  const clases = ["ficha"];
  if (ficha.dadaVuelta) clases.push("volteada");
  if (ficha.encontrada) clases.push("encontrada");

  return (
    <button
      className={clases.join(" ")}
      onClick={() => onClick(ficha.id)}
      disabled={visible || bloqueado}
      aria-label={visible ? `Ficha ${ficha.valor}` : "Ficha oculta"}
    >
      {visible ? ficha.valor : ""}
    </button>
  );
}
