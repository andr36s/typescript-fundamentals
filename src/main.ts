console.log('--------------Ejercicio Lista de tareas---------------');

interface InterfaceTarea {
    id: number;
    titulo: string;
    completado: boolean;
}

let objetoTareas: InterfaceTarea[] = [];

const agregarTarea = (titulo: string) => {
    const nuevaTarea = {
        id: Date.now(),
        titulo,
        completado: false
    }
    objetoTareas.push(nuevaTarea)
}

agregarTarea('Barrer')
agregarTarea('Trapear')
agregarTarea('Organizar cocina')
agregarTarea('Cocinar')
agregarTarea('Limpiar')
agregarTarea('Lavar baño')

console.log(objetoTareas);

const completarTarea = (element: string): void => {
    const tareaRealizada = objetoTareas.find(elemento => elemento.titulo == element)
    if (tareaRealizada) {
         tareaRealizada.completado = true;
         console.log(`La tarea ${element} se encuentra completa.`);
    } else {
        console.log(`La tarea ${element} no fue encontrada`);
    }
}

const listaTareasCompletas = () => {
    const listaTareas = objetoTareas.filter(element => element.completado == true);
    console.log('Las tareas completas son: ', listaTareas)
}

completarTarea('Limpiar')
completarTarea('Cocinar')
completarTarea('Lavar baño')
completarTarea('Cortar')
listaTareasCompletas()