interface Observador {
    actualizar(equipo: Equipo): void;
}

export class Soporte implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.estado}.`);
    }
}

export class Equipo {
    private observadores: Observador[] = [];
    public estado: string;

    constructor(
        public nombre: string,
        public tipo: string,
        estado: string
    ) {
        this.estado = estado;
    }

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this));
    }
}