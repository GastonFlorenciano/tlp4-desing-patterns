interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): { nombre: string; tipo: string; estado: string }[];
}

export class InventarioViejo {
    private items: { nombre: string; tipo: string; estado: string }[] = [];

    agregarItem(nombre: string, tipo: string, estado: string): void {
        this.items.push({ nombre, tipo, estado });
    }

    obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
        return this.items;
    }
}

export class AdaptadorInventario implements Inventario {
    constructor(private inventarioViejo: InventarioViejo) {}

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return this.inventarioViejo.obtenerItems();
    }
}
