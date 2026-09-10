// PASO 2 — Seleccionar los elementos
const area = document.querySelector("#texto");
const caracteres = document.querySelector("#caracteres");
const palabras = document.querySelector("#palabras");
const sinEspacios = document.querySelector("#sinEspacios");
const restantes = document.querySelector("#restantes");
const barraProgreso = document.querySelector("#barraProgreso");
const btnLimpiar = document.querySelector("#btnLimpiar");

// PASO 7 — El límite
const LIMITE = 280;

// PASO 3 — Escuchar la escritura
area.addEventListener("input", actualizar);
btnLimpiar.addEventListener("click", limpiar);

function actualizar() {
  const texto = area.value;

  // PASO 4 — Contador de caracteres
  caracteres.textContent = texto.length;

  // PASO 5 — Palabras
  const t = texto.trim();
  palabras.textContent = t === "" ? 0 : t.split(/\s+/).length;

  // PASO 6 — Sin espacios
  sinEspacios.textContent = texto.replaceAll(" ", "").length;

  // PASO 7 — Restantes
  const restan = LIMITE - texto.length;
  restantes.textContent = restan;

  // PASO 9 (bonus) — Barra de progreso
  const porcentaje = Math.min((texto.length / LIMITE) * 100, 100);
  barraProgreso.style.width = porcentaje + "%";

  // PASO 8 — Aviso en rojo al pasarse del límite
  const excedido = texto.length > LIMITE;
  area.classList.toggle("excedido", excedido);
  restantes.parentElement.classList.toggle("excedido", excedido);
  barraProgreso.classList.toggle("excedido", excedido);
}

// Bonus — Botón limpiar
function limpiar() {
  area.value = "";
  actualizar();
  area.focus();
}

// Inicializar contadores en 0 al cargar la página
actualizar();
