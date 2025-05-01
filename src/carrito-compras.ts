// agregarProducto(nombre, precio, cantidad)
// eliminarProducto(nombre)
// calcularTotal() usando reduce
// Extra: formatearPesos(colombianos) con Intl.NumberFormat

console.log("--------------Ejercicio Carrito de compras---------------");

interface InterfaceCompras {
  nombre: string;
  precio: number;
  cantidad: number;
}

let stockCompras: InterfaceCompras[] = [];

const agregarProductos = (nombre: string, precio: number, cantidad: number) => {
  const agregarProducto = {
    nombre,
    precio,
    cantidad,
  };
  stockCompras.push(agregarProducto);
};

const eliminarProducto = (nombre: string) => {
  stockCompras = stockCompras.filter((element) => {
    return element.nombre != nombre;
  });
};

const calcularTotal = () => {
  return stockCompras.reduce((total, valorActual) => {
    return total + valorActual.precio;
  }, 0);
};

const formatearPesos = (valor: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(valor);
};

agregarProductos("Camisa", 20000, 4);
agregarProductos("Pantalon", 60000, 5);
agregarProductos("Zapatos", 70000, 7);
agregarProductos("Gorra", 18000, 12);

eliminarProducto("Camisa");
eliminarProducto("Gorra");

console.log(calcularTotal());

console.log(stockCompras);

console.log(formatearPesos(calcularTotal()));
