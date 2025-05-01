console.log('--------------Ejercicio biblioteca de libros---------------');

interface InterfaceBiblioteca {
    titulo: string,
    autor: string,
    leido: boolean
}

let bibliotecaLibros: InterfaceBiblioteca[] = [];

const agregarLibro = (titulo: string, autor: string) => {
    const nuevoLibro = {
        titulo,
        autor,
        leido: false
    }
    bibliotecaLibros.push(nuevoLibro)
}

const marcarComoLeido = (title: string) => {
    const libroLeido = bibliotecaLibros.find(element => element.titulo == title)
    if (libroLeido) {
        libroLeido.leido = true;
        console.log(`El libro ${title} se ha leido satisfactoriamente`);
    } else {
        console.log(`El libro ${title} no está en el listado`);
    }
}

const mostrarLibrosLeidos = () => {
    bibliotecaLibros.forEach(element => {
        console.log(`El libro ${element.titulo}, del autor ${element.autor} ya fue leido`);
    });
    
}

const buscarLibrosPorAutor = (autorr: string) => {
    const buscarLibro = bibliotecaLibros.filter(elem => elem.autor == autorr);
    
    if (buscarLibro.length != 0) {
        console.log(`El autor ${autorr} tiene los siguientes libros: `, buscarLibro);
    } else {
        console.log(`No se cuenta con libros del autor ${autorr} en la biblioteca`);
        
    }
}

agregarLibro('50 Sombras', 'Andrés')
agregarLibro('Caballo Troya', 'Miguel')
agregarLibro('El mosquiterito', 'Andrés')
agregarLibro('Dos mas uno', 'Luciano')
agregarLibro('Un coco en la selva', 'Romana')
agregarLibro('Un burro en pijama', 'Geremias')

marcarComoLeido('Caballo Troya');
marcarComoLeido('Dos mas uno');
marcarComoLeido('Coco loco');

mostrarLibrosLeidos();

buscarLibrosPorAutor('Andrés');
buscarLibrosPorAutor('Carmensol');