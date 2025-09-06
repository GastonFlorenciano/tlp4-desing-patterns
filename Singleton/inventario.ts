export default class Inventario{
    private static instancia: Inventario;
    private devices: { nombre: string, tipo: string, estado: string }[] = [];

    private constructor() {}

    static obtenerInstancia(): Inventario {
        if (!Inventario.instancia){
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void{
        this.devices.push({nombre, tipo, estado});
    }

    listarEquipos(){
        return this.devices;
    }
}