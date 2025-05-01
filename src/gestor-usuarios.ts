// Objetivo: Simular una mini base de datos.
// 1. Crea un array usuarios, cada uno:
//  - { id, nombre, edad, email, activo }
// 2. Funciones:
//  - registrarUsuario(nombre, edad, email)
//  - desactivarUsuario(id)
//  - listarActivos()
//  - buscarPorNombre(nombre)

console.log("--------------Ejercicio Gestor de Usuarios---------------");

interface UsuariosInterface {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
}

let listaUsuarios: UsuariosInterface[] = [];

const registrarUsuario = (nombre: string, edad: number, email: string) => {
  const id = listaUsuarios.length + 1;

  const agregarUsuario = {
    id,
    nombre,
    edad,
    email,
    activo: true,
  };

  const correoRegistrado = listaUsuarios.some(
    (element) => element.email == email
  );
  if (correoRegistrado) {
    console.log(`El correo ${email} existe, no puede ser agregado de nuevo.`);
    return;
  }

  listaUsuarios.push(agregarUsuario);
};

const desactivarUsuario = (id: number) => {
  listaUsuarios.map((element) => {
    if (element.id == id) {
      element.activo = false;
    }
  });
};

const listarActivos = () => {
  listaUsuarios.filter((element) => {
    if (element.activo == true) {
      console.log("Los usuarios activos son:", element.nombre);
    }
  });
};

const buscarPorNombre = (nombre: string) => {
  const existeUsuario = listaUsuarios.find(
    (element) => element.nombre == nombre
  );

  if (existeUsuario) {
    console.log("El usuario " + nombre + " se encuentra registrado");
  } else {
    console.log("El usuario " + nombre + " NO se encuentra registrado");
  }
};

registrarUsuario("Andrés Felipe", 20, "a@gmail.com");
registrarUsuario("Andriu Felipe", 20, "a@gmail.com");
registrarUsuario("Jorge Muñoz", 30, "b@gmail.com");
registrarUsuario("San Pedro", 40, "c@gmail.com");
registrarUsuario("Panadero Carpintero", 50, "d@gmail.com");

desactivarUsuario(2);

listarActivos();

buscarPorNombre("Jorge Muñoz");
buscarPorNombre("Jorgilio Muñoz");
