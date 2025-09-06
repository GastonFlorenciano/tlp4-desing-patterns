interface Equipo{
    detalles(): string;
}

class Notebook implements Equipo{
    constructor(
        private nombre: string,
        private ram: string,
        private procesador: string
    ){}

    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Equipo{
    constructor(
        private nombre: string,
        private ram: string,
        private procesador: string
    ){}

    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class Servidor implements Equipo{
    constructor(
        private nombre: string,
        private ram: string,
        private procesador: string
    ){}

    detalles(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}GB, Procesador: ${this.procesador}`
    }
}

export default class EquipoFactory{
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo{
        if (tipo === "notebook" || tipo === "Notebook"){
            return new Notebook(nombre, ram, procesador);
        }
        else if (tipo === "desktop" || tipo === "Desktop"){
            return new Desktop(nombre, ram, procesador);
        }
        else if (tipo === "servidor" || tipo === "Servidor"){
            return new Servidor(nombre, ram, procesador);
        }
        else{
            throw new Error("Tipo de equipo no reconocido");
        }
    }
}