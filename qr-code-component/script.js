// Parte A: Array simple
console.log("--- PARTE A ---");

let categorias = ["Acción", "Comedia", "Drama", "Terror"];

console.log("Categorías:", categorias);
console.log("Cantidad total:", categorias.length);

console.log("Primera categoría:", categorias[0]);
console.log("Última categoría:", categorias[categorias.length - 1]);

categorias.push("Ciencia Ficción");
console.log("Cantidad tras push:", categorias.length);

let categoriaEliminada = categorias.pop();
console.log("Categoría removida con .pop():", categoriaEliminada);


// Parte B: Objeto usuario
console.log("\n--- PARTE B ---");

let usuario = {
  nombre: "Emanuel",
  edad: 21,
  ciudad: "Posadas",
  temaFavorito: "Películas"
};

console.log(`Hola, soy ${usuario.nombre}, tengo ${usuario.edad} años, vivo en ${usuario.ciudad} y mi tema favorito son las ${usuario.temaFavorito}.`);

usuario.edad = 22;
console.log("Edad actualizada:", usuario.edad);

usuario.profesion = "Desarrollador";
console.log("Usuario completo:", usuario);


// Parte C: Array de objetos
console.log("\n--- PARTE C ---");

let catalogo = [
  { titulo: "Matrix", categoria: "Acción", puntaje: 9, visto: true },
  { titulo: "Scary Movie", categoria: "Comedia", puntaje: 9, visto: true },
  { titulo: "El Conjuro", categoria: "Terror", puntaje: 7, visto: false },
  { titulo: "Pulp Fiction", categoria: "Drama", puntaje: 10, visto: true }
];

console.log("Primer título:", catalogo[0].titulo);
console.log("Puntaje del tercero:", catalogo[2].puntaje);

let estadoSegundo = catalogo[1].visto ? "visto" : "pendiente";
console.log(`${catalogo[1].titulo} ${catalogo[1].categoria} ${catalogo[1].puntaje}/10 ${estadoSegundo}`);

catalogo[2].puntaje = 8;
console.log("Puntaje actualizado del tercer elemento:", catalogo[2].puntaje);

catalogo.push({ titulo: "Inception", categoria: "Ciencia Ficción", puntaje: 9, visto: false });
console.log("Total elementos en el catálogo:", catalogo.length);


// Parte D: Destructuring
console.log("\n--- PARTE D ---");

let { titulo, categoria, puntaje, visto } = catalogo[0];
let estadoPrimer = visto ? "visto" : "pendiente";
console.log(`${titulo} ${categoria} ${puntaje}/10 ${estadoPrimer}`);

let { nombre, ciudad } = usuario;
console.log(`Nombre: ${nombre}, Ciudad: ${ciudad}`);

let [primero, segundo] = catalogo;
console.log("Título primero:", primero.titulo);
console.log("Título segundo:", segundo.titulo);


// Parte E: Opcional
console.log("\n--- PARTE E ---");

let { titulo: tituloDestacado } = catalogo[2];
console.log("Título destacado:", tituloDestacado);

let { pais = "Argentina" } = usuario;
console.log("País (valor por defecto):", pais);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`Valores intercambiados: a=${a}, b=${b}`);