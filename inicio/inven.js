const productos = [
  { nombre: "Pepsi 600ml", marca: "Pepsi", categoria: "Bebidas", stock: 30, precio: 14 },
  { nombre: "Pan Bimbo Blanco", marca: "Bimbo", categoria: "Panadería", stock: 20, precio: 28 },
  { nombre: "Leche Lala 1L", marca: "Lala", categoria: "Lácteos", stock: 25, precio: 23 },
  { nombre: "Chetos Flamin'", marca: "Chetos", categoria: "Snacks", stock: 15, precio: 18 },
  { nombre: "Volt 500ml", marca: "Volt", categoria: "Bebidas", stock: 12, precio: 16 },
  { nombre: "Croquetas perro", marca: "Mi perro", categoria: "Mascotas", stock: 8, precio: 54 },
];

function renderProductos() {
  const tbody = document.getElementById("contenido-tabla");
  const totalBtn = document.getElementById("totalProductos");
  tbody.innerHTML = "";
  productos.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.marca}</td>
      <td>${p.categoria}</td>
      <td>${p.stock}</td>
      <td>$${p.precio.toFixed(2)}</td>
    `;
    tbody.appendChild(fila);
  });
  totalBtn.textContent = `Total: ${productos.length}`;
}

renderProductos();